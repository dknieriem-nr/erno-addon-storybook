type StorybookContext = {
  globals: {
    responsiveColumns_active?: boolean;
    responsiveColumns_bgType?: string;
    responsiveColumns_bgColor?: string;
    responsiveColumns_columns?: string;
    responsiveColumns_fullBleed?: boolean;
    drupalTheme?: string;
  };
  args: Record<string, unknown>,
  parameters: {
    options: {
      variant: string;
    };
    columns: {
      active: boolean;
    };
    fileName: string;
    drupalTheme?: string;
    supportedDrupalThemes?: Record<string, { title: string }>;
  };
};

import { ADDON_ID } from "./constants";
import { useGlobals } from "@storybook/api";

function createNewBody(htmlDoc: Document, wrapperDoc: Document, context: StorybookContext): HTMLElement {
  
  const wrapperWrapper = wrapperDoc.getElementById('___cl-wrapper'); //.getElementsByClassName('r01-layout').item(0);
  const clWrapper = htmlDoc.getElementById('___cl-wrapper');
  // Extract the missing scripts and re-add them.
  const scripts = htmlDoc.getElementsByTagName('script');
  const wrapperScripts = htmlDoc.getElementsByTagName('script');
  if(context.globals.responsiveColumns_active && context.globals.responsiveColumns_active === true){
    const allScripts = Array.from(scripts).concat(Array.from(wrapperScripts));

    const newBody = wrapperDoc.createElement('body');
    // Copy the body attributes from the old body to the new, in case there is
    // anything functionally relevant.
    wrapperDoc.body.getAttributeNames().forEach((attrName) => {
      newBody.setAttribute(attrName, wrapperDoc.body.getAttribute(attrName));
    });
    const wrapperColumns = Array.from(wrapperWrapper.getElementsByClassName('row').item(0).children); //wrapperDoc.getElementsByClassName('row')
    wrapperColumns.forEach( (column) => {
      column.innerHTML = clWrapper.innerHTML;
    })
    newBody.innerHTML = wrapperWrapper.innerHTML;
    // Include the Drupal "js footer" assets, i.e., all the <script> tags in
    // the <body>.
    const footerScripts = htmlDoc.createElement('div');
    footerScripts.append(...allScripts); //footerScripts.append(...Array.from(scripts));
    newBody.append(footerScripts);
    return newBody;
  } else {
    const allScripts = Array.from(scripts);

    const newBody = htmlDoc.createElement('body');
    // Copy the body attributes from the old body to the new, in case there is
    // anything functionally relevant.
    htmlDoc.body.getAttributeNames().forEach((attrName) => {
      newBody.setAttribute(attrName, htmlDoc.body.getAttribute(attrName));
    });
    
    newBody.innerHTML = clWrapper.innerHTML;
    // Include the Drupal "js footer" assets, i.e., all the <script> tags in
    // the <body>.
    const footerScripts = htmlDoc.createElement('div');
    footerScripts.append(...allScripts); //footerScripts.append(...Array.from(scripts));
    newBody.append(footerScripts);
    return newBody;
  }
  
}

function extractClContent(htmlDoc: Document): HTMLElement {
  const clWrapper = htmlDoc.getElementById('___cl-wrapper');
  // Extract the missing scripts and re-add them.
  const scripts = htmlDoc.getElementsByTagName('script');
  const newBody = htmlDoc.createElement('body');
  // Copy the body attributes from the old body to the new, in case there is
  // anything functionally relevant.
  htmlDoc.body.getAttributeNames().forEach((attrName) => {
    newBody.setAttribute(attrName, htmlDoc.body.getAttribute(attrName));
  });
  newBody.innerHTML = clWrapper.innerHTML;
  // Include the Drupal "js footer" assets, i.e., all the <script> tags in
  // the <body>.
  const footerScripts = htmlDoc.createElement('div');
  footerScripts.append(...Array.from(scripts));
  newBody.append(footerScripts);
  return newBody;
}

const loadColumnWrapper = async (url: string, context: StorybookContext) => {
  const fetchUrl = new URL(`${url}/_cl_server`);
  // , responsiveColumns_bgColor, responsiveColumns_columns, responsiveColumns_bgType, responsiveColumns_fullBleed } , updateGlobals] = useGlobals();
  const args = {
    "background_type": context.globals.responsiveColumns_bgType ?? "",
    "background_color":  context.globals.responsiveColumns_bgColor ?? "",
    "background_image":"",
    "margin_bottom":96,
    "text_color":"",
    "text_alignment":"left",
    "column_align":"stretch",
    "widths": context.globals.responsiveColumns_columns ?? "12",
    "full_bleed": context.globals.responsiveColumns_fullBleed ?? false,
  };
  console.log("Load Wrapper context:", context);
  const init: {
    _storyFileName: string;
    _drupalTheme: string;
    _variant?: string;
    _params: string;
  } = {
    _storyFileName: 'web/themes/custom/erno/templates/components/layout/section/section.stories.yml',
    _drupalTheme: context.globals.drupalTheme || context.parameters.drupalTheme,
    _params: btoa(unescape(encodeURIComponent(JSON.stringify(args)))),
  };
  // console.log(init);
  fetchUrl.search = new URLSearchParams(init).toString();
  // Remove any basic auth embedded into the URL and remove it as it will cause
  // the OPTIONS pre-flight request to fail.
  fetchUrl.username = '';
  fetchUrl.password = '';

  const response = await fetch(fetchUrl.toString());
  const htmlContents = await response.text();
  
  if (response.status >= 399) {
    const statusText = `${response.status} (${response.statusText})`;
    let headersText = '';
    response.headers.forEach((value, key) => {
      headersText += `${key}: ${value}\n`;
    });
    const requestedUrl = response.url;
    // There was an error. Storybook should show it.
    throw new Error(
      `There was an error while making the request to Drupal. Locate the request in the Network tab of your browser's developer tools for more information.\nRequested URL: ${requestedUrl}\nResponse code: ${statusText}\nResponse Headers:\n${headersText}\nResponse body: ${htmlContents}.`,
    );
  }
  try {
    // The HTML contents Drupal sends back includes regions, blocks, menus, etc.
    // We need to extract the HTML for the ___cl-wrapper.
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContents, 'text/html');
    // Swap the old body for the new.
    // htmlDoc.body = extractClContent(htmlDoc);
    return htmlDoc.children[0].outerHTML;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

const fetchStoryHtml = async (
  url: string,
  path: string,
  params: Record<string, unknown>,
  context: StorybookContext,
) => {
  // Remove trailing slash.
  url = url.replace(/\/$/, '');

  const variant = context.parameters?.options?.variant;

  const fetchUrl = new URL(`${url}/_cl_server`);
  const init: {
    _storyFileName: string;
    _drupalTheme: string;
    _variant?: string;
    _params: string;
  } = {
    _storyFileName: context.parameters.fileName,
    _drupalTheme: context.globals.drupalTheme || context.parameters.drupalTheme,
    _params: btoa(unescape(encodeURIComponent(JSON.stringify(context.args)))),
  };
  if (variant) {
    init._variant = variant;
  }
  fetchUrl.search = new URLSearchParams(init).toString();

  // Remove any basic auth embedded into the URL and remove it as it will cause
  // the OPTIONS pre-flight request to fail.
  fetchUrl.username = '';
  fetchUrl.password = '';

  const response = await fetch(fetchUrl.toString());
  const htmlContents = await response.text();
  const wrapperContents = await loadColumnWrapper(url, context);
  // console.log("wrapper contents: ", wrapperContents);
  if (response.status >= 399) {
    const statusText = `${response.status} (${response.statusText})`;
    let headersText = '';
    response.headers.forEach((value, key) => {
      headersText += `${key}: ${value}\n`;
    });
    const requestedUrl = response.url;
    // There was an error. Storybook should show it.
    throw new Error(
      `There was an error while making the request to Drupal. Locate the request in the Network tab of your browser's developer tools for more information.\nRequested URL: ${requestedUrl}\nResponse code: ${statusText}\nResponse Headers:\n${headersText}\nResponse body: ${htmlContents}.`,
    );
  }
  try {
    // The HTML contents Drupal sends back includes regions, blocks, menus, etc.
    // We need to extract the HTML for the ___cl-wrapper.
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(htmlContents, 'text/html');
    const wrapperDoc = parser.parseFromString(wrapperContents, 'text/html');
    // console.log("wrapper doc:", wrapperDoc);
    // Swap the old body for the new.
    htmlDoc.body = createNewBody(htmlDoc, wrapperDoc, context);
    return htmlDoc.children[0].outerHTML;
  } catch (e) {
    console.error(e);
    throw e;
  }
};

export default fetchStoryHtml;
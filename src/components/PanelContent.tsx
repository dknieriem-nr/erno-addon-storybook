import { styled } from "@storybook/theming";
import { useGlobals, useStorybookApi } from "@storybook/api";

import React, { useCallback, useEffect } from "react";
import { ADDON_ID, PARAM_KEY } from "../constants";
import { defaults } from "../defaults";
import { OptionsControl } from "@storybook/components";
import {
  ColumnsToggle,
  Container,
} from "./ui";

/**
 * our controls panel (the bread & butter)
 * @todo display viewport width
 * */
export const PanelContent: React.FC = (props: any) => {
  const [{ responsiveColumns_active, responsiveColumns_bgColor, responsiveColumns_columns, responsiveColumns_bgType, responsiveColumns_fullBleed } , updateGlobals] = useGlobals();
  const api = useStorybookApi();
  if( responsiveColumns_active === undefined ){
    updateGlobals({ 
      responsiveColumns_active: defaults.responsiveColumns_active, 
    });
  }
  if( responsiveColumns_columns === undefined ){
    updateGlobals({ 
      responsiveColumns_columns: defaults.responsiveColumns_columns, 
    });
  }
  if( responsiveColumns_bgColor === undefined ){
    updateGlobals({ 
      responsiveColumns_bgColor: defaults.responsiveColumns_bgColor, 
    });
  }
  if( responsiveColumns_bgType === undefined ){
    updateGlobals({ 
      responsiveColumns_bgType: defaults.responsiveColumns_bgType, 
    });
  }
  if( responsiveColumns_fullBleed === undefined ){
    updateGlobals({ 
      responsiveColumns_fullBleed: defaults.responsiveColumns_fullBleed, 
    });
  }
  const toggleColumns = useCallback(
    () =>
      updateGlobals({ 
        responsiveColumns_active: !responsiveColumns_active, 
      }),
      [updateGlobals, responsiveColumns_active]
    );

  const toggleFullBleed = useCallback(
    () =>
      updateGlobals({ 
        responsiveColumns_fullBleed: !responsiveColumns_fullBleed, 
      }),
      [updateGlobals, responsiveColumns_fullBleed]
    );

  const updateBgColor = useCallback(
    (bgColor: any) =>
      updateGlobals({ 
        responsiveColumns_bgColor: bgColor, 
      }),
      [updateGlobals, responsiveColumns_bgColor]
    );

    const updateBgType = useCallback(
      (bgType: any) =>
        updateGlobals({ 
          responsiveColumns_bgType: bgType, 
        }),
        [updateGlobals, responsiveColumns_bgType]
      );

    const updateColumns = useCallback(
      (columns: any) =>
        updateGlobals({ 
          responsiveColumns_columns: columns, 
        }),
        [updateGlobals, responsiveColumns_columns]
      );

    useEffect(() => {
      api.setAddonShortcut(ADDON_ID, {
        label: 'Toggle Section Wrapper [C]',
        defaultShortcut: ['C'],
        actionName: 'columns',
        showInMenu: false,
        action: toggleColumns,
      });
    }, [toggleColumns, api]);
  
  const bgTypeOptions = [
    '',
    'color',
    'blog-footer-section-subscribe',
    'blog-landing-section-nerdlog',
    'dark-green-hexagon',
    'disco-ball',
    'gradient',
    'graph-paper-left',
    'graph-paper-right',
    'graph-paper-right-dark',
    'image',
    'integrations',
    'pricing-cards',
    'pricing-tiers',
    'products',
    'quickstarts'
  ];

  const bgTypeLabels = {
    '': '',
    'color': 'color',
    'blog-footer-section-subscribe': 'blog-footer-section-subscribe',
    'blog-landing-section-nerdlog': 'blog-landing-section-nerdlog',
    'dark-green-hexagon': 'dark-green-hexagon',
    'disco-ball': 'disco-ball',
    'gradient': 'gradient',
    'graph-paper-left': 'graph-paper-left',
    'graph-paper-right': 'graph-paper-right',
    'graph-paper-right-dark': 'graph-paper-right-dark',
    'image': 'image',
    'integrations': 'integrations',
    'pricing-cards': 'pricing-cards',
    'pricing-tiers': 'pricing-tiers',
    'products': 'products',
    'quickstarts': 'quickstarts'
  }

  const bgOptions = [
    '',
    'nr-black',
    'nr-white',
    'nr-green',
    'blue-0',
    'blue-6',
    'gray-0',
    'green-4',
    'magenta-4',
    'gradient-rc-blue',
    'gradient-rc-purple',
    'gradient-top-blue',
    'gradient-top-green',
    'gradient-top-purple'
  ];

  const bgLabels = { 
    '': '',
    'nr-black': 'nr-black',
    'nr-white': 'nr-white',
    'nr-green': 'nr-green',
    'blue-0': 'blue-0',
    'blue-6': 'blue-6',
    'gray-0': 'gray-0',
    'green-4': 'green-4',
    'magenta-4': 'magenta-4',
    'gradient-rc-blue': 'gradient-rc-blue',
    'gradient-rc-purple': 'gradient-rc-purple',
    'gradient-top-blue': 'gradient-top-blue',
    'gradient-top-green': 'gradient-top-green',
    'gradient-top-purple': 'gradient-top-purple'
  };

  const colOptions = [
    '12',
    '6-6',
    '6-1-5',
    '4-4-4',
    '3-3-3-3',
  ];

  const colLabels = {
    '12': '12',
    '6-6': '6-6',
    '6-1-5': '6-1-5',
    '4-4-4': '4-4-4',
    '3-3-3-3': '3-3-3-3',
  };
  return (
      <Container padding="32px">
        <Row>
          <FlexAlignCenter style={{ flex: 1, marginRight: "auto" }}>
            <ColumnsToggle
              label="Toggle Section Wrapper"
              onChange={toggleColumns}
              isActive={responsiveColumns_active as boolean}
            />
          </FlexAlignCenter>
          <FlexAlignCenter style={{ flex: 1, justifyContent: "flex-end" }}>
            <OptionsControl
              name="bgType"
              onChange={(responsiveColumns_bgColor) => updateBgColor(responsiveColumns_bgColor)}
              labels={bgLabels}
              type="select"
              options={bgOptions}
              value={responsiveColumns_bgColor}
              defaultValue={responsiveColumns_bgColor}
            />
          </FlexAlignCenter>
          <FlexAlignCenter style={{ flex: 1, justifyContent: "flex-end" }}>
            <OptionsControl
              name="bgColor"
              onChange={(responsiveColumns_bgType) => updateBgType(responsiveColumns_bgType)}
              labels={bgTypeLabels}
              type="select"
              options={bgTypeOptions}
              value={responsiveColumns_bgType}
              defaultValue={responsiveColumns_bgType}
            />
          </FlexAlignCenter>
          <FlexAlignCenter style={{ flex: 1, justifyContent: "flex-end" }}>
          <OptionsControl
              name="columns"
              onChange={(responsiveColumns_columns) => updateColumns(responsiveColumns_columns)}
              labels={colLabels}
              type="select"
              options={colOptions}
              value={responsiveColumns_columns}
              defaultValue={responsiveColumns_columns}
            />
          </FlexAlignCenter>
          <FlexAlignCenter style={{ flex: 1, marginRight: "auto" }}>
            <ColumnsToggle
              label="Toggle Full Bleed"
              onChange={toggleFullBleed}
              isActive={responsiveColumns_fullBleed as boolean}
            />
          </FlexAlignCenter>
        </Row>
      </Container>
  );
};

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  gap: 32px;
`;

const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
`;

const BreakpointValue = styled.p`
  flex: 0.15;
  align-self: center;
  font-weight: bold;
  text-align: right;
  margin: 0;
`;

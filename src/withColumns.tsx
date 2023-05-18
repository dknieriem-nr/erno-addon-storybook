import React from "react";
import { DecoratorFunction, useEffect } from "@storybook/addons";
import { useAddonState, useGlobals, useState } from "@storybook/client-api";
import { ADDON_ID } from "./constants";
import { ColumnsProps } from "./types";
import { styled } from "@storybook/theming";
// import { useGlobals } from '@storybook/api';

export const withColumns: DecoratorFunction = (StoryFn, context) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [active] = useAddonState(`${ADDON_ID}_active`);
  const [bgColor] = useAddonState(`${ADDON_ID}_bgColor`);
  const [columns] = useAddonState(`${ADDON_ID}_columns`);
  const [{ drupalTheme }] = useGlobals();
  console.log(drupalTheme);
  console.log(React.version);
  useEffect(() => {
    if (columns) setIsLoaded(true);
  }, [columns]);
  const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  `;
  return (
    <Wrapper>
      { drupalTheme }
      {StoryFn()}
    </Wrapper>
  );
};

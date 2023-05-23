import React from "react";
import { DecoratorFunction, useEffect } from "@storybook/addons";
import { useAddonState, useGlobals, useState } from "@storybook/client-api";
import { ADDON_ID } from "./constants";
import { styled } from "@storybook/theming";

export const withColumns: DecoratorFunction = (StoryFn, context) => {

  const [columns] = useAddonState(`${ADDON_ID}_columns`);
  const [{ drupalTheme }] = useGlobals();
  console.log(drupalTheme);
  console.log(React.version);

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

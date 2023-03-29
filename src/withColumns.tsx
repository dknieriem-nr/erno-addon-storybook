import React, { useState } from "react";
import { DecoratorFunction, useEffect } from "@storybook/addons";
import { useAddonState } from "@storybook/client-api";
import { GridOverlay } from "./components/ui";
import { ADDON_ID } from "./constants";
import { ColumnsProps } from "./types";

export const withColumns: DecoratorFunction = (StoryFn, context) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [active] = useAddonState(`${ADDON_ID}_active`);
  const [bgColor] = useAddonState(`${ADDON_ID}_bgColor`);
  const [columns] = useAddonState(`${ADDON_ID}_columns`);

  useEffect(() => {
    if (columns) setIsLoaded(true);
  }, [columns]);

  return (
    <>
      {StoryFn()}
      {isLoaded && (
        <GridOverlay
          active={active as boolean}
          bgColor={bgColor as ColumnsProps["bgColor"]}
          columns={columns as ColumnsProps["columns"]}
        />
      )}
    </>
  );
};

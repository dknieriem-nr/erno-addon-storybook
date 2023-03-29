import { styled } from "@storybook/theming";
import { useAddonState, useParameter } from "@storybook/api";
import React, { useCallback, useEffect } from "react";
import { ADDON_ID, PARAM_KEY } from "../constants";
import { ColumnsProps } from "../types";
import {
  ColorControls,
  ColumnHeaders,
  ColumnsToggle,
  Container,
  Input,
  ColumnControls,
} from "./ui";

/**
 * our controls panel (the bread & butter)
 * @todo display viewport width
 * */
export const PanelContent: React.FC = () => {
  const parameters: ColumnsProps = useParameter(PARAM_KEY);
  const [isLoaded, setIsLoaded] = useAddonState(`${ADDON_ID}_isLoaded`);
 
  const [active, setActive] = useAddonState(`${ADDON_ID}_active`);
  const [bgColor, setBgColor] = useAddonState(`${ADDON_ID}bgColor`);
  const [columns, setColumns] = useAddonState(`${ADDON_ID}_columns`);

  const toggleColumns = useCallback(() => {
    setActive(!active);
  }, [active]);

  const updateBgColor = useCallback(
    (bgColor) => setBgColor(bgColor),
    [bgColor]
  );

  const updateColumns = useCallback(
    (columns) => setColumns(columns),
    [columns]
  );

  useEffect(() => {
    if (parameters && !isLoaded) {
      const { active, bgColor, columns } = parameters;
      const getParameters = async () => {
        await setBgColor(bgColor);
        await setColumns(columns);
        return await setActive(active);
      };
      getParameters().then((data) => setIsLoaded(true));
    }
  }, [parameters]);

  return (
    <>
      {isLoaded ? (
        <Container padding="32px">
          <Row>
            <FlexAlignCenter style={{ flex: 2, marginRight: "auto" }}>
              <ColumnsToggle
                onChange={toggleColumns}
                isActive={active as boolean}
              />
            </FlexAlignCenter>
            <FlexAlignCenter style={{ flex: 1, justifyContent: "flex-end" }}>
              <Input
                defaultValue={bgColor}
                onChange={(bgColor) => updateBgColor(bgColor)}
              />
            </FlexAlignCenter>
            <FlexAlignCenter style={{ justifyContent: "flex-end" }}>
            <ColumnControls
                onChange={(columns) => updateColumns(columns)}
                defaultValue={columns}
              />
            </FlexAlignCenter>
          </Row>
        </Container>
      ) : (
        <div style={{ display: "none" }}>loading placeholder</div>
      )}
    </>
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

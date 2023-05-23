import React from "react";
import { styled } from "@storybook/theming";

type LabelProps = {
  children?: any;
};

const Label: React.FC<LabelProps> = ({ children }) => (
  <StyledLabel>{children}</StyledLabel>
);

export default Label;

const StyledLabel = styled.div<LabelProps>`
  font-weight: bold;
  white-space: nowrap;
  line-height: 40px;
  margin: 32px;
`;

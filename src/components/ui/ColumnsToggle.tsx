import React from "react";
import { styled } from "@storybook/theming";
import { BooleanControl } from "@storybook/components";
import { Container, Label } from "./";

type ToggleProps = {
  isActive: boolean;
  label?: string;
  onChange?: () => void;
};

const ColumnsToggle: React.FC<ToggleProps> = ({ isActive, onChange, label }) => (
  <Container display="flex" alignItems="center" gap="16px">
    {label && <Label>{label}:</Label>}
    <BooleanControlContainer>
      <BooleanControl
        name="Toggle Columns"
        defaultValue={isActive}
        value={isActive}
        onChange={onChange}
      />
    </BooleanControlContainer>
  </Container>
);

export default ColumnsToggle;

const BooleanControlContainer = styled.div`
  label {
    margin-bottom: 0;
  }
`;

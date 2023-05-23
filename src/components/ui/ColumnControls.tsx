import React, { useState } from "react";
import { RangeControl } from "@storybook/components";
import { Container, Label } from "./";

type ColumnControlsProps = {
  defaultValue?: any;
  onChange?: (e: any) => void;
};

const ColumnControls: React.FC<ColumnControlsProps> = ({
  defaultValue,
  onChange,
}) => {
  const [columns, setColumns] = useState(defaultValue || 1);

  return (
    <Container display="flex" alignItems="center" gap="16px">
      <Label>Num Columns:</Label>
      <RangeControl
        name="columns"
        onChange={(e) => {
          onChange(e);
          setColumns(e);
        }}
        value={columns}
        defaultValue={defaultValue}
        min={1}
        max={4}
        step={1}
      />
    </Container>
  );
};

export default ColumnControls;

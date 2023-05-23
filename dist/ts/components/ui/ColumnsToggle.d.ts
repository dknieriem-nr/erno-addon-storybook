import React from "react";
type ToggleProps = {
    isActive: boolean;
    label?: string;
    onChange?: () => void;
};
declare const ColumnsToggle: React.FC<ToggleProps>;
export default ColumnsToggle;

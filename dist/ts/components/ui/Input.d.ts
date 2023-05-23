import React, { CSSProperties } from "react";
type InputProps = {
    flex?: CSSProperties["flex"];
    defaultValue?: any;
    onChange?: (e: any) => void;
};
declare const Input: React.FC<InputProps>;
export default Input;

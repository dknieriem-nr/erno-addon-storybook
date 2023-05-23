import React, { CSSProperties } from "react";
type ContainerProps = {
    display?: CSSProperties["display"];
    gap?: CSSProperties["gap"];
    padding?: CSSProperties["padding"];
    margin?: CSSProperties["margin"];
    alignItems?: CSSProperties["alignItems"];
    children?: any;
};
declare const Container: React.FC<ContainerProps>;
export default Container;

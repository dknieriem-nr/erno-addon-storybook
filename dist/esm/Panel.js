import React from "react";
import { AddonPanel } from "@storybook/components";
import { PanelContent } from "./components/PanelContent";
export var Panel = function Panel(props) {
  return /*#__PURE__*/React.createElement(AddonPanel, props, /*#__PURE__*/React.createElement(PanelContent, null));
};
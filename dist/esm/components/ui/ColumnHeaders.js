var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import { styled } from "@storybook/theming";
import { Container } from "./";
var ColumnHeaders = function ColumnHeaders() {
  return /*#__PURE__*/React.createElement(Container, {
    display: "flex",
    gap: "16px",
    padding: "16px 0 4px"
  }, /*#__PURE__*/React.createElement(Label, {
    style: {
      flex: 0.15
    }
  }), /*#__PURE__*/React.createElement(Label, null, "Columns:"), /*#__PURE__*/React.createElement(Label, null, "Gap size (in px):"), /*#__PURE__*/React.createElement(Label, null, "Max Width (in px):"), /*#__PURE__*/React.createElement(Label, null, "Gutter (in px):"));
};
export default ColumnHeaders;
var Label = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  display: block;\n  font-weight: bold;\n"])));
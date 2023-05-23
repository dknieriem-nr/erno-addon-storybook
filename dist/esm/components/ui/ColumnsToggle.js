var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import { styled } from "@storybook/theming";
import { BooleanControl } from "@storybook/components";
import { Container, Label } from "./";
var ColumnsToggle = function ColumnsToggle(_ref) {
  var isActive = _ref.isActive,
    onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/React.createElement(Container, {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }, label && /*#__PURE__*/React.createElement(Label, null, label, ":"), /*#__PURE__*/React.createElement(BooleanControlContainer, null, /*#__PURE__*/React.createElement(BooleanControl, {
    name: "Toggle Columns",
    defaultValue: isActive,
    value: isActive,
    onChange: onChange
  })));
};
export default ColumnsToggle;
var BooleanControlContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 0;\n  }\n"])));
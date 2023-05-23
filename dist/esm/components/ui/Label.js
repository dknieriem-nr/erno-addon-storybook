var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import { styled } from "@storybook/theming";
var Label = function Label(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(StyledLabel, null, children);
};
export default Label;
var StyledLabel = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: bold;\n  white-space: nowrap;\n  line-height: 40px;\n  margin: 32px;\n"])));
var _templateObject;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
import React from "react";
import { styled } from "@storybook/theming";
import { Form } from "@storybook/components";
var Input = function Input(_ref) {
  var _ref$flex = _ref.flex,
    flex = _ref$flex === void 0 ? "1" : _ref$flex,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange;
  return /*#__PURE__*/React.createElement(InputContainer, {
    flex: flex
  }, /*#__PURE__*/React.createElement(Form.Input, {
    defaultValue: defaultValue,
    onChange: onChange,
    size: "100%",
    type: "number"
  }));
};
export default Input;
var InputContainer = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: ", ";\n"])), function (_ref2) {
  var flex = _ref2.flex;
  return flex;
});
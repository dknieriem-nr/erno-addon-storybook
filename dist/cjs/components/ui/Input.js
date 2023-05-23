"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Input = function Input(_ref) {
  var _ref$flex = _ref.flex,
    flex = _ref$flex === void 0 ? "1" : _ref$flex,
    defaultValue = _ref.defaultValue,
    onChange = _ref.onChange;
  return /*#__PURE__*/_react["default"].createElement(InputContainer, {
    flex: flex
  }, /*#__PURE__*/_react["default"].createElement(_components.Form.Input, {
    defaultValue: defaultValue,
    onChange: onChange,
    size: "100%",
    type: "number"
  }));
};
var _default = Input;
exports["default"] = _default;
var InputContainer = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: ", ";\n"])), function (_ref2) {
  var flex = _ref2.flex;
  return flex;
});
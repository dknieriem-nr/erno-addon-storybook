"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _theming = require("@storybook/theming");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var Label = function Label(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledLabel, null, children);
};
var _default = Label;
exports["default"] = _default;
var StyledLabel = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  font-weight: bold;\n  white-space: nowrap;\n  line-height: 40px;\n  margin: 32px;\n"])));
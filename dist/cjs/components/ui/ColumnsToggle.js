"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _theming = require("@storybook/theming");
var _components = require("@storybook/components");
var _ = require("./");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ColumnsToggle = function ColumnsToggle(_ref) {
  var isActive = _ref.isActive,
    onChange = _ref.onChange,
    label = _ref.label;
  return /*#__PURE__*/_react["default"].createElement(_.Container, {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  }, label && /*#__PURE__*/_react["default"].createElement(_.Label, null, label, ":"), /*#__PURE__*/_react["default"].createElement(BooleanControlContainer, null, /*#__PURE__*/_react["default"].createElement(_components.BooleanControl, {
    name: "Toggle Columns",
    defaultValue: isActive,
    value: isActive,
    onChange: onChange
  })));
};
var _default = ColumnsToggle;
exports["default"] = _default;
var BooleanControlContainer = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  label {\n    margin-bottom: 0;\n  }\n"])));
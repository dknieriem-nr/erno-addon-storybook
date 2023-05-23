"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _theming = require("@storybook/theming");
var _ = require("./");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var ColumnHeaders = function ColumnHeaders() {
  return /*#__PURE__*/_react["default"].createElement(_.Container, {
    display: "flex",
    gap: "16px",
    padding: "16px 0 4px"
  }, /*#__PURE__*/_react["default"].createElement(Label, {
    style: {
      flex: 0.15
    }
  }), /*#__PURE__*/_react["default"].createElement(Label, null, "Columns:"), /*#__PURE__*/_react["default"].createElement(Label, null, "Gap size (in px):"), /*#__PURE__*/_react["default"].createElement(Label, null, "Max Width (in px):"), /*#__PURE__*/_react["default"].createElement(Label, null, "Gutter (in px):"));
};
var _default = ColumnHeaders;
exports["default"] = _default;
var Label = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  flex: 1;\n  display: block;\n  font-weight: bold;\n"])));
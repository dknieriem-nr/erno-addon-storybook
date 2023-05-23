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
var Container = function Container(_ref) {
  var _ref$display = _ref.display,
    display = _ref$display === void 0 ? "block" : _ref$display,
    _ref$gap = _ref.gap,
    gap = _ref$gap === void 0 ? 0 : _ref$gap,
    _ref$padding = _ref.padding,
    padding = _ref$padding === void 0 ? 0 : _ref$padding,
    _ref$margin = _ref.margin,
    margin = _ref$margin === void 0 ? 0 : _ref$margin,
    alignItems = _ref.alignItems,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement(StyledContainer, {
    display: display,
    padding: padding,
    gap: gap,
    margin: margin,
    alignItems: alignItems
  }, children);
};
var _default = Container;
exports["default"] = _default;
var StyledContainer = _theming.styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: ", ";\n  gap: ", ";\n  padding: ", ";\n  margin: ", ";\n  ", ";\n"])), function (_ref2) {
  var display = _ref2.display;
  return display;
}, function (_ref3) {
  var gap = _ref3.gap;
  return gap;
}, function (_ref4) {
  var padding = _ref4.padding;
  return padding;
}, function (_ref5) {
  var margin = _ref5.margin;
  return margin;
}, function (_ref6) {
  var alignItems = _ref6.alignItems;
  return "align-items: ".concat(alignItems);
});
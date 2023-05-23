"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Panel = void 0;
var _react = _interopRequireDefault(require("react"));
var _components = require("@storybook/components");
var _PanelContent = require("./components/PanelContent");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var Panel = function Panel(props) {
  return /*#__PURE__*/_react["default"].createElement(_components.AddonPanel, props, /*#__PURE__*/_react["default"].createElement(_PanelContent.PanelContent, null));
};
exports.Panel = Panel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parameters = exports.decorators = void 0;
var _withColumns = require("../withColumns");
var _fetchStoryHtml = _interopRequireDefault(require("../fetchStoryHtml"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var decorators = [_withColumns.withColumns];
exports.decorators = decorators;
var parameters = {
  server: {
    fetchStoryHtml: _fetchStoryHtml["default"]
  }
};
exports.parameters = parameters;
var _templateObject, _templateObject2, _templateObject3;
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import { styled } from "@storybook/theming";
import { useGlobals, useStorybookApi } from "@storybook/api";
import React, { useCallback, useEffect } from "react";
import { ADDON_ID } from "../constants";
import { defaults } from "../defaults";
import { OptionsControl } from "@storybook/components";
import { ColumnsToggle, Container, Label } from "./ui";

/**
 * our controls panel (the bread & butter)
 * @todo display viewport width
 * */
export var PanelContent = function PanelContent(props) {
  var _useGlobals = useGlobals(),
    _useGlobals2 = _slicedToArray(_useGlobals, 2),
    _useGlobals2$ = _useGlobals2[0],
    responsiveColumns_active = _useGlobals2$.responsiveColumns_active,
    responsiveColumns_bgColor = _useGlobals2$.responsiveColumns_bgColor,
    responsiveColumns_columns = _useGlobals2$.responsiveColumns_columns,
    responsiveColumns_bgType = _useGlobals2$.responsiveColumns_bgType,
    responsiveColumns_fullBleed = _useGlobals2$.responsiveColumns_fullBleed,
    responsiveColumns_textColor = _useGlobals2$.responsiveColumns_textColor,
    updateGlobals = _useGlobals2[1];
  var api = useStorybookApi();
  if (responsiveColumns_active === undefined) {
    updateGlobals({
      responsiveColumns_active: defaults.responsiveColumns_active
    });
  }
  // if( responsiveColumns_columns === undefined ){
  //   updateGlobals({ 
  //     responsiveColumns_columns: defaults.responsiveColumns_columns, 
  //   });
  // }
  // if( responsiveColumns_bgColor === undefined ){
  //   updateGlobals({ 
  //     responsiveColumns_bgColor: defaults.responsiveColumns_bgColor, 
  //   });
  // }
  // if( responsiveColumns_bgType === undefined ){
  //   updateGlobals({ 
  //     responsiveColumns_bgType: defaults.responsiveColumns_bgType, 
  //   });
  // }
  // if( responsiveColumns_fullBleed === undefined ){
  //   updateGlobals({ 
  //     responsiveColumns_fullBleed: defaults.responsiveColumns_fullBleed, 
  //   });
  // }
  var toggleColumns = useCallback(function () {
    return updateGlobals({
      responsiveColumns_active: !responsiveColumns_active
    });
  }, [updateGlobals, responsiveColumns_active]);
  var toggleFullBleed = useCallback(function () {
    return updateGlobals({
      responsiveColumns_fullBleed: !responsiveColumns_fullBleed
    });
  }, [updateGlobals, responsiveColumns_fullBleed]);
  var updateBgColor = useCallback(function (bgColor) {
    return updateGlobals({
      responsiveColumns_bgColor: bgColor
    });
  }, [updateGlobals, responsiveColumns_bgColor]);
  var updateBgType = useCallback(function (bgType) {
    return updateGlobals({
      responsiveColumns_bgType: bgType
    });
  }, [updateGlobals, responsiveColumns_bgType]);
  var updateTextColor = useCallback(function (textColor) {
    return updateGlobals({
      responsiveColumns_textColor: textColor
    });
  }, [updateGlobals, responsiveColumns_textColor]);
  var updateColumns = useCallback(function (columns) {
    return updateGlobals({
      responsiveColumns_columns: columns
    });
  }, [updateGlobals, responsiveColumns_columns]);
  useEffect(function () {
    api.setAddonShortcut(ADDON_ID, {
      label: 'Toggle Section Wrapper [C]',
      defaultShortcut: ['C'],
      actionName: 'columns',
      showInMenu: false,
      action: toggleColumns
    });
  }, [toggleColumns, api]);
  var bgTypeOptions = ['', 'color', 'blog-footer-section-subscribe', 'blog-landing-section-nerdlog', 'dark-green-hexagon', 'disco-ball', 'gradient', 'graph-paper-left', 'graph-paper-right', 'graph-paper-right-dark', 'image', 'integrations', 'pricing-cards', 'pricing-tiers', 'products', 'quickstarts'];
  var bgTypeLabels = {
    '': '',
    'color': 'color',
    'blog-footer-section-subscribe': 'blog-footer-section-subscribe',
    'blog-landing-section-nerdlog': 'blog-landing-section-nerdlog',
    'dark-green-hexagon': 'dark-green-hexagon',
    'disco-ball': 'disco-ball',
    'gradient': 'gradient',
    'graph-paper-left': 'graph-paper-left',
    'graph-paper-right': 'graph-paper-right',
    'graph-paper-right-dark': 'graph-paper-right-dark',
    'image': 'image',
    'integrations': 'integrations',
    'pricing-cards': 'pricing-cards',
    'pricing-tiers': 'pricing-tiers',
    'products': 'products',
    'quickstarts': 'quickstarts'
  };
  var bgOptions = ['', 'nr-black', 'nr-white', 'nr-green', 'blue-0', 'blue-6', 'gray-0', 'green-4', 'magenta-4', 'gradient-rc-blue', 'gradient-rc-purple', 'gradient-top-blue', 'gradient-top-green', 'gradient-top-purple'];
  var bgLabels = {
    '': '',
    'nr-black': 'nr-black',
    'nr-white': 'nr-white',
    'nr-green': 'nr-green',
    'blue-0': 'blue-0',
    'blue-6': 'blue-6',
    'gray-0': 'gray-0',
    'green-4': 'green-4',
    'magenta-4': 'magenta-4',
    'gradient-rc-blue': 'gradient-rc-blue',
    'gradient-rc-purple': 'gradient-rc-purple',
    'gradient-top-blue': 'gradient-top-blue',
    'gradient-top-green': 'gradient-top-green',
    'gradient-top-purple': 'gradient-top-purple'
  };
  var colOptions = ['12', '6-6', '6-1-5', '4-4-4', '3-3-3-3'];
  var colLabels = {
    '12': '12',
    '6-6': '6-6',
    '6-1-5': '6-1-5',
    '4-4-4': '4-4-4',
    '3-3-3-3': '3-3-3-3'
  };
  var textOptions = ['', 'black', 'white'];
  var textLabels = {
    '': '',
    'black': 'black',
    'white': 'white'
  };
  return /*#__PURE__*/React.createElement(Container, {
    padding: "32px"
  }, /*#__PURE__*/React.createElement(Row, null, /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Toggle Section Wrapper:"), /*#__PURE__*/React.createElement(ColumnsToggle, {
    onChange: toggleColumns,
    isActive: responsiveColumns_active
  })), /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Background Color:"), /*#__PURE__*/React.createElement(OptionsControl, {
    name: "bgColor",
    onChange: function onChange(responsiveColumns_bgType) {
      return updateBgType(responsiveColumns_bgType);
    },
    labels: bgTypeLabels,
    type: "select",
    options: bgTypeOptions,
    value: responsiveColumns_bgType,
    defaultValue: responsiveColumns_bgType
  })), /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Background Type:"), /*#__PURE__*/React.createElement(OptionsControl, {
    name: "bgType",
    onChange: function onChange(responsiveColumns_bgColor) {
      return updateBgColor(responsiveColumns_bgColor);
    },
    labels: bgLabels,
    type: "select",
    options: bgOptions,
    value: responsiveColumns_bgColor,
    defaultValue: responsiveColumns_bgColor
  })), /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Text Color:"), /*#__PURE__*/React.createElement(OptionsControl, {
    name: "textColor",
    onChange: function onChange(responsiveColumns_textColor) {
      return updateTextColor(responsiveColumns_textColor);
    },
    labels: textLabels,
    type: "select",
    options: textOptions,
    value: responsiveColumns_textColor,
    defaultValue: responsiveColumns_textColor
  })), /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Column Widths:"), /*#__PURE__*/React.createElement(OptionsControl, {
    name: "columns",
    onChange: function onChange(responsiveColumns_columns) {
      return updateColumns(responsiveColumns_columns);
    },
    labels: colLabels,
    type: "select",
    options: colOptions,
    value: responsiveColumns_columns,
    defaultValue: responsiveColumns_columns
  })), /*#__PURE__*/React.createElement(FlexAlignCenter, {
    style: {
      flex: 1,
      marginRight: "auto"
    }
  }, /*#__PURE__*/React.createElement(Label, null, "Toggle Full Bleed:"), /*#__PURE__*/React.createElement(ColumnsToggle, {
    onChange: toggleFullBleed,
    isActive: responsiveColumns_fullBleed
  }))));
};
var Row = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 16px;\n  gap: 32px;\n"])));
var FlexAlignCenter = styled.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"])));
var BreakpointValue = styled.p(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  flex: 0.15;\n  align-self: center;\n  font-weight: bold;\n  text-align: right;\n  margin: 0;\n"])));
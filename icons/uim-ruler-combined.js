import * as React from "react";
import "../utils/style.css";

function UimRulerCombined(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14 10h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1zM9 6a1 1 0 0 0-1 1v1H7a1 1 0 0 0 0 2h3V7a1 1 0 0 0-1-1zm1 6v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10 12v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h3v-2H7a1 1 0 0 1 0-2h1V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h2V7a1 1 0 0 1 2 0v3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10 16v2H7a1 1 0 0 1-1-1 1 1 0 0 1 1-1zm8-6h-2V7a1 1 0 0 1 1-1 1 1 0 0 1 1 1z"
  }));
}

export default UimRulerCombined;
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
    d: "M14 10H12V7a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1zM9 6A1 1 0 0 0 8 7V8H7a1 1 0 0 0 0 2h3V7A1 1 0 0 0 9 6zM10 12v2H7a1 1 0 0 1-1-1H6a1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10,12v2H7a1,1,0,0,1-1-1H6a1,1,0,0,1,1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21,2H3A.99974.99974,0,0,0,2,3V21a.99974.99974,0,0,0,1,1H9a.99974.99974,0,0,0,1-1V18H7a1,1,0,0,1,0-2h3V14H7a1,1,0,0,1,0-2h3V10H7A1,1,0,0,1,7,8H8V7a1,1,0,0,1,2,0v3h2V7a1,1,0,0,1,2,0v3h2V7a1,1,0,0,1,2,0v3h3a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10 16v2H7a1 1 0 0 1-1-1H6a1 1 0 0 1 1-1zM18 10H16V7a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1z"
  }));
}

export default UimRulerCombined;
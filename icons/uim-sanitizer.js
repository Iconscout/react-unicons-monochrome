import * as React from "react";
import "../utils/style.css";

function UimSanitizer(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M5 5a1 1 0 0 1-.707-1.707l.829-.829A4.967 4.967 0 0 1 8.657 1H17a1 1 0 0 1 0 2H8.657a3.022 3.022 0 0 0-2.121.878l-.829.829A.997.997 0 0 1 5 5Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M10 3v2.5l.4-.3A1 1 0 0 1 11 5h4a1 1 0 0 1 .6.2l.4.3V3Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 13,
    cy: 15,
    r: 2,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "m18.8 7.6-3.2-2.4A1 1 0 0 0 15 5h-4a1 1 0 0 0-.6.2L7.2 7.6A3.016 3.016 0 0 0 6 10v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a3.015 3.015 0 0 0-1.2-2.4ZM13 18a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3Z"
  }));
}

export default UimSanitizer;
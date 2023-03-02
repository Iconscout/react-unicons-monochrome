import * as React from "react";
import "../utils/style.css";

function UimBorderOut(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M20 21H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1ZM5 19h14V5H5Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 16,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 8,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 12,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 12,
    r: 1,
    opacity: 0.5
  }));
}

export default UimBorderOut;
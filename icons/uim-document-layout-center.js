import * as React from "react";
import "../utils/style.css";

function UimDocumentLayoutCenter(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 8h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM5 8H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 8,
    height: 8,
    x: 8,
    y: 4,
    opacity: 1,
    rx: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 16H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-8 4H3a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}

export default UimDocumentLayoutCenter;
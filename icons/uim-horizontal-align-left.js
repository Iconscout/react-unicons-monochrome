import * as React from "react";
import "../utils/style.css";

function UimHorizontalAlignLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16 10H4V6h11a1 1 0 0 1 1 1v3z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 18H4v-8h17a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M3 22a1 1 0 0 1-1-.999V3a1 1 0 0 1 2 0v18a1 1 0 0 1-.999 1H3z"
  }));
}

export default UimHorizontalAlignLeft;
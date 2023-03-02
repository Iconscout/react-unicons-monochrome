import * as React from "react";
import "../utils/style.css";

function UimHeadSideCough(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 16.999,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 2,
    cy: 18,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5,
    cy: 21,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21.13 21h-8.463a1 1 0 0 1-1-1v-2H10.8a1.935 1.935 0 0 1-1.934-1.934v-1.8H8a1 1 0 0 1-.904-1.426l1.77-3.758v-.016a7.067 7.067 0 0 1 7.284-7.063A7.252 7.252 0 0 1 23 9.321v.212a1.031 1.031 0 0 1-.033.257l-1.796 6.767.919 3.164A1 1 0 0 1 21.13 21Z"
  }));
}

export default UimHeadSideCough;
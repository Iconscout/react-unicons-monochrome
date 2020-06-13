import * as React from "react";
import "../utils/style.css";

function UimApps(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 9,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 9,
    x: 2,
    y: 13,
    opacity: 0.5,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 9,
    x: 13,
    y: 2,
    opacity: 0.5,
    rx: 1
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 9,
    x: 13,
    y: 13,
    opacity: 0.5,
    rx: 1
  }));
}

export default UimApps;
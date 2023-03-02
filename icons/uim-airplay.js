import * as React from "react";
import "../utils/style.css";

function UimAirplay(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 15,
    x: 2,
    y: 3,
    opacity: 0.5,
    rx: 3
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M16 21H8a1 1 0 0 1-.832-1.555l4-6a1.038 1.038 0 0 1 1.664 0l4 6A1 1 0 0 1 16 21Z"
  }));
}

export default UimAirplay;
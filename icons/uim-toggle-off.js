import * as React from "react";
import "../utils/style.css";

function UimToggleOff(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16.5 17.5h-9a5.5 5.5 0 1 1 0-11h9a5.5 5.5 0 1 1 0 11z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 2.5,
    opacity: 1
  }));
}

export default UimToggleOff;
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
    d: "M16.5,17.5h-9C4.46243,17.5,2,15.03757,2,12s2.46243-5.5,5.5-5.5h9c3.03757,0,5.5,2.46243,5.5,5.5S19.53757,17.5,16.5,17.5z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 2.5,
    opacity: 1
  }));
}

export default UimToggleOff;
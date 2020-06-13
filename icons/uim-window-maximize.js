import * as React from "react";
import "../utils/style.css";

function UimWindowMaximize(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 2,
    x: 2,
    y: 8,
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2,10h20l0,0v11c0,0.55228-0.44772,1-1,1H3c-0.55228,0-1-0.44772-1-1V10L2,10z"
  }));
}

export default UimWindowMaximize;
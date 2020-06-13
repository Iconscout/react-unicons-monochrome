import * as React from "react";
import "../utils/style.css";

function UimToggleOn(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16.5,
    cy: 12,
    r: 2.5,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M16.5,6.5h-9C4.46246,6.5,2,8.96246,2,12s2.46246,5.5,5.5,5.5h9c3.03754,0,5.5-2.46246,5.5-5.5S19.53754,6.5,16.5,6.5z M16.5,14.5c-1.38074,0-2.5-1.11926-2.5-2.5s1.11926-2.5,2.5-2.5S19,10.61926,19,12S17.88074,14.5,16.5,14.5z"
  }));
}

export default UimToggleOn;
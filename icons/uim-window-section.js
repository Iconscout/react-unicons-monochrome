import * as React from "react";
import "../utils/style.css";

function UimWindowSection(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("rect", {
    width: 6,
    height: 12,
    x: 9,
    y: 10,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2,10v11c0,0.55228,0.44772,1,1,1h4V10H2z"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.25,
    points: "22 8 2 8 2 10 7 10 7 22 9 22 9 10 15 10 15 22 17 22 17 10 22 10"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M17,10v12h4c0.55228,0,1-0.44772,1-1V10H17z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z"
  }));
}

export default UimWindowSection;
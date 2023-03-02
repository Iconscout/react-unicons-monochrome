import * as React from "react";
import "../utils/style.css";

function UimGoogleDrive(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M15.334 14.887H22l-6.666-11.55H8.667l6.667 11.55z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M8.667 3.338 2 14.888l3.334 5.774L12 9.112z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m8.667 14.887-3.333 5.775h13.333L22 14.887z"
  }));
}

export default UimGoogleDrive;
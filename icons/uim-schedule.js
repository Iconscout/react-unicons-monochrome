import * as React from "react";
import "../utils/style.css";

function UimSchedule(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M7 6a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H7zm10 0a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v2a1 1 0 0 1-.999 1H17z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19 4h-1v1a1 1 0 0 1-2 0V4H8v1a1 1 0 0 1-2 0V4H5a3 3 0 0 0-3 3v2h20V7a3 3 0 0 0-3-3z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 13,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 17,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 13,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 13,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 17,
    cy: 17,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2 9v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9H2zm5 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm5 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"
  }));
}

export default UimSchedule;
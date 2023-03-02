import * as React from "react";
import "../utils/style.css";

function UimBorderAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3.5 20.5a1 1 0 0 1-1-1v-16a1 1 0 0 1 1-1h16a1 1 0 0 1 0 2h-15v15a1 1 0 0 1-1 1Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 11.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 7.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 15.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 11.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 15.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19.5,
    cy: 19.5,
    r: 1,
    opacity: 0.5
  }));
}

export default UimBorderAlt;
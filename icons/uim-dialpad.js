import * as React from "react";
import "../utils/style.css";

function UimDialpad(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18,
    cy: 9,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18,
    cy: 3,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 18,
    cy: 15,
    r: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 21,
    r: 2,
    opacity: 0.5
  }));
}

export default UimDialpad;
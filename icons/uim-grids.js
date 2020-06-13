import * as React from "react";
import "../utils/style.css";

function UimGrids(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M23,21V3a.99974.99974,0,0,0-1-1H17V22h5A.99974.99974,0,0,0,23,21Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M1,3V21a.99974.99974,0,0,0,1,1H7V2H2A.99974.99974,0,0,0,1,3Z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 6,
    height: 20,
    x: 9,
    y: 2,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("rect", {
    width: 2,
    height: 20,
    x: 7,
    y: 2,
    opacity: 0.25
  }), /*#__PURE__*/React.createElement("rect", {
    width: 2,
    height: 20,
    x: 15,
    y: 2,
    opacity: 0.25
  }));
}

export default UimGrids;
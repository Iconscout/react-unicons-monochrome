import * as React from "react";
import "../utils/style.css";

function UimGrid(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M22,6H2V3c0-0.55228,0.44772-1,1-1h18c0.55228,0,1,0.44772,1,1V6z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 6,
    x: 2,
    y: 8,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2,16h9l0,0v6l0,0H3c-0.55228,0-1-0.44772-1-1V16L2,16z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 9,
    height: 6,
    x: 13,
    y: 8,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21,22h-8l0,0v-6l0,0h9l0,0v5C22,21.55228,21.55228,22,21,22z"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.25,
    points: "22 8 22 6 2 6 2 8 11 8 11 14 2 14 2 16 11 16 11 22 13 22 13 16 22 16 22 14 13 14 13 8"
  }));
}

export default UimGrid;
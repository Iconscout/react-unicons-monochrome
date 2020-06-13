import * as React from "react";
import "../utils/style.css";

function UimEllipsisH(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 2,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5,
    cy: 12,
    r: 2,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 19,
    cy: 12,
    r: 2,
    opacity: 1
  }));
}

export default UimEllipsisH;
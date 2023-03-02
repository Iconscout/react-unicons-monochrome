import * as React from "react";
import "../utils/style.css";

function UimLock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16 11H8a1 1 0 0 1-1-1V7a5 5 0 0 1 10 0v3a1 1 0 0 1-1 1ZM9 9h6V7a3 3 0 0 0-6 0Z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 13,
    x: 4,
    y: 9,
    opacity: 1,
    rx: 3
  }));
}

export default UimLock;
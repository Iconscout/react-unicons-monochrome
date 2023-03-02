import * as React from "react";
import "../utils/style.css";

function UimExclamationTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M20.057 22H3.943a3.023 3.023 0 0 1-2.618-4.534L9.382 3.511a3.023 3.023 0 0 1 5.236 0l8.057 13.955A3.023 3.023 0 0 1 20.057 22Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 17,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 14a1 1 0 0 1-1-1V9a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}

export default UimExclamationTriangle;
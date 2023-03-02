import * as React from "react";
import "../utils/style.css";

function UimColumns(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M11 2h2v20h-2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3 2h8v20H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M13 2h8a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-8V2z"
  }));
}

export default UimColumns;
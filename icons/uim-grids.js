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
    d: "M23 21V3a1 1 0 0 0-1-1h-5v20h5a1 1 0 0 0 1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M1 3v18a1 1 0 0 0 1 1h5V2H2a1 1 0 0 0-1 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M9 2h6v20H9z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M7 2h2v20H7zM15 2h2v20h-2z"
  }));
}

export default UimGrids;
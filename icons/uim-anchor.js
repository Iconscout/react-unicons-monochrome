import * as React from "react";
import "../utils/style.css";

function UimAnchor(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 22a8.01 8.01 0 0 1-8-8 1 1 0 0 1 2 0 6 6 0 0 0 12 0 1 1 0 0 1 2 0 8.01 8.01 0 0 1-8 8Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 22a1 1 0 0 1-1-1V7a1 1 0 0 1 2 0v14a1 1 0 0 1-1 1zm-5-7H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zm12 0h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14 11h-4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zm-2-3a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1z"
  }));
}

export default UimAnchor;
import * as React from "react";
import "../utils/style.css";

function UimMinusSquareFull(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17 13H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-4 11H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"
  }));
}

export default UimMinusSquareFull;
import * as React from "react";
import "../utils/style.css";

function UimAlignCenter(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 7H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm4 4H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm-4 4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2z"
  }));
}

export default UimAlignCenter;
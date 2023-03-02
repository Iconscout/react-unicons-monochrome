import * as React from "react";
import "../utils/style.css";

function UimAlignAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10 5H7a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm0 4h-7a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zm-4 4h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z"
  }));
}

export default UimAlignAlt;
import * as React from "react";
import "../utils/style.css";

function UimSpaceKey(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 15H3a1 1 0 0 1-1-1v-4a1 1 0 0 1 2 0v3h16v-3a1 1 0 0 1 2 0v4a1 1 0 0 1-1 1Z"
  }));
}

export default UimSpaceKey;
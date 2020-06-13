import * as React from "react";
import "../utils/style.css";

function UimAlignCenterJustify(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 5H3A1 1 0 0 1 3 3H21a1 1 0 0 1 0 2zM21 9H3A1 1 0 0 1 3 7H21a1 1 0 0 1 0 2zM21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 17H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM17 21H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2z"
  }));
}

export default UimAlignCenterJustify;
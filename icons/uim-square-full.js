import * as React from "react";
import "../utils/style.css";

function UimSquareFull(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21,22H3a.99974.99974,0,0,1-1-1V3A.99974.99974,0,0,1,3,2H21a.99974.99974,0,0,1,1,1V21A.99974.99974,0,0,1,21,22ZM4,20H20V4H4Z"
  }));
}

export default UimSquareFull;
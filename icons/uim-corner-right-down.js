import * as React from "react";
import "../utils/style.css";

function UimCornerRightDown(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21.707 13.35a1 1 0 0 0-1.414 0l-2.921 2.921V8.314a4.005 4.005 0 0 0-4-4H3a1 1 0 0 0 0 2h10.372a2.002 2.002 0 0 1 2 2v7.958L12.45 13.35a1 1 0 0 0-1.414 1.414l4.628 4.628a1.004 1.004 0 0 0 1.415 0l4.628-4.628a1 1 0 0 0 0-1.414Z"
  }));
}

export default UimCornerRightDown;
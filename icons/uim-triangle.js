import * as React from "react";
import "../utils/style.css";

function UimTriangle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21,20.794H3a1,1,0,0,1-.86621-1.5l9-15.5879a1.04009,1.04009,0,0,1,1.73242,0l9,15.5879A1,1,0,0,1,21,20.794Z"
  }));
}

export default UimTriangle;
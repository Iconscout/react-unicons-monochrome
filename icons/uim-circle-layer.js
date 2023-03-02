import * as React from "react";
import "../utils/style.css";

function UimCircleLayer(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M15 2a6.998 6.998 0 0 0-6.88 5.737 6 6 0 0 1 8.143 8.143A6.997 6.997 0 0 0 15 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7,
    cy: 17,
    r: 5,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M11 7a6 6 0 0 0-5.97 5.406 4.997 4.997 0 0 1 6.564 6.564A6 6 0 0 0 11 7z"
  }));
}

export default UimCircleLayer;
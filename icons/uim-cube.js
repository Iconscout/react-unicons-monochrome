import * as React from "react";
import "../utils/style.css";

function UimCube(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 12.3 3.5 7.05 12 1.8l8.5 5.25z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M12 22.2v-9.9l8.5-5.25v9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m12 22.2-8.5-5.25v-9.9L12 12.3z"
  }));
}

export default UimCube;
import * as React from "react";
import "../utils/style.css";

function UimProcess(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M8.625 8.5h-4.5a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v3.5h3.5a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 13a1 1 0 0 1-1-1A7.995 7.995 0 0 0 5.08 8.001a1 1 0 0 1-1.731-1.002A9.995 9.995 0 0 1 22 12a1 1 0 0 1-1 1zm-1.125 9a1 1 0 0 1-1-1v-3.5h-3.5a1 1 0 0 1 0-2h4.5a1 1 0 0 1 1 1V21a1 1 0 0 1-1 1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 22A10.012 10.012 0 0 1 2 12a1 1 0 0 1 2 0 7.995 7.995 0 0 0 14.92 3.999 1 1 0 0 1 1.731 1.002A10.032 10.032 0 0 1 12 22Z"
  }));
}

export default UimProcess;
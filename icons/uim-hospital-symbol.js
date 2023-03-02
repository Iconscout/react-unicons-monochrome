import * as React from "react";
import "../utils/style.css";

function UimHospitalSymbol(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M15 7a1 1 0 0 0-1 1v3h-4V8a1 1 0 0 0-2 0v8a1 1 0 0 0 2 0v-3h4v3a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4 14a1 1 0 0 1-2 0v-3h-4v3a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0v3h4V8a1 1 0 0 1 2 0Z"
  }));
}

export default UimHospitalSymbol;
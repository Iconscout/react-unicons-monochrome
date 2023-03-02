import * as React from "react";
import "../utils/style.css";

function UimObjectGroup(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M11 10h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10 11a1 1 0 0 1 1-1h3V8a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h2v-3zM4 22a2 2 0 1 1 0-4 2 2 0 0 1 0 4zM4 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm16 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 16a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M18.278 5a1.936 1.936 0 0 1 0-2H5.722a1.936 1.936 0 0 1 0 2h12.556zM20 18c.352.002.697.098 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556c.303-.18.648-.276 1-.278zM4 18c.352.002.697.098 1 .278V5.722a1.936 1.936 0 0 1-2 0v12.556c.303-.18.648-.276 1-.278zm14.278 1H5.722a1.936 1.936 0 0 1 0 2h12.556a1.936 1.936 0 0 1 0-2z"
  }));
}

export default UimObjectGroup;
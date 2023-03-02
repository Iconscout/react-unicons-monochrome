import * as React from "react";
import "../utils/style.css";

function UimRecordAudio(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 6,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6.007 6.007 0 0 1-6 6Z"
  }));
}

export default UimRecordAudio;
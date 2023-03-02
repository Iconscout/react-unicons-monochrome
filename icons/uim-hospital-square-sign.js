import * as React from "react";
import "../utils/style.css";

function UimHospitalSquareSign(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M15 6a1 1 0 0 0-1 1v4h-4V7a1 1 0 0 0-2 0v10a1 1 0 0 0 2 0v-4h4v4a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-3 15a1 1 0 0 1-2 0v-4h-4v4a1 1 0 0 1-2 0V7a1 1 0 0 1 2 0v4h4V7a1 1 0 0 1 2 0Z"
  }));
}

export default UimHospitalSquareSign;
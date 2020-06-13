import * as React from "react";
import "../utils/style.css";

function UimKeyholeSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19,2H5A3.00328,3.00328,0,0,0,2,5V19a3.00328,3.00328,0,0,0,3,3H19a3.00328,3.00328,0,0,0,3-3V5A3.00328,3.00328,0,0,0,19,2Zm-6,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z"
  }));
}

export default UimKeyholeSquare;
import * as React from "react";
import "../utils/style.css";

function UimCornerDownRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14.05762,22a1,1,0,0,1-.707-1.707l3.92089-3.92139-3.92089-3.92187a.99989.99989,0,1,1,1.41406-1.41407l4.62793,4.62891a.99964.99964,0,0,1,0,1.41406L14.76465,21.707A.99676.99676,0,0,1,14.05762,22Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M18.68555,17.37158H9.31445a5.00589,5.00589,0,0,1-5-5V3a1,1,0,0,1,2,0v9.37158a3.00328,3.00328,0,0,0,3,3h9.3711a1,1,0,0,1,0,2Z"
  }));
}

export default UimCornerDownRight;
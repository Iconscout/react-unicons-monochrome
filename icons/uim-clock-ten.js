import * as React from "react";
import "../utils/style.css";

function UimClockTen(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 0.5
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M13,7a1,1,0,0,0-2,0v3.26764L9.90234,9.63379a1.00016,1.00016,0,0,0-1,1.73242l2.59766,1.5A1.01383,1.01383,0,0,0,13,12Z"
  }));
}

export default UimClockTen;
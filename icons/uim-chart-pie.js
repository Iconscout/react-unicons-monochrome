import * as React from "react";
import "../utils/style.css";

function UimChartPie(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M12 12V2c5.523 0 10 4.477 10 10H12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m12 12 5 8.66A10.01 10.01 0 0 0 22 12H12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17 20.66 12 12V2c-5.523.002-9.999 4.48-9.997 10.003.002 5.523 4.48 9.999 10.004 9.997A10 10 0 0 0 17 20.662l.003-.005-.004.003z"
  }));
}

export default UimChartPie;
import * as React from "react";
import "../utils/style.css";

function UimCheckSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10.2 16.4a.997.997 0 0 1-.707-.293l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414l-6.8 6.8a.997.997 0 0 1-.707.293Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-3.293 7.307-6.8 6.8a1 1 0 0 1-1.414 0l-3.2-3.2a1 1 0 0 1 1.414-1.414l2.493 2.493 6.093-6.093a1 1 0 0 1 1.414 1.414Z"
  }));
}

export default UimCheckSquare;
import * as React from "react";
import "../utils/style.css";

function UimArrowCircleRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m12.707 16.707 4-4a1.004 1.004 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L13.586 11H8a1 1 0 0 0 0 2h5.586l-2.293 2.293a1 1 0 0 0 1.414 1.414Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M22 12a10 10 0 1 0-10 10 10.011 10.011 0 0 0 10-10Zm-10.707 4.707a1 1 0 0 1 0-1.414L13.586 13H8a1 1 0 0 1 0-2h5.586l-2.293-2.293a1 1 0 0 1 1.414-1.414l4 4a1.004 1.004 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0Z"
  }));
}

export default UimArrowCircleRight;
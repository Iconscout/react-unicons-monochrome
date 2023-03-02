import * as React from "react";
import "../utils/style.css";

function UimAngleDoubleRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M7.75 16a1 1 0 0 1-.707-1.707L9.336 12 7.043 9.707a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3A.997.997 0 0 1 7.75 16zm5.5 0a1 1 0 0 1-.707-1.707L14.836 12l-2.293-2.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414l-3 3a.997.997 0 0 1-.707.293z"
  }));
}

export default UimAngleDoubleRight;
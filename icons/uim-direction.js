import * as React from "react";
import "../utils/style.css";

function UimDirection(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 19.5a.997.997 0 0 1-.707-.293l-3-3a1 1 0 0 1 1.414-1.414L12 17.086l2.293-2.293a1 1 0 0 1 1.414 1.414l-3 3A.997.997 0 0 1 12 19.5zm3-9a.997.997 0 0 1-.707-.293L12 7.914l-2.293 2.293a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0l3 3A1 1 0 0 1 15 10.5z"
  }));
}

export default UimDirection;
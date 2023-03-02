import * as React from "react";
import "../utils/style.css";

function UimArrowCircleDown(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m7.293 12.707 4 4a1.004 1.004 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L13 13.586V8a1 1 0 0 0-2 0v5.586l-2.293-2.293a1 1 0 0 0-1.414 1.414Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10ZM7.293 11.293a1 1 0 0 1 1.414 0L11 13.586V8a1 1 0 0 1 2 0v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1.004 1.004 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414Z"
  }));
}

export default UimArrowCircleDown;
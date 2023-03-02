import * as React from "react";
import "../utils/style.css";

function UimCheckCircle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.99,
    d: "M10.313 16.094a.997.997 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a.997.997 0 0 1-.707.293Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.207 7.613-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413Z"
  }));
}

export default UimCheckCircle;
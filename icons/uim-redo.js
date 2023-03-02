import * as React from "react";
import "../utils/style.css";

function UimRedo(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19.875 8.5h-4.5a1 1 0 0 1 0-2h3.5V3a1 1 0 0 1 2 0v4.5a1 1 0 0 1-1 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 22a10 10 0 1 1 8.651-15.001 1 1 0 0 1-1.73 1.002A7.99 7.99 0 1 0 20 12a1 1 0 0 1 2 0 10.011 10.011 0 0 1-10 10Z"
  }));
}

export default UimRedo;
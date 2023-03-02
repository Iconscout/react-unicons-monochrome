import * as React from "react";
import "../utils/style.css";

function UimOkta(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M11.998 2a10 10 0 1 0 10 10 9.995 9.995 0 0 0-10-10Zm0 15.01a5.01 5.01 0 1 1 5.01-5.01 5.014 5.014 0 0 1-5.01 5.01Z"
  }));
}

export default UimOkta;
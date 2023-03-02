import * as React from "react";
import "../utils/style.css";

function UimUnlock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M7 9h10a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M9 7a3.002 3.002 0 0 1 5.116-2.13c.378.383.65.858.786 1.379l.002.007a1 1 0 0 0 1.934-.505 5.09 5.09 0 0 0-1.306-2.293A5.002 5.002 0 0 0 7 7v2h2V7z"
  }));
}

export default UimUnlock;
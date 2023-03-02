import * as React from "react";
import "../utils/style.css";

function UimBloggerAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M20 23H4a3.003 3.003 0 0 1-3-3V4a3.003 3.003 0 0 1 3-3h16a3.003 3.003 0 0 1 3 3v16a3.003 3.003 0 0 1-3 3z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M16.003 10.002H16V9a4.004 4.004 0 0 0-4-4h-2a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h4a5.006 5.006 0 0 0 5-5v-1a3 3 0 0 0-2.997-2.998zM10 9h1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zm4 6h-4a1 1 0 1 1 0-2h4a1 1 0 1 1 0 2z"
  }));
}

export default UimBloggerAlt;
import * as React from "react";
import "../utils/style.css";
function UimBox(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M20.23 7.24 12 12 3.77 7.24a1.98 1.98 0 0 1 .7-.71L11 2.76c.62-.35 1.38-.35 2 0l6.53 3.77c.29.173.531.418.7.71z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 12v9.5a2.09 2.09 0 0 1-.91-.21L4.5 17.48a2.003 2.003 0 0 1-1-1.73v-7.5a2.06 2.06 0 0 1 .27-1.01L12 12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M20.5 8.25v7.5a2.003 2.003 0 0 1-1 1.73l-6.62 3.82c-.275.13-.576.198-.88.2V12l8.23-4.76c.175.308.268.656.27 1.01z"
  }));
}
export default UimBox;
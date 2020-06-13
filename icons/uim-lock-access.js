import * as React from "react";
import "../utils/style.css";

function UimLockAccess(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21,10c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V4h-5c-0.6,0-1-0.4-1-1s0.4-1,1-1h6c0.6,0,1,0.4,1,1c0,0,0,0,0,0v6C22,9.6,21.6,10,21,10C21,10,21,10,21,10z M3,10c-0.6,0-1-0.4-1-1c0,0,0,0,0,0V3c0-0.6,0.4-1,1-1c0,0,0,0,0,0h6c0.6,0,1,0.4,1,1S9.6,4,9,4H4v5C4,9.6,3.6,10,3,10C3,10,3,10,3,10z M9,22H3c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v5h5c0.6,0,1,0.4,1,1S9.6,22,9,22z M21,22h-6c-0.6,0-1-0.4-1-1s0.4-1,1-1h5v-5c0-0.6,0.4-1,1-1s1,0.4,1,1v6C22,21.6,21.6,22,21,22C21,22,21,22,21,22z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M9 10h6c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-4C7 10.9 7.9 10 9 10zM11 9c0-.6.4-1 1-1s1 .4 1 1v1h2V9c0-1.7-1.3-3-3-3S9 7.3 9 9v1h2V9z"
  }));
}

export default UimLockAccess;
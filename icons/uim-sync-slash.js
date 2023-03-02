import * as React from "react";
import "../utils/style.css";

function UimSyncSlash(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 2C9.4 2 6.9 3 5 4.9V3c0-.6-.4-1-1-1s-1 .4-1 1v4.5c0 .6.4 1 1 1h4.5c.6 0 1-.4 1-1s-.4-1-1-1H6.2c3-3.2 8.1-3.3 11.3-.3C19.1 7.7 20 9.8 20 12c0 .6.4 1 1 1s1-.4 1-1c0-5.5-4.5-10-10-10zm8 13.5h-4.5c-.6 0-1 .4-1 1s.4 1 1 1h2.3c-3 3.2-8.1 3.3-11.3.3C4.9 16.3 4 14.2 4 12c0-.6-.4-1-1-1s-1 .4-1 1c0 5.5 4.5 10 10 10 2.6 0 5.2-1 7-2.9V21c0 .6.4 1 1 1s1-.4 1-1v-4.5c0-.6-.4-1-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3 22c-.6 0-1-.4-1-1 0-.3.1-.5.3-.7l18-18c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-18 18c-.2.2-.4.3-.7.3z"
  }));
}

export default UimSyncSlash;
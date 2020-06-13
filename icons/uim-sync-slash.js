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
    d: "M12,2C9.4,2,6.9,3,5,4.9V3c0-0.6-0.4-1-1-1S3,2.4,3,3v4.5c0,0.6,0.4,1,1,1c0,0,0,0,0,0h4.5c0.6,0,1-0.4,1-1s-0.4-1-1-1H6.2c3-3.2,8.1-3.3,11.3-0.3C19.1,7.7,20,9.8,20,12c0,0.6,0.4,1,1,1s1-0.4,1-1C22,6.5,17.5,2,12,2z M20,15.5h-4.5c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h2.3c-3,3.2-8.1,3.3-11.3,0.3C4.9,16.3,4,14.2,4,12c0-0.6-0.4-1-1-1s-1,0.4-1,1c0,5.5,4.5,10,10,10c2.6,0,5.2-1,7-2.9V21c0,0.6,0.4,1,1,1s1-0.4,1-1v-4.5C21,15.9,20.6,15.5,20,15.5C20,15.5,20,15.5,20,15.5z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3,22c-0.6,0-1-0.4-1-1c0-0.3,0.1-0.5,0.3-0.7l18-18c0.4-0.4,1-0.4,1.4,0c0.4,0.4,0.4,1,0,1.4c0,0,0,0,0,0l-18,18C3.5,21.9,3.3,22,3,22z"
  }));
}

export default UimSyncSlash;
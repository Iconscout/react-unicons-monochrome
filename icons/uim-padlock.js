import * as React from "react";
import "../utils/style.css";

function UimPadlock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2h2V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2h2V7zM13.5 14.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5c0 .4.2.8.5 1.1V17c0 0 0 0 0 0 0 .6.4 1 1 1 0 0 0 0 0 0 .6 0 1-.4 1-1v-1.4C13.3 15.3 13.5 14.9 13.5 14.5z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17,9H7c-1.7,0-3,1.3-3,3v7c0,1.7,1.3,3,3,3h10c1.7,0,3-1.3,3-3v-7C20,10.3,18.7,9,17,9z M13,15.6V17c0,0.6-0.4,1-1,1c0,0,0,0,0,0c-0.6,0-1-0.4-1-1c0,0,0,0,0,0v-1.4c-0.3-0.3-0.5-0.7-0.5-1.1c0-0.8,0.7-1.5,1.5-1.5s1.5,0.7,1.5,1.5C13.5,14.9,13.3,15.3,13,15.6z"
  }));
}

export default UimPadlock;
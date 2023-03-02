import * as React from "react";
import "../utils/style.css";

function UimGoogleDriveAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m6 19.796 3-5.197h12l-3 5.197H6z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M15 14.599h6L15 4.204H9L15 14.6z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m3 14.599 3 5.197L12 9.4 9 4.204 3 14.6z"
  }));
}

export default UimGoogleDriveAlt;
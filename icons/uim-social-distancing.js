import * as React from "react";
import "../utils/style.css";

function UimSocialDistancing(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M6 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 6 11Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M8.64 9.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 1 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228zM18 11a3.5 3.5 0 1 1 3.5-3.5A3.504 3.504 0 0 1 18 11z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.7,
    d: "M20.64 9.772a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 13 14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m21.207 18.293-2-2a1 1 0 0 0-1.414 1.414l.293.293H15.5a1 1 0 0 0 0 2h2.586l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414zM8.5 18H5.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L5.914 20H8.5a1 1 0 0 0 0-2z"
  }));
}

export default UimSocialDistancing;
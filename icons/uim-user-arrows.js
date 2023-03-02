import * as React from "react";
import "../utils/style.css";

function UimUserArrows(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M6 16.5A3.5 3.5 0 1 1 9.5 13 3.504 3.504 0 0 1 6 16.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M8.64 15.272a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 1 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228zM18 16.5a3.5 3.5 0 1 1 3.5-3.5 3.504 3.504 0 0 1-3.5 3.5z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.7,
    d: "M20.64 15.272a3.452 3.452 0 0 1-5.28 0A4.988 4.988 0 0 0 13 19.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.988 4.988 0 0 0-2.36-4.228Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m17.207 5.793-2-2a1 1 0 0 0-1.414 1.414l.293.293H9.914l.293-.293a1 1 0 0 0-1.414-1.414l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414-1.414L9.914 7.5h4.172l-.293.293a1 1 0 1 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414Z"
  }));
}

export default UimUserArrows;
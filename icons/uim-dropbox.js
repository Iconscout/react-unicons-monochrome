import * as React from "react";
import "../utils/style.css";

function UimDropbox(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    fillRule: "evenodd",
    d: "M16.53 10.091 21 12.939l-4.502 2.868L12 12.941l-4.498 2.866L3 12.939l4.47-2.848L3 7.243l4.502-2.868L12 7.241l4.498-2.866L21 7.243z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    fillRule: "evenodd",
    d: "M16.467 10.091 12 7.245l-4.467 2.846L12 12.936z",
    clipRule: "evenodd"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    fillRule: "evenodd",
    d: "m7.531 16.757-.029-.95L12 12.941l4.498 2.866.036.95-4.502 2.868z",
    clipRule: "evenodd"
  }));
}

export default UimDropbox;
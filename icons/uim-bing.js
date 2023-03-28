import * as React from "react";
import "../utils/style.css";

function UimBing(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.7,
    style: {
      isolation: "isolate"
    },
    points: "10.129 8.596 11.864 12.924 14.634 14.214 14.634 14.214 19 16.247 19 11.7 10.129 8.596"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 1,
    points: "14.634 14.214 14.634 14.214 9 17.457 9 3.4 5 2 5 19.76 9 22 19 16.247 19 11.7 14.634 14.214"
  }));
}

export default UimBing;
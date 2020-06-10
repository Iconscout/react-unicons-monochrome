import * as React from "react";

function UimStethoscope(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19 14a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 19 14zM8 15A6.00657 6.00657 0 0 1 2 9V3A1 1 0 0 1 3 2H5A1 1 0 0 1 5 4H4V9a4 4 0 0 0 8 0V4H11a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1V9A6.00657 6.00657 0 0 1 8 15z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19,14a2.96485,2.96485,0,0,1-1-.18433V15.5a4.5,4.5,0,0,1-9,0v-.59033a5.58042,5.58042,0,0,1-2,0V15.5a6.5,6.5,0,0,0,13,0V13.81573A2.96457,2.96457,0,0,1,19,14Z"
  }));
}

export default UimStethoscope;
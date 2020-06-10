import * as React from "react";

function UimAirplay(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 15,
    x: 2,
    y: 3,
    opacity: 0.5,
    rx: 3
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M16,21H8a.99992.99992,0,0,1-.832-1.55469l4-6a1.03785,1.03785,0,0,1,1.66406,0l4,6A.99992.99992,0,0,1,16,21Z"
  }));
}

export default UimAirplay;
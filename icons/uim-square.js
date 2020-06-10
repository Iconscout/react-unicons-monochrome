import * as React from "react";

function UimSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 20,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 1
  }));
}

export default UimSquare;
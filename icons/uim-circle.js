import * as React from "react";

function UimCircle(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 10,
    opacity: 1
  }));
}

export default UimCircle;
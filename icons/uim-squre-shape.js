import * as React from "react";
import "../utils/style.css";

function UimSqureShape(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("rect", {
    width: 20,
    height: 20,
    x: 2,
    y: 2,
    opacity: 1,
    rx: 5
  }));
}

export default UimSqureShape;
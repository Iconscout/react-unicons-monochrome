import * as React from "react";
import "../utils/style.css";

function UimLock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16,11H8a.99974.99974,0,0,1-1-1V7A5,5,0,0,1,17,7v3A.99974.99974,0,0,1,16,11ZM9,9h6V7A3,3,0,0,0,9,7Z"
  }), /*#__PURE__*/React.createElement("rect", {
    width: 16,
    height: 13,
    x: 4,
    y: 9,
    opacity: 1,
    rx: 3
  }));
}

export default UimLock;
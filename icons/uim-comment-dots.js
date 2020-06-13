import * as React from "react";
import "../utils/style.css";

function UimCommentDots(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,2A10.00082,10.00082,0,0,0,4.25684,18.3291L2.293,20.293A.99991.99991,0,0,0,3,22h9A10,10,0,0,0,12,2ZM8,13a1,1,0,1,1,1-1A1,1,0,0,1,8,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,12,13Zm4,0a1,1,0,1,1,1-1A1,1,0,0,1,16,13Z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 8,
    cy: 12,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 16,
    cy: 12,
    r: 1,
    opacity: 1
  }));
}

export default UimCommentDots;
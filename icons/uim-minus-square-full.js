import * as React from "react";
import "../utils/style.css";

function UimMinusSquareFull(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21,2H3A.99974.99974,0,0,0,2,3V21a.99974.99974,0,0,0,1,1H21a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2ZM17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z"
  }));
}

export default UimMinusSquareFull;
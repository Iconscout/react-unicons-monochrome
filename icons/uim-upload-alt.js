import * as React from "react";
import "../utils/style.css";

function UimUploadAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M15.707,5.293l-3-3a.99962.99962,0,0,0-1.41406,0l-3,3A.99989.99989,0,0,0,9.707,6.707L11,5.41406V17a1,1,0,0,0,2,0V5.41406l1.293,1.293A.99989.99989,0,0,0,15.707,5.293Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M18,9H13v8a1,1,0,0,1-2,0V9H6a3.00328,3.00328,0,0,0-3,3v7a3.00328,3.00328,0,0,0,3,3H18a3.00328,3.00328,0,0,0,3-3V12A3.00328,3.00328,0,0,0,18,9Z"
  }));
}

export default UimUploadAlt;
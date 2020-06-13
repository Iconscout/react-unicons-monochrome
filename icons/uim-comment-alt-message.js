import * as React from "react";
import "../utils/style.css";

function UimCommentAltMessage(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17 9H7A1 1 0 0 1 7 7H17a1 1 0 0 1 0 2zM17 13H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19,2H5A3.00328,3.00328,0,0,0,2,5V15a3.00328,3.00328,0,0,0,3,3H16.58594l3.707,3.707A.99991.99991,0,0,0,22,21V5A3.00328,3.00328,0,0,0,19,2ZM17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Zm0-4H7A1,1,0,0,1,7,7H17a1,1,0,0,1,0,2Z"
  }));
}

export default UimCommentAltMessage;
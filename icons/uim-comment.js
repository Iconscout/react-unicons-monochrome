import * as React from "react";

function UimComment(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,22H3a.99991.99991,0,0,1-.707-1.707L4.25684,18.3291A10.00061,10.00061,0,1,1,12,22Z"
  }));
}

export default UimComment;
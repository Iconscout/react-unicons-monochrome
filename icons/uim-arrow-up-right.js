import * as React from "react";
import "../utils/style.css";

function UimArrowUpRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17,18a1,1,0,0,1-1-1V8H7A1,1,0,0,1,7,6H17a1,1,0,0,1,1,1V17A1,1,0,0,1,17,18Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z"
  }));
}

export default UimArrowUpRight;
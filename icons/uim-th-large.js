import * as React from "react";
import "../utils/style.css";

function UimThLarge(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M20,3H4A.99974.99974,0,0,0,3,4V20a.99974.99974,0,0,0,1,1H20a.99974.99974,0,0,0,1-1V4A.99974.99974,0,0,0,20,3ZM11,19H5V13h6Zm0-8H5V5h6Zm8,8H13V13h6Zm0-8H13V5h6Z"
  }));
}

export default UimThLarge;
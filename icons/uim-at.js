import * as React from "react";
import "../utils/style.css";

function UimAt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,16.5A4.5,4.5,0,1,1,16.5,12,4.50491,4.50491,0,0,1,12,16.5Zm0-7A2.5,2.5,0,1,0,14.5,12,2.50294,2.50294,0,0,0,12,9.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,22A10,10,0,1,1,22,12v.75a3.75,3.75,0,0,1-7.5,0V8.5a1,1,0,0,1,2,0v4.25a1.75,1.75,0,0,0,3.5,0V12a8,8,0,1,0-4,6.92822,1.00016,1.00016,0,1,1,1,1.73242A10.02069,10.02069,0,0,1,12,22Z"
  }));
}

export default UimAt;
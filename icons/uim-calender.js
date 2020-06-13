import * as React from "react";
import "../utils/style.css";

function UimCalender(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M22,10H1.99976v9c0,1.65685,1.34315,3,3,3l0,0h14.00048c1.65685,0,3-1.34315,3-3L22,10z M7,8C6.44772,8,6,7.55228,6,7V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4C8,7.55228,7.55228,8,7,8z M17,8c-0.55228,0-1-0.44772-1-1V3c0-0.55228,0.44772-1,1-1s1,0.44772,1,1v4C18,7.55228,17.55228,8,17,8z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19,4h-1v3c0,0.55228-0.44772,1-1,1s-1-0.44772-1-1V4H8v3c0,0.55228-0.44772,1-1,1S6,7.55228,6,7V4H4.99951c-1.65685,0-3,1.34315-3,3v3H22V7C22,5.34315,20.65685,4,19,4z"
  }));
}

export default UimCalender;
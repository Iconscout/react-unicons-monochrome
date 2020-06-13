import * as React from "react";
import "../utils/style.css";

function UimBox(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M20.23,7.24L12,12L3.77,7.24c0.16898-0.29248,0.40995-0.53689,0.7-0.71L11,2.76c0.62072-0.35004,1.37928-0.35004,2,0l6.53,3.77C19.82005,6.70311,20.06102,6.94752,20.23,7.24z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,12v9.5c-0.31529-0.00043-0.6264-0.07223-0.91-0.21L4.5,17.48c-0.61772-0.35735-0.99865-1.01637-1-1.73v-7.5c0.00166-0.35428,0.09466-0.70215,0.27-1.01L12,12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M20.5,8.25v7.5c-0.00135,0.71363-0.38228,1.37265-1,1.73l-6.62,3.82c-0.27531,0.12984-0.57562,0.1981-0.88,0.2V12l8.23-4.76C20.40534,7.54785,20.49834,7.89572,20.5,8.25z"
  }));
}

export default UimBox;
import * as React from "react";
import "../utils/style.css";

function UimCornerDownLeft(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M9.942 22a.997.997 0 0 1-.707-.293l-4.628-4.628a1 1 0 0 1 0-1.414l4.628-4.63a1 1 0 0 1 1.414 1.415l-3.92 3.922 3.92 3.921A1 1 0 0 1 9.942 22Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M15.686 17.372H5.314a1 1 0 0 1 0-2h10.372a2.002 2.002 0 0 0 2-2V3a1 1 0 0 1 2 0v10.372a4.004 4.004 0 0 1-4 4Z"
  }));
}

export default UimCornerDownLeft;
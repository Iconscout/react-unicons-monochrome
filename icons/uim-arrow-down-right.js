import * as React from "react";
import "../utils/style.css";

function UimArrowDownRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17 18H7a1 1 0 0 1 0-2h9V7a1 1 0 0 1 2 0v10a1 1 0 0 1-1 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17 18a.997.997 0 0 1-.707-.293l-10-10a1 1 0 0 1 1.414-1.414l10 10A1 1 0 0 1 17 18Z"
  }));
}

export default UimArrowDownRight;
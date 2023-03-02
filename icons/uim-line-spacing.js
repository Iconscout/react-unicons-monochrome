import * as React from "react";
import "../utils/style.css";

function UimLineSpacing(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 8H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2zm0 5H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M4.667 18.5a1 1 0 0 1-1-1v-11a1 1 0 0 1 2 0v11a1 1 0 0 1-1 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 18H10a1 1 0 0 1 0-2h11a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M6.334 9a.997.997 0 0 1-.77-.36l-.897-1.078-.898 1.079A1 1 0 0 1 2.23 7.359l1.667-2A1.002 1.002 0 0 1 4.667 5a1 1 0 0 1 .769.36l1.666 2A1 1 0 0 1 6.334 9zM4.667 19a1.002 1.002 0 0 1-.769-.36l-1.667-2a1 1 0 1 1 1.538-1.28l.898 1.078.897-1.078a1 1 0 0 1 1.538 1.28l-1.666 2a1 1 0 0 1-.769.36z"
  }));
}

export default UimLineSpacing;
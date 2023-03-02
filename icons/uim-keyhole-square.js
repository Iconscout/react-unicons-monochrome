import * as React from "react";
import "../utils/style.css";

function UimKeyholeSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14 10a2 2 0 1 0-3 1.723V15a1 1 0 0 0 2 0v-3.277A1.991 1.991 0 0 0 14 10Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19 2H5a3.003 3.003 0 0 0-3 3v14a3.003 3.003 0 0 0 3 3h14a3.003 3.003 0 0 0 3-3V5a3.003 3.003 0 0 0-3-3Zm-6 9.723V15a1 1 0 0 1-2 0v-3.277a2 2 0 1 1 2 0Z"
  }));
}

export default UimKeyholeSquare;
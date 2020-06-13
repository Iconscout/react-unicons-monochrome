import * as React from "react";
import "../utils/style.css";

function UimSubject(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 8H3A1 1 0 0 1 3 6H21a1 1 0 0 1 0 2zM13 18H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2zM21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
  }));
}

export default UimSubject;
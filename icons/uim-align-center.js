import * as React from "react";
import "../utils/style.css";

function UimAlignCenter(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 7H3A1 1 0 0 1 3 5H21a1 1 0 0 1 0 2zM17 11H7A1 1 0 0 1 7 9H17a1 1 0 0 1 0 2zM21 15H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM17 19H7a1 1 0 0 1 0-2H17a1 1 0 0 1 0 2z"
  }));
}

export default UimAlignCenter;
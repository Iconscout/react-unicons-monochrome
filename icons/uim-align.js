import * as React from "react";
import "../utils/style.css";

function UimAlign(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 7H3A1 1 0 0 1 3 5H21a1 1 0 0 1 0 2zM13 11H3A1 1 0 0 1 3 9H13a1 1 0 0 1 0 2zM21 19H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 15H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19,14.6665a.99929.99929,0,0,1-1-1v-3.333a.9997.9997,0,0,1,1.64014-.76807l2,1.6665a.9996.9996,0,0,1,0,1.53614l-2,1.6665A.99869.99869,0,0,1,19,14.6665Z"
  }));
}

export default UimAlign;
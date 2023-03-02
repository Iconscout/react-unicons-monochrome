import * as React from "react";
import "../utils/style.css";

function UimListUiAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21.5 8h-14a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 5h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zm0 5h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 3.5,
    cy: 7,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 7.5,
    cy: 12,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 11.5,
    cy: 17,
    r: 1,
    opacity: 1
  }));
}

export default UimListUiAlt;
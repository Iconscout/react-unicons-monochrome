import * as React from "react";
import "../utils/style.css";

function UimHeadSideCough(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 6,
    cy: 16.999,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 2,
    cy: 18,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("circle", {
    cx: 5,
    cy: 21,
    r: 1,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21.12988,21H12.667a.99974.99974,0,0,1-1-1V18H10.7998a1.9355,1.9355,0,0,1-1.93359-1.93359V14.2666H8a.99943.99943,0,0,1-.9043-1.42627L8.86621,9.082V9.06641a7.06726,7.06726,0,0,1,7.28418-7.063A7.25231,7.25231,0,0,1,23,9.32129V9.5332a1.03147,1.03147,0,0,1-.0332.25635l-1.7959,6.76758.91894,3.16357a.9994.9994,0,0,1-.96,1.2793Z"
  }));
}

export default UimHeadSideCough;
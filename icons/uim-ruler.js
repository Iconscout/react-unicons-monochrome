import * as React from "react";
import "../utils/style.css";
function UimRuler(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10.586 20.485 7.05 16.95a1 1 0 0 1 0-1.414 1 1 0 0 1 1.415 0L12 19.07zm2.828-2.828-2.121-2.121a1 1 0 0 1 0-1.415 1 1 0 0 1 1.414 0l2.122 2.122zm2.829-2.828-3.536-3.536a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l3.536 3.535zM19.07 12 16.95 9.88a1 1 0 0 1 0-1.414 1 1 0 0 1 1.414 0l2.121 2.12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M22.606 7.05 16.95 1.395a1 1 0 0 0-1.414 0L1.394 15.535a1 1 0 0 0 0 1.414l5.656 5.657a1 1 0 0 0 1.414 0l2.122-2.12L7.05 16.95a1 1 0 1 1 1.415-1.414L12 19.07l1.414-1.414-2.121-2.121a1 1 0 0 1 1.414-1.415l2.121 2.122 1.415-1.415-3.536-3.535a1 1 0 0 1 1.414-1.414l3.536 3.535L19.07 12 16.95 9.88a1 1 0 0 1 1.414-1.414l2.121 2.12 2.121-2.12a1 1 0 0 0 0-1.414Z"
  }));
}
export default UimRuler;
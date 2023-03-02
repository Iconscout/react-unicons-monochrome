import * as React from "react";
import "../utils/style.css";

function UimOperaAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M11.996 2c-5.462 0-9.278 3.958-9.278 9.899C2.718 17.189 6.43 22 12.004 22c5.567 0 9.278-4.819 9.278-10.101 0-5.94-3.824-9.899-9.286-9.899Zm0 16c-2.397 0-2.66-3.536-2.66-6.143v-.052C9.336 8.987 9.758 6 11.979 6s2.67 3.076 2.67 5.894c0 2.607-.258 6.106-2.654 6.106Z"
  }));
}

export default UimOperaAlt;
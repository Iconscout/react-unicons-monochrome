import * as React from "react";
import "../utils/style.css";

function UimBatteryEmpty(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 14a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm-4 3H4a2.002 2.002 0 0 1-2-2V9a2.002 2.002 0 0 1 2-2h13a2.002 2.002 0 0 1 2 2v6a2.002 2.002 0 0 1-2 2z"
  }));
}

export default UimBatteryEmpty;
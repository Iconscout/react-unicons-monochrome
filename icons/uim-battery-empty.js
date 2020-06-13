import * as React from "react";
import "../utils/style.css";

function UimBatteryEmpty(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21 14a.99974.99974 0 0 1-1-1V11a1 1 0 0 1 2 0v2A.99974.99974 0 0 1 21 14zM17 17H4a2.00229 2.00229 0 0 1-2-2V9A2.00229 2.00229 0 0 1 4 7H17a2.00229 2.00229 0 0 1 2 2v6A2.00229 2.00229 0 0 1 17 17z"
  }));
}

export default UimBatteryEmpty;
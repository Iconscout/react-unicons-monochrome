import * as React from "react";
import "../utils/style.css";

function UimBatteryBolt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M13.98816,12.05872A1.02324,1.02324,0,0,0,13,11H9.7323l1.44348-2.5a1.00016,1.00016,0,1,0-1.73242-1l-2.30957,4A1.02216,1.02216,0,0,0,8,13h3.2677L9.82422,15.5a1.00016,1.00016,0,0,0,1.73242,1l2.30957-4A1.26723,1.26723,0,0,0,13.98816,12.05872Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M17 7H4A2.002 2.002 0 0 0 2 9v6a2.002 2.002 0 0 0 2 2h6.68945a.99991.99991 0 0 1-.86523-1.5L11.2677 13H8a1.02216 1.02216 0 0 1-.86621-1.5l2.30957-4a1.00016 1.00016 0 1 1 1.73242 1L9.7323 11H13a1.02328 1.02328 0 0 1 .98816 1.05872 1.26806 1.26806 0 0 1-.12195.44128l-2.30957 4a1.0001 1.0001 0 0 1-.86719.5H17a2.002 2.002 0 0 0 2-2V9A2.002 2.002 0 0 0 17 7zM21 14a1 1 0 0 1-1-1V11a1 1 0 0 1 2 0v2A1 1 0 0 1 21 14z"
  }));
}

export default UimBatteryBolt;
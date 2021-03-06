import * as React from "react";
import "../utils/style.css";

function UimClockSeven(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,6a1.003,1.003,0,0,0-1,1v4.73L9.4,14.5a.99911.99911,0,1,0,1.73,1l1.69-2.93A.9986.9986,0,0,0,13,12V7A1.003,1.003,0,0,0,12,6Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a.99867.99867,0,0,1-.18.57L11.13,15.5a.99911.99911,0,1,1-1.73-1L11,11.73V7a1,1,0,0,1,2,0Z"
  }));
}

export default UimClockSeven;
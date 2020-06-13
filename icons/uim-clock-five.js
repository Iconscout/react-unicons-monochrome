import * as React from "react";
import "../utils/style.css";

function UimClockFive(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,6a1.003,1.003,0,0,1,1,1v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.9986.9986,0,0,1,11,12V7A1.003,1.003,0,0,1,12,6Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.99867.99867,0,0,1,11,12Z"
  }));
}

export default UimClockFive;
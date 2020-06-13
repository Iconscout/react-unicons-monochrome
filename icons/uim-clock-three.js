import * as React from "react";
import "../utils/style.css";

function UimClockThree(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,6a.99974.99974,0,0,1,1,1v4h2a1,1,0,0,1,0,2H12a.99974.99974,0,0,1-1-1V7A.99974.99974,0,0,1,12,6Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4h2a1,1,0,0,1,0,2H12a.99974.99974,0,0,1-1-1Z"
  }));
}

export default UimClockThree;
import * as React from "react";
import "../utils/style.css";

function UimClock(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 6a1 1 0 0 1 1 1v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12V7a1 1 0 0 1 1-1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M2 12A10 10 0 1 0 12 2 10 10 0 0 0 2 12Zm9-5a1 1 0 0 1 2 0v4.422l2.098 1.212a1 1 0 0 1-1 1.732l-2.598-1.5A1.005 1.005 0 0 1 11 12Z"
  }));
}

export default UimClock;
import * as React from "react";
import "../utils/style.css";

function UimCornerRightDown(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21.707,13.3501a.99962.99962,0,0,0-1.41406,0l-2.92139,2.92138v-7.957a4.00458,4.00458,0,0,0-4-4H3a1,1,0,0,0,0,2H13.37158a2.002,2.002,0,0,1,2,2v7.95716L12.44971,13.3501a.99989.99989,0,0,0-1.41407,1.41406l4.62861,4.62811a1.0035,1.0035,0,0,0,1.41467,0L21.707,14.76416A.99962.99962,0,0,0,21.707,13.3501Z"
  }));
}

export default UimCornerRightDown;
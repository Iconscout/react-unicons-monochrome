import * as React from "react";
import "../utils/style.css";

function UimCornerUpRight(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M19.60834,8.01056a1.00351,1.00351,0,0,0-.21607-1.08948L14.76416,2.293A.99989.99989,0,0,0,13.3501,3.707l2.92138,2.92139h-7.957a4.00458,4.00458,0,0,0-4,4V21a1,1,0,0,0,2,0V10.62842a2.002,2.002,0,0,1,2-2h7.95716L13.3501,11.55029a.99989.99989,0,1,0,1.41406,1.41407l4.62811-4.62861A.99927.99927,0,0,0,19.60834,8.01056Z"
  }));
}

export default UimCornerUpRight;
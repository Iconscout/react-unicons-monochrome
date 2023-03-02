import * as React from "react";
import "../utils/style.css";

function UimVectorSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M5 8a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zM5 22a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1zm14 4a3 3 0 1 1 3-3 3.003 3.003 0 0 1-3 3zm0-4a1 1 0 1 0 1 1 1.001 1.001 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M16.184 20a2.805 2.805 0 0 1 0-2H7.816a2.806 2.806 0 0 1 0 2zM19 8a2.965 2.965 0 0 1-1-.184v8.368a2.806 2.806 0 0 1 2 0V7.816A2.965 2.965 0 0 1 19 8zM7.816 4A2.965 2.965 0 0 1 8 5a2.965 2.965 0 0 1-.184 1h8.368A2.965 2.965 0 0 1 16 5a2.965 2.965 0 0 1 .184-1zM5 16a2.965 2.965 0 0 1 1 .184V7.816A2.965 2.965 0 0 1 5 8a2.965 2.965 0 0 1-1-.184v8.368A2.965 2.965 0 0 1 5 16z"
  }));
}

export default UimVectorSquare;
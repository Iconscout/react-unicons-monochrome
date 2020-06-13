import * as React from "react";
import "../utils/style.css";

function UimAngleDown(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,15.12109a.99672.99672,0,0,1-.707-.293L7.05029,10.58594A.99989.99989,0,0,1,8.46436,9.17188L12,12.707l3.53564-3.53515a.99989.99989,0,0,1,1.41407,1.41406L12.707,14.82812A.99672.99672,0,0,1,12,15.12109Z"
  }));
}

export default UimAngleDown;
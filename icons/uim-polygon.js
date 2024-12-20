import * as React from "react";
import "../utils/style.css";
function UimPolygon(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M16.5,20.794h-9a.99983.99983,0,0,1-.86621-.5L2.13379,12.5a1.002,1.002,0,0,1,0-1l4.5-7.79395a.99983.99983,0,0,1,.86621-.5h9a.99987.99987,0,0,1,.86621.5l4.5,7.794a1.002,1.002,0,0,1,0,1l-4.5,7.79395A.99987.99987,0,0,1,16.5,20.794Z"
  }));
}
export default UimPolygon;
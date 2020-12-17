import * as React from "react";
import "../utils/style.css";

function UimWindows(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M2.0292,4.83164,10.17746,3.722l.00351,7.85962L2.0366,11.628,2.0292,4.83172Zm8.14437,7.65549.00623,7.86647L2.03551,19.23386,2.03505,12.4344l8.13844.05273Zm.98773-8.91036L21.9651,2v9.48164l-10.8038.08567V3.57677Zm10.8063,8.98435L21.965,22,11.16122,20.47518l-.01511-7.93174Z"
  }));
}

export default UimWindows;
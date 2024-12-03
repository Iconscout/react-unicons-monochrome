import * as React from "react";
import "../utils/style.css";
function UimHeadSideMask(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M20.476 9.287 12.337 12H4.5a1 1 0 0 0-.938 1.348l1.448 3.895c.012.034.027.067.043.099A2.984 2.984 0 0 0 7.736 19H12.5a1 1 0 0 0 .32-.052l5.864-1.978.616-2.319-5.8 1.956v-2.886l6.634-2.211.333-1.254A1.031 1.031 0 0 0 20.5 10v-.228c0-.163-.014-.324-.024-.485Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M3.508 12.894v.03-.03zm.17-.465A1.001 1.001 0 0 1 4.5 12h7.837l8.14-2.713a7.676 7.676 0 0 0-7.247-7.284 7.359 7.359 0 0 0-5.453 2.114A7.441 7.441 0 0 0 5.5 9.465l-1.852 3.011c-.005.009-.004.02-.01.03.015-.026.024-.053.04-.077zM13.5 13.721v2.886l5.8-1.956 1.167-4.395-.333 1.254-6.634 2.211zM18.537 17.522l.2-.754-.053.202-5.865 1.978A1 1 0 0 1 12.5 19h-4v2a1 1 0 0 0 1 1h9a1 1 0 0 0 .96-1.277Z"
  }));
}
export default UimHeadSideMask;
import * as React from "react";
import "../utils/style.css";

function UimVisualStudio(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M9.13313,14.2416,4.19906,18.08677,2.04679,17.01489V6.99362L4.19056,5.91323l4.9,3.85368L16.849,2l5.10421,2.03318V19.93279L16.87452,22Zm7.56275,1.35261V8.40579L12.051,12.00425l4.64484,3.59ZM4.3692,14.30115l2.44152-2.22033L4.3692,9.64781Z"
  }));
}

export default UimVisualStudio;
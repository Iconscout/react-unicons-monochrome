import * as React from "react";
import "../utils/style.css";

function UimVuejsAlt(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12.018 19.151 4.315 6h2.823l4.886 8.407L16.871 6h2.809z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m14.38 4.001-2.374 3.956-2.384-3.956H.825L12.02 23.115 23.161 4H14.38zm-2.362 15.15L4.315 6h2.823l4.886 8.407L16.871 6h2.809l-7.662 13.151z"
  }));
}

export default UimVuejsAlt;
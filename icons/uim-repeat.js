import * as React from "react";
import "../utils/style.css";

function UimRepeat(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M11.498 22a.997.997 0 0 1-.707-.293l-2.5-2.5a1 1 0 0 1 0-1.414l2.5-2.5a1 1 0 0 1 1.414 1.414L10.412 18.5l1.793 1.793A1 1 0 0 1 11.498 22z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 4.5h-2a1 1 0 0 0 0 2h1v11h-8.588l-1 1 1 1H21a1 1 0 0 0 1-1v-13a1 1 0 0 0-1-1z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12.5 2c.265 0 .52.105.707.293l2.5 2.5a1 1 0 0 1 0 1.414l-2.5 2.5a1 1 0 0 1-1.414-1.414L13.586 5.5l-1.793-1.793A1 1 0 0 1 12.5 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M5 17.5H4v-11h8.586l1-1-1-1H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2z"
  }));
}

export default UimRepeat;
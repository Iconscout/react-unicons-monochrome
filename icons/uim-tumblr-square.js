import * as React from "react";
import "../utils/style.css";

function UimTumblrSquare(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M13.571 17.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M2.019 2v20h19.963V2H2.019zm11.552 15.85a3.396 3.396 0 0 1-3.747-3.332v-4.076H8.562v-1.61a3.817 3.817 0 0 0 2.454-3.363.099.099 0 0 1 .09-.093h1.827v3.178h2.496v1.888h-2.505v3.884a1.094 1.094 0 0 0 1.2 1.229 2.936 2.936 0 0 0 1.007-.215l.6 1.779c-.611.49-1.376.75-2.16.73z"
  }));
}

export default UimTumblrSquare;
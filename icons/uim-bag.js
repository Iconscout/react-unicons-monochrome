import * as React from "react";
import "../utils/style.css";

function UimBag(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M19,6H5C3.34315,6,2,7.34315,2,9v2.72087L8.8374,14h6.3252L22,11.72087V9C22,7.34315,20.65685,6,19,6z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M10,6V5h4v1h2V5c-0.00126-1.10405-0.89595-1.99874-2-2h-4C8.89595,3.00126,8.00126,3.89595,8,5v1H10z M8.8374,14L2,11.72083V18c0.00181,1.65611,1.34389,2.99819,3,3h14c1.65611-0.00181,2.99819-1.34389,3-3v-6.27917L15.1626,14H8.8374z"
  }));
}

export default UimBag;
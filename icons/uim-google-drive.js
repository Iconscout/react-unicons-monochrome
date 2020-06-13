import * as React from "react";
import "../utils/style.css";

function UimGoogleDrive(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M15.33353,14.88737H22L15.33353,3.33791H8.66662L15.33353,14.88737z"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 1,
    points: "8.667 3.338 2 14.887 5.334 20.662 12 9.113"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.5,
    points: "8.667 14.887 5.334 20.662 18.667 20.662 22 14.887"
  }));
}

export default UimGoogleDrive;
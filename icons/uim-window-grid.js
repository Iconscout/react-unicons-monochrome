import * as React from "react";
import "../utils/style.css";

function UimWindowGrid(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.25,
    points: "22 11 10 11 10 2 8 2 8 11 8 11 8 13 8 13 8 22 10 22 10 13 22 13"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M3,2h5l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M10,2h11c0.55228,0,1,0.44772,1,1v8l0,0H10l0,0V2L10,2z M10,13h12l0,0v8c0,0.55228-0.44772,1-1,1H10l0,0V13L10,13z"
  }));
}

export default UimWindowGrid;
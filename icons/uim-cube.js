import * as React from "react";

function UimCube(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("polygon", {
    opacity: 1,
    points: "12 12.3 3.5 7.05 12 1.8 20.5 7.05"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.25,
    points: "12 22.2 12 12.3 20.5 7.05 20.5 16.95"
  }), /*#__PURE__*/React.createElement("polygon", {
    opacity: 0.5,
    points: "12 22.2 3.5 16.95 3.5 7.05 12 12.3"
  }));
}

export default UimCube;
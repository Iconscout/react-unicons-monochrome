import * as React from "react";

function UimWrapText(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 7.167H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM9 17.167H3a1 1 0 1 1 0-2H9a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M18.5,17.167H15a1,1,0,0,1,0-2h3.5a1.5,1.5,0,0,0,0-3H3a1,1,0,0,1,0-2H18.5a3.5,3.5,0,1,1,0,7Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14.999,18.833a.99523.99523,0,0,1-.63867-.23145l-2-1.666a1.00063,1.00063,0,0,1-.001-1.53711l2-1.667a1.00053,1.00053,0,0,1,1.28124,1.5371l-1.07813.89844,1.07716.89746A1,1,0,0,1,14.999,18.833Z"
  }));
}

export default UimWrapText;
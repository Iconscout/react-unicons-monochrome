import * as React from "react";

function UimLineSpacing(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21 8H10a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 13H10a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M4.667,18.5a.99943.99943,0,0,1-1-1V6.5a1,1,0,0,1,2,0v11A.99942.99942,0,0,1,4.667,18.5Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M21,18H10a1,1,0,0,1,0-2H21a1,1,0,0,1,0,2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M6.334 9a.99676.99676 0 0 1-.76953-.36035L4.667 7.5625 3.76855 8.64062a1.00053 1.00053 0 0 1-1.5371-1.28124l1.667-2A1.00226 1.00226 0 0 1 4.667 5h0a1 1 0 0 1 .76856.36035l1.666 2A1 1 0 0 1 6.334 9zM4.667 19a1.00226 1.00226 0 0 1-.76855-.35938l-1.667-2a1.00053 1.00053 0 1 1 1.5371-1.28124L4.667 16.4375l.89746-1.07715a.99991.99991 0 0 1 1.53711 1.2793l-1.666 2A1 1 0 0 1 4.667 19z"
  }));
}

export default UimLineSpacing;
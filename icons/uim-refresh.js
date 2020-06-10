import * as React from "react";

function UimRefresh(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("circle", {
    cx: 12,
    cy: 12,
    r: 3,
    opacity: 1
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 2A10.01617 10.01617 0 0 0 4.99982 4.87744V3a1 1 0 1 0-2 0V7.5a.99942.99942 0 0 0 1 1h4.5a1 1 0 0 0 0-2H6.21838A7.98053 7.98053 0 0 1 20 12a1 1 0 0 0 2 0A10.01177 10.01177 0 0 0 12 2zM19.98859 15.5h-4.5a1 1 0 0 0 0 2h2.29309A7.98057 7.98057 0 0 1 4 12a1 1 0 0 0-2 0 9.98559 9.98559 0 0 0 16.98859 7.13269V21a1 1 0 0 0 2 0V16.5A.99943.99943 0 0 0 19.98859 15.5z"
  }));
}

export default UimRefresh;
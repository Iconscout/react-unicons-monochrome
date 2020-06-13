import * as React from "react";
import "../utils/style.css";

function UimGraphBar(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M6,23H2a.99974.99974,0,0,1-1-1V14a.99974.99974,0,0,1,1-1H6a.99974.99974,0,0,1,1,1v8A.99974.99974,0,0,1,6,23Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M14,23H10a.99974.99974,0,0,1-1-1V2a.99974.99974,0,0,1,1-1h4a.99974.99974,0,0,1,1,1V22A.99974.99974,0,0,1,14,23Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M22,23H18a.99974.99974,0,0,1-1-1V10a.99974.99974,0,0,1,1-1h4a.99974.99974,0,0,1,1,1V22A.99974.99974,0,0,1,22,23Z"
  }));
}

export default UimGraphBar;
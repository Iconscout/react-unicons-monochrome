import * as React from "react";
import "../utils/style.css";

function UimMasterCard(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    class: "ui-svg-inline"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M15.273,18.72754c-3.71552,0.0003-6.72778-3.01148-6.72808-6.727s3.01148-6.72778,6.727-6.72808S21.9997,8.28394,22,11.99946c0,0.00018,0,0.00036,0,0.00054C21.99589,15.7136,18.9866,18.72313,15.273,18.72754z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M8.72705,18.72754c-3.71552,0-6.72754-3.01202-6.72754-6.72754s3.01202-6.72754,6.72754-6.72754S15.45459,8.28448,15.45459,12v0C15.45072,15.71391,12.44096,18.72367,8.72705,18.72754z"
  }));
}

export default UimMasterCard;
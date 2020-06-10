import * as React from "react";

function UimClockNine(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor"
  }, props), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12,6a.99974.99974,0,0,0-1,1v4H9a1,1,0,0,0,0,2h3a.99974.99974,0,0,0,1-1V7A.99974.99974,0,0,0,12,6Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a.99974.99974,0,0,1-1,1H9a1,1,0,0,1,0-2h2V7a1,1,0,0,1,2,0Z"
  }));
}

export default UimClockNine;
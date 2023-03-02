import * as React from "react";
import "../utils/style.css";

function UimFlipH(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "m12 21 5-5H7l5 5z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M12 22a.997.997 0 0 1-.707-.293l-5-5A1 1 0 0 1 7 15h10a1 1 0 0 1 .707 1.707l-5 5A.997.997 0 0 1 12 22Zm-2.586-5L12 19.586 14.586 17Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12 4a.99.99 0 0 1-.92-1.38 1.03 1.03 0 0 1 .21-.33.998.998 0 0 1 1.09-.21 1.034 1.034 0 0 1 .33.21A1.052 1.052 0 0 1 13 3a.838.838 0 0 1-.08.38 1.171 1.171 0 0 1-.21.33A.992.992 0 0 1 12 4zM8.79 6.21a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29zM7 9a.99.99 0 0 1-1-1 1 1 0 0 1 1.71-.71A1.052 1.052 0 0 1 8 8a.99.99 0 0 1-1 1zm5.67-1a.997.997 0 0 1 1-1 1.003 1.003 0 0 1 1 1 1.003 1.003 0 0 1-1 1 .997.997 0 0 1-1-1zM9.33 8a1.003 1.003 0 0 1 1-1 .997.997 0 0 1 1 1 .997.997 0 0 1-1 1 1.003 1.003 0 0 1-1-1zM17 9a.99.99 0 0 1-1-1 1 1 0 1 1 2 0 .99.99 0 0 1-1 1zm-3.21-2.79a1.008 1.008 0 0 1 0-1.42 1.007 1.007 0 0 1 1.42 0 1.008 1.008 0 0 1 0 1.42 1.027 1.027 0 0 1-.71.29 1.026 1.026 0 0 1-.71-.29z"
  }));
}

export default UimFlipH;
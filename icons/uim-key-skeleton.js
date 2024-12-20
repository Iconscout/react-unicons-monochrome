import * as React from "react";
import "../utils/style.css";
function UimKeySkeleton(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M7,12.00049c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5S9.76142,12.00049,7,12.00049z M5.58527,19.4129c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.58461,18.96491,6.13728,19.41224,5.58527,19.4129z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21.00146,4.4126L21.707,3.707c0.39398-0.38695,0.39968-1.02002,0.01273-1.414c-0.38695-0.39398-1.02002-0.39968-1.414-0.01273C20.30145,2.28448,20.2972,2.28872,20.293,2.293L9.754,12.83191c0.56146,0.37168,1.0424,0.85254,1.41418,1.41394l5.591-5.59094l2.11975,2.12048c0.39048,0.39048,1.02358,0.39049,1.41406,0.00001s0.39049-1.02358,0.00001-1.41406l-2.11978-2.12049l1.41418-1.41418l0.70557,0.70557c0.39177,0.38919,1.02486,0.38709,1.41405-0.00468C22.09439,6.1376,22.09438,5.5081,21.707,5.11816L21.00146,4.4126z"
  }));
}
export default UimKeySkeleton;
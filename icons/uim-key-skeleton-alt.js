import * as React from "react";
import "../utils/style.css";
function UimKeySkeletonAlt(props) {
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
    d: "M6.99927,12c-2.76142,0-5,2.23858-5,5s2.23858,5,5,5s5-2.23858,5-5l0,0C11.99927,14.23858,9.76069,12,6.99927,12z M5.58453,19.41241c-0.55228,0-1-0.44772-1-1s0.44772-1,1-1s1,0.44772,1,1C6.5839,18.96444,6.13655,19.41178,5.58453,19.41241z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M21.708,6.53418l-1.41454-1.41455L21.70605,3.707c0.39311-0.38783,0.39739-1.02091,0.00956-1.41403s-1.02091-0.39739-1.41403-0.00956C20.29837,2.28659,20.29517,2.28978,20.292,2.293L9.75348,12.83148c0.56147,0.37168,1.04239,0.85256,1.41412,1.414l4.88318-4.88318l1.41406,1.41407c0.39114,0.38983,1.02424,0.38877,1.41407-0.00237c0.38891-0.39021,0.38891-1.02149,0-1.4117l-1.41407-1.41406l1.41455-1.41455L20.294,7.94824c0.39296,0.38799,1.02604,0.38396,1.41403-0.009C22.09254,7.5498,22.09253,6.9236,21.708,6.53418z"
  }));
}
export default UimKeySkeletonAlt;
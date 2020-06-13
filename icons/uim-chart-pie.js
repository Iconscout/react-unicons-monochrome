import * as React from "react";
import "../utils/style.css";

function UimChartPie(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    enableBackground: "new 0 0 24 24",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M12,12V2c5.52285,0,10,4.47715,10,10H12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M12,12l5,8.66022c3.09237-1.78795,4.99776-5.08817,5-8.66022H12z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M17,20.66022L12,12V2C6.47715,2.00184,2.00149,6.48047,2.00332,12.00332C2.00516,17.52617,6.4838,22.00183,12.00665,22c1.75327-0.00058,3.47558-0.46212,4.99421-1.33832l0.00336-0.00427L17,20.66022z"
  }));
}

export default UimChartPie;
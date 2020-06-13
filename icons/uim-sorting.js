import * as React from "react";
import "../utils/style.css";

function UimSorting(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M15 19.5a.99676.99676 0 0 1-.707-.293L12 16.91406 9.707 19.207A.99989.99989 0 0 1 8.293 17.793l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 19.5zM12 10.5a.99676.99676 0 0 1-.707-.293l-3-3A.99989.99989 0 0 1 9.707 5.793L12 8.08594l2.293-2.293A.99989.99989 0 0 1 15.707 7.207l-3 3A.99676.99676 0 0 1 12 10.5z"
  }));
}

export default UimSorting;
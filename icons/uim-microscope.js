import * as React from "react";
import "../utils/style.css";
function UimMicroscope(props) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({}, props, {
    xmlns: "http://www.w3.org/2000/svg",
    "data-name": "Layer 1",
    viewBox: "0 0 24 24",
    width: props.size || '1em',
    height: props.size || '1em',
    fill: "currentColor",
    className: `ui-svg-inline ${props.className || ''}`
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M11.441 13.604a1 1 0 0 1-.707-.293L7.198 9.772a1 1 0 0 1 0-1.414l6.363-6.363a.997.997 0 0 1 .39-.242l2.121-.707a1 1 0 0 1 1.024.242l2.122 2.121a1 1 0 0 1 .241 1.024l-.708 2.122a.991.991 0 0 1-.241.39l-6.362 6.366a1 1 0 0 1-.707.293Zm6.362-7.366Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m7.198 9.772-1.416 1.415a1 1 0 0 0 0 1.415l2.122 2.12a1 1 0 0 0 1.414 0l1.414-1.413Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 1,
    d: "M8 18.005H4a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "M20 23.005H4a1 1 0 0 1 0-2h16a1 1 0 0 1 0 2Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.25,
    d: "M14.816 21.005a2.965 2.965 0 0 0 .184-1 3 3 0 0 0-6 0 2.965 2.965 0 0 0 .184 1Z"
  }), /*#__PURE__*/React.createElement("path", {
    opacity: 0.5,
    d: "m17.873 7.583-1.415 1.415A5.955 5.955 0 0 1 18 13.005a6.048 6.048 0 0 1-3.455 5.431 2.971 2.971 0 0 1 .455 1.57 2.645 2.645 0 0 1-.04.407A8.044 8.044 0 0 0 20 13.005a7.945 7.945 0 0 0-2.127-5.422zM9.42 18.499a7.036 7.036 0 0 1-1.095-.56.983.983 0 0 1-.326.066H5.326a8.873 8.873 0 0 0 3.72 2.472A2.69 2.69 0 0 1 9 20.005a2.966 2.966 0 0 1 .42-1.506z"
  }));
}
export default UimMicroscope;
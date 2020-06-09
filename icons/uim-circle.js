import * as React from "react";

function UimCircle(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={12} r={10} opacity={1} /></svg>;
}

export default UimCircle;
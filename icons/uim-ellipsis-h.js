import * as React from "react";

function UimEllipsisH(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={12} r={2} opacity={1} /><circle cx={5} cy={12} r={2} opacity={1} /><circle cx={19} cy={12} r={2} opacity={1} /></svg>;
}

export default UimEllipsisH;
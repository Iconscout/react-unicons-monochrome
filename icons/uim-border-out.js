import * as React from "react";

function UimBorderOut(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M20,21H4a.99943.99943,0,0,1-1-1V4A.99943.99943,0,0,1,4,3H20a.99943.99943,0,0,1,1,1V20A.99943.99943,0,0,1,20,21ZM5,19H19V5H5Z" /><circle cx={12} cy={12} r={1} opacity={0.5} /><circle cx={12} cy={16} r={1} opacity={0.5} /><circle cx={12} cy={8} r={1} opacity={0.5} /><circle cx={8} cy={12} r={1} opacity={0.5} /><circle cx={16} cy={12} r={1} opacity={0.5} /></svg>;
}

export default UimBorderOut;
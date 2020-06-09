import * as React from "react";

function UimBorderTop(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M20,4.5H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" /><circle cx={12} cy={7.5} r={1} opacity={0.5} /><circle cx={12} cy={11.5} r={1} opacity={0.5} /><circle cx={12} cy={15.5} r={1} opacity={0.5} /><circle cx={12} cy={19.5} r={1} opacity={0.5} /><circle cx={20} cy={7.5} r={1} opacity={0.5} /><circle cx={20} cy={11.5} r={1} opacity={0.5} /><circle cx={20} cy={15.5} r={1} opacity={0.5} /><circle cx={20} cy={19.5} r={1} opacity={0.5} /><circle cx={16} cy={19.5} r={1} opacity={0.5} /><circle cx={8} cy={19.5} r={1} opacity={0.5} /><circle cx={16} cy={11.5} r={1} opacity={0.5} /><circle cx={8} cy={11.5} r={1} opacity={0.5} /><circle cx={4} cy={7.5} r={1} opacity={0.5} /><circle cx={4} cy={11.5} r={1} opacity={0.5} /><circle cx={4} cy={15.5} r={1} opacity={0.5} /><circle cx={4} cy={19.5} r={1} opacity={0.5} /></svg>;
}

export default UimBorderTop;
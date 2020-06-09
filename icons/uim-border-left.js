import * as React from "react";

function UimBorderLeft(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M3.5,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99974.99974,0,0,1,3.5,21Z" /><circle cx={7.5} cy={12} r={1} opacity={0.5} /><circle cx={11.5} cy={12} r={1} opacity={0.5} /><circle cx={15.5} cy={12} r={1} opacity={0.5} /><circle cx={19.5} cy={12} r={1} opacity={0.5} /><circle cx={7.5} cy={4} r={1} opacity={0.5} /><circle cx={11.5} cy={4} r={1} opacity={0.5} /><circle cx={15.5} cy={4} r={1} opacity={0.5} /><circle cx={19.5} cy={4} r={1} opacity={0.5} /><circle cx={19.5} cy={8} r={1} opacity={0.5} /><circle cx={19.5} cy={16} r={1} opacity={0.5} /><circle cx={11.5} cy={8} r={1} opacity={0.5} /><circle cx={11.5} cy={16} r={1} opacity={0.5} /><circle cx={7.5} cy={20} r={1} opacity={0.5} /><circle cx={11.5} cy={20} r={1} opacity={0.5} /><circle cx={15.5} cy={20} r={1} opacity={0.5} /><circle cx={19.5} cy={20} r={1} opacity={0.5} /></svg>;
}

export default UimBorderLeft;
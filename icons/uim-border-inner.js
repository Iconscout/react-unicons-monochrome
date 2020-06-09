import * as React from "react";

function UimBorderInner(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M19.96484,13h-16a1,1,0,0,1,0-2h16a1,1,0,0,1,0,2Z" /><path opacity={1} d="M11.96484,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99973.99973,0,0,1,11.96484,21Z" /><circle cx={3.964} cy={16} r={1} opacity={0.5} /><circle cx={3.964} cy={20} r={1} opacity={0.5} /><circle cx={3.964} cy={8} r={1} opacity={0.5} /><circle cx={3.964} cy={4} r={1} opacity={0.5} /><circle cx={7.964} cy={4} r={1} opacity={0.5} /><circle cx={15.964} cy={4} r={1} opacity={0.5} /><circle cx={7.964} cy={20} r={1} opacity={0.5} /><circle cx={15.964} cy={20} r={1} opacity={0.5} /><circle cx={19.964} cy={16} r={1} opacity={0.5} /><circle cx={19.964} cy={20} r={1} opacity={0.5} /><circle cx={19.964} cy={8} r={1} opacity={0.5} /><circle cx={19.964} cy={4} r={1} opacity={0.5} /></svg>;
}

export default UimBorderInner;
import * as React from "react";
import { UimIconProps } from '../index.types'

function UimBorderAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M3.5,20.5a.99974.99974,0,0,1-1-1V3.5a.99974.99974,0,0,1,1-1h16a1,1,0,0,1,0,2H4.5v15A.99974.99974,0,0,1,3.5,20.5Z" /><circle cx={19.5} cy={11.5} r={1} opacity={0.5} /><circle cx={19.5} cy={7.5} r={1} opacity={0.5} /><circle cx={19.5} cy={15.5} r={1} opacity={0.5} /><circle cx={7.5} cy={19.5} r={1} opacity={0.5} /><circle cx={11.5} cy={19.5} r={1} opacity={0.5} /><circle cx={15.5} cy={19.5} r={1} opacity={0.5} /><circle cx={19.5} cy={19.5} r={1} opacity={0.5} /></svg>;
}

export default UimBorderAlt;
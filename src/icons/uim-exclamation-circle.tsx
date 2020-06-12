import * as React from "react";
import { UimIconProps } from '../index.types'

function UimExclamationCircle(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={12} r={10} opacity={0.5} /><circle cx={12} cy={16} r={1} opacity={1} /><path opacity={1} d="M12,13a1,1,0,0,1-1-1V8a1,1,0,0,1,2,0v4A1,1,0,0,1,12,13Z" /></svg>;
}

export default UimExclamationCircle;
import * as React from "react";
import { UimIconProps } from '../index.types'

function UimRecordAudio(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={12} r={6} opacity={0.5} /><path opacity={1} d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm0,16a6,6,0,1,1,6-6A6.00687,6.00687,0,0,1,12,18Z" /></svg>;
}

export default UimRecordAudio;
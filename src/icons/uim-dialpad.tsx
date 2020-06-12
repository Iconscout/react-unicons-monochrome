import * as React from "react";
import { UimIconProps } from '../index.types'

function UimDialpad(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={9} r={2} opacity={0.5} /><circle cx={12} cy={3} r={2} opacity={0.5} /><circle cx={12} cy={15} r={2} opacity={0.5} /><circle cx={6} cy={9} r={2} opacity={0.5} /><circle cx={6} cy={3} r={2} opacity={0.5} /><circle cx={6} cy={15} r={2} opacity={0.5} /><circle cx={18} cy={9} r={2} opacity={0.5} /><circle cx={18} cy={3} r={2} opacity={0.5} /><circle cx={18} cy={15} r={2} opacity={0.5} /><circle cx={12} cy={21} r={2} opacity={0.5} /></svg>;
}

export default UimDialpad;
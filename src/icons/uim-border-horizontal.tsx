import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimBorderHorizontal(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M20,13H4a1,1,0,0,1,0-2H20a1,1,0,0,1,0,2Z" /><circle cx={12} cy={16} r={1} opacity={0.5} /><circle cx={12} cy={20} r={1} opacity={0.5} /><circle cx={12} cy={8} r={1} opacity={0.5} /><circle cx={12} cy={4} r={1} opacity={0.5} /><circle cx={4} cy={16} r={1} opacity={0.5} /><circle cx={4} cy={20} r={1} opacity={0.5} /><circle cx={4} cy={8} r={1} opacity={0.5} /><circle cx={4} cy={4} r={1} opacity={0.5} /><circle cx={8} cy={4} r={1} opacity={0.5} /><circle cx={16} cy={4} r={1} opacity={0.5} /><circle cx={8} cy={20} r={1} opacity={0.5} /><circle cx={16} cy={20} r={1} opacity={0.5} /><circle cx={20} cy={16} r={1} opacity={0.5} /><circle cx={20} cy={20} r={1} opacity={0.5} /><circle cx={20} cy={8} r={1} opacity={0.5} /><circle cx={20} cy={4} r={1} opacity={0.5} /></svg>;
}

export default UimBorderHorizontal;
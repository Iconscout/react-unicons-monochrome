import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimBorderVertical(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M11,21a.99974.99974,0,0,1-1-1V4a1,1,0,0,1,2,0V20A.99974.99974,0,0,1,11,21Z" /><circle cx={7} cy={12} r={1} opacity={0.5} /><circle cx={3} cy={12} r={1} opacity={0.5} /><circle cx={15} cy={12} r={1} opacity={0.5} /><circle cx={19} cy={12} r={1} opacity={0.5} /><circle cx={7} cy={4} r={1} opacity={0.5} /><circle cx={3} cy={4} r={1} opacity={0.5} /><circle cx={15} cy={4} r={1} opacity={0.5} /><circle cx={19} cy={4} r={1} opacity={0.5} /><circle cx={19} cy={8} r={1} opacity={0.5} /><circle cx={19} cy={16} r={1} opacity={0.5} /><circle cx={3} cy={8} r={1} opacity={0.5} /><circle cx={3} cy={16} r={1} opacity={0.5} /><circle cx={7} cy={20} r={1} opacity={0.5} /><circle cx={3} cy={20} r={1} opacity={0.5} /><circle cx={15} cy={20} r={1} opacity={0.5} /><circle cx={19} cy={20} r={1} opacity={0.5} /></svg>;
}

export default UimBorderVertical;
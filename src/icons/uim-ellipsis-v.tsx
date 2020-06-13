import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimEllipsisV(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={12} cy={12} r={2} opacity={1} /><circle cx={12} cy={5} r={2} opacity={1} /><circle cx={12} cy={19} r={2} opacity={1} /></svg>;
}

export default UimEllipsisV;
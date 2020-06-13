import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimApps(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={9} height={9} x={2} y={2} opacity={1} rx={1} /><rect width={9} height={9} x={2} y={13} opacity={0.5} rx={1} /><rect width={9} height={9} x={13} y={2} opacity={0.5} rx={1} /><rect width={9} height={9} x={13} y={13} opacity={0.5} rx={1} /></svg>;
}

export default UimApps;
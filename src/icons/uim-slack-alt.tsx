import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimSlackAlt(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.25} d="M9.34,2a2,2,0,0,0,0,4h2V4a2,2,0,0,0-2-2m0,5.33H4a2,2,0,1,0,0,4H9.34a2,2,0,0,0,0-4" /><path opacity={0.5} d="M22,9.33a2,2,0,1,0-4,0v2h2a2,2,0,0,0,2-2m-5.32,0V4a2,2,0,1,0-4,0V9.33a2,2,0,1,0,4,0" /><path opacity={0.7} d="M14.66,22a2,2,0,0,0,0-4h-2v2a2,2,0,0,0,2,2m0-5.33H20a2,2,0,0,0,0-4H14.66a2,2,0,0,0,0,4" /><path opacity={1} d="M2,14.67a2,2,0,1,0,4,0v-2H4a2,2,0,0,0-2,2m5.32,0V20a2,2,0,1,0,4,0V14.67a2,2,0,1,0-4,0" /></svg>;
}

export default UimSlackAlt;
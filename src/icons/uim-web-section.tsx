import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimWebSection(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={2} height={20} x={14} y={2} opacity={0.25} /><path opacity={0.5} d="M3,2h11l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z" /><path opacity={1} d="M16,2h5c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1h-5l0,0V2L16,2z" /></svg>;
}

export default UimWebSection;
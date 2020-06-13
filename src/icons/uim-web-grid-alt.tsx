import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimWebGridAlt(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><polygon opacity={0.25} points="22 8 2 8 2 10 11 10 11 22 13 22 13 10 22 10" /><path opacity={1} d="M3,2h18c0.55228,0,1,0.44772,1,1v5l0,0H2l0,0V3C2,2.44772,2.44772,2,3,2z" /><path opacity={0.5} d="M2,10h9l0,0v12l0,0H3c-0.55228,0-1-0.44772-1-1V10L2,10z M13,10h9l0,0v11c0,0.55228-0.44772,1-1,1h-8l0,0V10L13,10z" /></svg>;
}

export default UimWebGridAlt;
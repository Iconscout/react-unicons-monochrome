import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimCommentAltPlus(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M15,9H13V7a1,1,0,0,0-2,0V9H9a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Z" /><path opacity={0.5} d="M19,2H5A3.00328,3.00328,0,0,0,2,5V15a3.00328,3.00328,0,0,0,3,3H16.58594l3.707,3.707A.99991.99991,0,0,0,22,21V5A3.00328,3.00328,0,0,0,19,2Zm-4,9H13v2a1,1,0,0,1-2,0V11H9A1,1,0,0,1,9,9h2V7a1,1,0,0,1,2,0V9h2a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimCommentAltPlus;
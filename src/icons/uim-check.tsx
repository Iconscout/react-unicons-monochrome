import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimCheck(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M9.83984,17.08008a.99676.99676,0,0,1-.707-.293L5.293,12.94727A.99989.99989,0,1,1,6.707,11.5332L9.83984,14.666,17.293,7.21289A.99989.99989,0,0,1,18.707,8.627l-8.16015,8.16016A.9968.9968,0,0,1,9.83984,17.08008Z" /></svg>;
}

export default UimCheck;
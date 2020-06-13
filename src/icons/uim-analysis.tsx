import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAnalysis(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M14 16a1 1 0 0 1-.707-1.707l7-7A.99989.99989 0 0 1 21.707 8.707l-7 7A.99676.99676 0 0 1 14 16zM3 17a1 1 0 0 1-.707-1.707l6-6A.99989.99989 0 0 1 9.707 10.707l-6 6A.99676.99676 0 0 1 3 17z" /><path opacity={1} d="M14,16a.99676.99676,0,0,1-.707-.293l-5-5A.99989.99989,0,0,1,9.707,9.293l5,5A1,1,0,0,1,14,16Z" /></svg>;
}

export default UimAnalysis;
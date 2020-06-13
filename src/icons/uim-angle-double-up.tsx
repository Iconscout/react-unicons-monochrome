import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAngleDoubleUp(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M15 17.25a.99676.99676 0 0 1-.707-.293L12 14.66406 9.707 16.957A.99989.99989 0 0 1 8.293 15.543l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 17.25zM15 11.75a.99676.99676 0 0 1-.707-.293L12 9.16406 9.707 11.457A.99989.99989 0 0 1 8.293 10.043l3-3a.99962.99962 0 0 1 1.41406 0l3 3A1 1 0 0 1 15 11.75z" /></svg>;
}

export default UimAngleDoubleUp;
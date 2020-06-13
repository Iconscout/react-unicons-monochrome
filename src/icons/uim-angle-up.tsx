import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAngleUp(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M16.24268,15.12109a.99676.99676,0,0,1-.707-.293L12,11.293,8.46436,14.82812a.99989.99989,0,0,1-1.41407-1.41406L11.293,9.17188a.99962.99962,0,0,1,1.41406,0l4.24268,4.24218a1,1,0,0,1-.707,1.707Z" /></svg>;
}

export default UimAngleUp;
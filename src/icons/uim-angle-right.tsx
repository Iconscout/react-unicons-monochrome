import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAngleRight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M9.87891,17.24268a1,1,0,0,1-.707-1.707L12.707,12,9.17188,8.46436a.99989.99989,0,0,1,1.41406-1.41407L14.82812,11.293a.99962.99962,0,0,1,0,1.41406l-4.24218,4.24268A.99678.99678,0,0,1,9.87891,17.24268Z" /></svg>;
}

export default UimAngleRight;
import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimPentagon(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M17.56249,21.55957H6.43749a1,1,0,0,1-.95116-.69141L2.04883,10.28809A.99881.99881,0,0,1,2.41211,9.1709l9-6.53906a.99648.99648,0,0,1,1.17578,0l9,6.53906a.99881.99881,0,0,1,.36328,1.11719l-3.4375,10.58007A1,1,0,0,1,17.56249,21.55957Z" /></svg>;
}

export default UimPentagon;
import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimSqureShape(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={20} height={20} x={2} y={2} opacity={1} rx={5} /></svg>;
}

export default UimSqureShape;
import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimDocumentLayoutLeft(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M21 8H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 12H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" /><rect width={8} height={8} x={2} y={4} opacity={1} rx={1} /><path opacity={0.5} d="M21 16H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM13 20H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2z" /></svg>;
}

export default UimDocumentLayoutLeft;
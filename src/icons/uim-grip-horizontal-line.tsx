import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimGripHorizontalLine(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21 11H3A1 1 0 0 1 3 9H21a1 1 0 0 1 0 2zM21 15H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimGripHorizontalLine;
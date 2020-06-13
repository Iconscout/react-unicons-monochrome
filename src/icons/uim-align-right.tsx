import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAlignRight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21 7H3A1 1 0 0 1 3 5H21a1 1 0 0 1 0 2zM21 11H7A1 1 0 0 1 7 9H21a1 1 0 0 1 0 2zM21 15H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 19H7a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimAlignRight;
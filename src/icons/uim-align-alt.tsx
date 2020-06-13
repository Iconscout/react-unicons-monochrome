import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAlignAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M10 5H7A1 1 0 0 1 7 3h3a1 1 0 0 1 0 2zM10 9H3A1 1 0 0 1 3 7h7a1 1 0 0 1 0 2zM10 13H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 17H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM10 21H3a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 5H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 9H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 13H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM21 17H14a1 1 0 0 1 0-2h7a1 1 0 0 1 0 2zM17 21H14a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2z" /></svg>;
}

export default UimAlignAlt;
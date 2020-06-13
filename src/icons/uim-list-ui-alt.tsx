import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimListUiAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21.5 8H7.5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zM21.5 13h-10a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2zM21.5 18h-6a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z" /><circle cx={3.5} cy={7} r={1} opacity={1} /><circle cx={7.5} cy={12} r={1} opacity={1} /><circle cx={11.5} cy={17} r={1} opacity={1} /></svg>;
}

export default UimListUiAlt;
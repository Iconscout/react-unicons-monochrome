import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimLinkH(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M10 17H7A5 5 0 0 1 7 7h3a1 1 0 0 1 0 2H7a3 3 0 0 0 0 6h3a1 1 0 0 1 0 2zM17 17H14a1 1 0 0 1 0-2h3a3 3 0 0 0 0-6H14a1 1 0 0 1 0-2h3a5 5 0 0 1 0 10z" /><path opacity={0.5} d="M15,13H9a1,1,0,0,1,0-2h6a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimLinkH;
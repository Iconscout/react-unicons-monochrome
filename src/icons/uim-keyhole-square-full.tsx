import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimKeyholeSquareFull(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z" /><path opacity={0.5} d="M21,2H3A.99943.99943,0,0,0,2,3V21a.99943.99943,0,0,0,1,1H21a.99943.99943,0,0,0,1-1V3A.99943.99943,0,0,0,21,2Zm-8,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z" /></svg>;
}

export default UimKeyholeSquareFull;
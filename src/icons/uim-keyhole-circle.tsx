import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimKeyholeCircle(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M14,10a2,2,0,1,0-3,1.7226V15a1,1,0,0,0,2,0V11.7226A1.99146,1.99146,0,0,0,14,10Z" /><path opacity={0.5} d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,9.7226V15a1,1,0,0,1-2,0V11.7226a2,2,0,1,1,2,0Z" /></svg>;
}

export default UimKeyholeCircle;
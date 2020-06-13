import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimSpaceKey(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21,15H3a.99974.99974,0,0,1-1-1V10a1,1,0,0,1,2,0v3H20V10a1,1,0,0,1,2,0v4A.99974.99974,0,0,1,21,15Z" /></svg>;
}

export default UimSpaceKey;
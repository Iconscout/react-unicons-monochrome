import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimSignout(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21.207,11.29346l-3-3A.99989.99989,0,1,0,16.793,9.70752l1.293,1.293H12.5a1,1,0,0,0,0,2h5.58594l-1.293,1.293A.99989.99989,0,1,0,18.207,15.70752l3-3A.99962.99962,0,0,0,21.207,11.29346Z" /><path opacity={0.5} d="M12.5,13.00049a1,1,0,0,1,0-2h4V5a3.00328,3.00328,0,0,0-3-3h-8a3.00328,3.00328,0,0,0-3,3V19a3.00328,3.00328,0,0,0,3,3h8a3.00328,3.00328,0,0,0,3-3V13.00049Z" /></svg>;
}

export default UimSignout;
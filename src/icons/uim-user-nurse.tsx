import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimUserNurse(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M20.93994,22H3.06006a1.00012,1.00012,0,0,1-.99414-1.1084,9.99519,9.99519,0,0,1,19.86816,0A1.00012,1.00012,0,0,1,20.93994,22Z" /><path opacity={0.25} d="M12.708,18.30664l4.70581-4.71478a10.00128,10.00128,0,0,0-10.83264.00348L11.293,18.30713a1.00012,1.00012,0,0,0,.707.293h.00049A1.00175,1.00175,0,0,0,12.708,18.30664Z" /><path opacity={0.25} d="M11.99512,14a6,6,0,1,1,6-6A6.00656,6.00656,0,0,1,11.99512,14Z" /><path opacity={1} d="M6.09,9A5.99281,5.99281,0,0,0,17.91,9Z" /></svg>;
}

export default UimUserNurse;
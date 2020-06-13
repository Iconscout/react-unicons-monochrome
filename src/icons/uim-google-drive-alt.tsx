import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimGoogleDriveAlt(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M6.00018,19.79588L9,14.59863h12l-3.00005,5.19725H6.00018z" /><path opacity={0.25} d="M15.00018,14.59863H21L15.00018,4.20412H9L15.00018,14.59863z" /><path opacity={0.5} d="M3,14.59863l3.00018,5.19725L12,9.40138L9,4.20412L3,14.59863z" /></svg>;
}

export default UimGoogleDriveAlt;
import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimDownloadAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M15.707,13.293a.99962.99962,0,0,0-1.41406,0L13,14.58594V3a1,1,0,0,0-2,0V14.58594L9.707,13.293A.99989.99989,0,0,0,8.293,14.707l3,3a.99963.99963,0,0,0,1.41406,0l3-3A.99962.99962,0,0,0,15.707,13.293Z" /><path opacity={0.5} d="M18,9H13v5.58594l1.293-1.293A.99989.99989,0,0,1,15.707,14.707l-3,3a.99963.99963,0,0,1-1.41406,0l-3-3A.99989.99989,0,0,1,9.707,13.293L11,14.58594V9H6a3.00328,3.00328,0,0,0-3,3v7a3.00328,3.00328,0,0,0,3,3H18a3.00328,3.00328,0,0,0,3-3V12A3.00328,3.00328,0,0,0,18,9Z" /></svg>;
}

export default UimDownloadAlt;
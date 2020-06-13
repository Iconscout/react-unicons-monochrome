import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimLockAlt(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M9 7c0-1.65686 1.34314-3 3-3s3 1.34314 3 3v2h2V7c0-2.76141-2.23859-5-5-5S7 4.23859 7 7v2h2V7zM12 18c-.55214.00014-.99986-.44734-1-.99948 0-.00017 0-.00035 0-.00052v-3c0-.55229.44771-1 1-1s1 .44771 1 1v3c.00014.55214-.44734.99986-.99948 1C12.00035 18 12.00017 18 12 18z" /><path opacity={1} d="M17,9H7c-1.65686,0-3,1.34314-3,3v7c0,1.65686,1.34314,3,3,3h10c1.65686,0,3-1.34314,3-3v-7C20,10.34314,18.65686,9,17,9z M13,17c0.00012,0.55212-0.44733,0.99988-0.99945,1C12.00037,18,12.00018,18,12,18c-0.55212,0.00012-0.99988-0.44733-1-0.99945c0-0.00018,0-0.00037,0-0.00055v-3c0-0.55231,0.44769-1,1-1s1,0.44769,1,1V17z" /></svg>;
}

export default UimLockAlt;
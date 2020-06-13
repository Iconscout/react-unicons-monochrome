import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimClockFive(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,6a1.003,1.003,0,0,1,1,1v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.9986.9986,0,0,1,11,12V7A1.003,1.003,0,0,1,12,6Z" /><path opacity={0.5} d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4.73l1.6,2.77a.99911.99911,0,1,1-1.73,1l-1.69-2.93A.99867.99867,0,0,1,11,12Z" /></svg>;
}

export default UimClockFive;
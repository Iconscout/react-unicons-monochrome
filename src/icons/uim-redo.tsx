import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimRedo(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M19.875,8.5h-4.5a1,1,0,0,1,0-2h3.5V3a1,1,0,0,1,2,0V7.5A.99974.99974,0,0,1,19.875,8.5Z" /><path opacity={1} d="M12,22A10,10,0,1,1,20.65137,6.999.99981.99981,0,0,1,18.9209,8.001,7.98928,7.98928,0,1,0,20,12a1,1,0,0,1,2,0A10.01146,10.01146,0,0,1,12,22Z" /></svg>;
}

export default UimRedo;
import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimVectorSquare(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M5 8A3 3 0 1 1 8 5 3.00328 3.00328 0 0 1 5 8zM5 4A1 1 0 1 0 6 5 1.001 1.001 0 0 0 5 4zM19 8a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 19 8zm0-4a1 1 0 1 0 1 1A1.001 1.001 0 0 0 19 4zM5 22a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 5 22zm0-4a1 1 0 1 0 1 1A1.001 1.001 0 0 0 5 18zM19 22a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 19 22zm0-4a1 1 0 1 0 1 1A1.001 1.001 0 0 0 19 18z" /><path opacity={0.5} d="M16.18433 20a2.80512 2.80512 0 0 1-.00006-2H7.81573a2.80554 2.80554 0 0 1 0 2zM19 8a2.96485 2.96485 0 0 1-1-.18433v8.3686a2.80554 2.80554 0 0 1 2 0V7.81573A2.96457 2.96457 0 0 1 19 8zM7.81573 4A2.96457 2.96457 0 0 1 8 5a2.96457 2.96457 0 0 1-.18427 1h8.3686A2.96485 2.96485 0 0 1 16 5a2.96457 2.96457 0 0 1 .18427-1zM5 16a2.96457 2.96457 0 0 1 1 .18427V7.81573A2.96457 2.96457 0 0 1 5 8a2.96485 2.96485 0 0 1-1-.18433v8.3686A2.96457 2.96457 0 0 1 5 16z" /></svg>;
}

export default UimVectorSquare;
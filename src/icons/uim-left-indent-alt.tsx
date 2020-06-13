import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimLeftIndentAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M21 19H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 15H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 7H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM21 11H13a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2z" /><path opacity={1} d="M9 19a.99974.99974 0 0 1-1-1V6a1 1 0 0 1 2 0V18A.99974.99974 0 0 1 9 19zM4.99951 14.667a.99882.99882 0 0 1-.63965-.23144l-2-1.667a1.00062 1.00062 0 0 1 0-1.5371l2-1.667a1.00023 1.00023 0 0 1 1.28028 1.53711L4.562 12l1.07813.89844A1.00006 1.00006 0 0 1 4.99951 14.667z" /></svg>;
}

export default UimLeftIndentAlt;
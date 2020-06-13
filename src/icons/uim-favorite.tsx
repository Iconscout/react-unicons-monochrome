import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimFavorite(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M17.56249,21.55957a.99941.99941,0,0,1-.46581-.11523L12,18.76465,6.90332,21.44434a.9999.9999,0,0,1-1.45117-1.05372l.97363-5.67578-4.124-4.01953a.99965.99965,0,0,1,.55469-1.70508l5.69824-.82812,2.54883-5.16406a1.04012,1.04012,0,0,1,1.793,0l2.54883,5.16406,5.69824.82812a.99965.99965,0,0,1,.55469,1.70508l-4.124,4.01953.97363,5.67578a1.00024,1.00024,0,0,1-.98536,1.169Z" /></svg>;
}

export default UimFavorite;
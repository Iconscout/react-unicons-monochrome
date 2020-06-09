import * as React from "react";

function UimBookmark(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M18,22a.99971.99971,0,0,1-.5-.13379L12,18.69434,6.5,21.86621A1.00042,1.00042,0,0,1,5,21V5A3.00328,3.00328,0,0,1,8,2h8a3.00328,3.00328,0,0,1,3,3V21a1.00072,1.00072,0,0,1-1,1Z" /></svg>;
}

export default UimBookmark;
import * as React from "react";

function UimMinusSquareFull(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z" /><path opacity={0.5} d="M21,2H3A.99974.99974,0,0,0,2,3V21a.99974.99974,0,0,0,1,1H21a.99974.99974,0,0,0,1-1V3A.99974.99974,0,0,0,21,2ZM17,13H7a1,1,0,0,1,0-2H17a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimMinusSquareFull;
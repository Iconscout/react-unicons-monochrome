import * as React from "react";

function UimSquare(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={20} height={20} x={2} y={2} opacity={1} rx={1} /></svg>;
}

export default UimSquare;
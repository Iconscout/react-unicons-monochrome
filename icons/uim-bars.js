import * as React from "react";

function UimBars(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 18H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 8H3A1 1 0 0 1 3 6H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimBars;
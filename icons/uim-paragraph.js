import * as React from "react";

function UimParagraph(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M13 15.5H3a1 1 0 0 1 0-2H13a1 1 0 0 1 0 2zM21 10.5H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimParagraph;
import * as React from "react";

function UimArrowDownRight(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M17,18H7a1,1,0,0,1,0-2h9V7a1,1,0,0,1,2,0V17A1,1,0,0,1,17,18Z" /><path opacity={1} d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z" /></svg>;
}

export default UimArrowDownRight;
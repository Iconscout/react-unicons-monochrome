import * as React from "react";

function UimStepForward(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M8 17a1 1 0 0 1-.707-1.707L10.58594 12 7.293 8.707A.99989.99989 0 0 1 8.707 7.293l4 4a.99962.99962 0 0 1 0 1.41406l-4 4A.99676.99676 0 0 1 8 17zM16 17a1 1 0 0 1-1-1V8a1 1 0 0 1 2 0v8A1 1 0 0 1 16 17z" /></svg>;
}

export default UimStepForward;
import * as React from "react";

function UimClockThree(props) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,6a.99974.99974,0,0,1,1,1v4h2a1,1,0,0,1,0,2H12a.99974.99974,0,0,1-1-1V7A.99974.99974,0,0,1,12,6Z" /><path opacity={0.5} d="M2,12A10,10,0,1,0,12,2,10,10,0,0,0,2,12Zm9-5a1,1,0,0,1,2,0v4h2a1,1,0,0,1,0,2H12a.99974.99974,0,0,1-1-1Z" /></svg>;
}

export default UimClockThree;
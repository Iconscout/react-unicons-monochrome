import * as React from "react";
import { UimIconProps } from '../index.types'

function UimHospitalSymbol(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M15,7a.99974.99974,0,0,0-1,1v3H10V8A1,1,0,0,0,8,8v8a1,1,0,0,0,2,0V13h4v3a1,1,0,0,0,2,0V8A.99974.99974,0,0,0,15,7Z" /><path opacity={0.5} d="M12,2A10,10,0,1,0,22,12,10.01146,10.01146,0,0,0,12,2Zm4,14a1,1,0,0,1-2,0V13H10v3a1,1,0,0,1-2,0V8a1,1,0,0,1,2,0v3h4V8a1,1,0,0,1,2,0Z" /></svg>;
}

export default UimHospitalSymbol;
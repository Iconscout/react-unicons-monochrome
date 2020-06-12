import * as React from "react";
import { UimIconProps } from '../index.types'

function UimGraphBar(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.25} d="M6,23H2a.99974.99974,0,0,1-1-1V14a.99974.99974,0,0,1,1-1H6a.99974.99974,0,0,1,1,1v8A.99974.99974,0,0,1,6,23Z" /><path opacity={1} d="M14,23H10a.99974.99974,0,0,1-1-1V2a.99974.99974,0,0,1,1-1h4a.99974.99974,0,0,1,1,1V22A.99974.99974,0,0,1,14,23Z" /><path opacity={0.5} d="M22,23H18a.99974.99974,0,0,1-1-1V10a.99974.99974,0,0,1,1-1h4a.99974.99974,0,0,1,1,1V22A.99974.99974,0,0,1,22,23Z" /></svg>;
}

export default UimGraphBar;
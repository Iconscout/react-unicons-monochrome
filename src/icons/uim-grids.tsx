import * as React from "react";
import { UimIconProps } from '../index.types'

function UimGrids(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M23,21V3a.99974.99974,0,0,0-1-1H17V22h5A.99974.99974,0,0,0,23,21Z" /><path opacity={1} d="M1,3V21a.99974.99974,0,0,0,1,1H7V2H2A.99974.99974,0,0,0,1,3Z" /><rect width={6} height={20} x={9} y={2} opacity={0.5} /><rect width={2} height={20} x={7} y={2} opacity={0.25} /><rect width={2} height={20} x={15} y={2} opacity={0.25} /></svg>;
}

export default UimGrids;
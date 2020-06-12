import * as React from "react";
import { UimIconProps } from '../index.types'

function UimColumns(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={2} height={20} x={11} y={2} opacity={0.25} /><path opacity={1} d="M3,2h8l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z" /><path opacity={0.5} d="M13,2h8c0.55228,0,1,0.44772,1,1v18c0,0.55228-0.44772,1-1,1h-8l0,0V2L13,2z" /></svg>;
}

export default UimColumns;
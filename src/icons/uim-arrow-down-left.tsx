import * as React from "react";
import { UimIconProps } from '../index.types'

function UimArrowDownLeft(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M17,18H7a1,1,0,0,1-1-1V7A1,1,0,0,1,8,7v9h9a1,1,0,0,1,0,2Z" /><path opacity={1} d="M7,18a1,1,0,0,1-.707-1.707l10-10A.99989.99989,0,0,1,17.707,7.707l-10,10A.99676.99676,0,0,1,7,18Z" /></svg>;
}

export default UimArrowDownLeft;
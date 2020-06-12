import * as React from "react";
import { UimIconProps } from '../index.types'

function UimArrowUpLeft(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M7,18a1,1,0,0,1-1-1V7A1,1,0,0,1,7,6H17a1,1,0,0,1,0,2H8v9A1,1,0,0,1,7,18Z" /><path opacity={1} d="M17,18a.99676.99676,0,0,1-.707-.293l-10-10A.99989.99989,0,0,1,7.707,6.293l10,10A1,1,0,0,1,17,18Z" /></svg>;
}

export default UimArrowUpLeft;
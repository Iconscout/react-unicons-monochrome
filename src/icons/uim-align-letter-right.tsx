import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAlignLetterRight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21 4H10a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 8H3A1 1 0 0 1 3 6H21a1 1 0 0 1 0 2zM21 12H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 18H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 22H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimAlignLetterRight;
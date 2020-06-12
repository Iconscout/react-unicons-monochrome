import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAlignRightJustify(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M21 5H3A1 1 0 0 1 3 3H21a1 1 0 0 1 0 2zM21 9H3A1 1 0 0 1 3 7H21a1 1 0 0 1 0 2zM21 13H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 17H3a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2zM21 21H11a1 1 0 0 1 0-2H21a1 1 0 0 1 0 2z" /></svg>;
}

export default UimAlignRightJustify;
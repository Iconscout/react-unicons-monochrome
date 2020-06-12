import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAnchor(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,22a8.00917,8.00917,0,0,1-8-8,1,1,0,0,1,2,0,6,6,0,0,0,12,0,1,1,0,0,1,2,0A8.00917,8.00917,0,0,1,12,22Z" /><path opacity={1} d="M12 22a.99974.99974 0 0 1-1-1V7a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 12 22zM7 15H5a1 1 0 0 1 0-2H7a1 1 0 0 1 0 2zM19 15H17a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z" /><path opacity={1} d="M14 11H10a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2zM12 8a3 3 0 1 1 3-3A3.00328 3.00328 0 0 1 12 8zm0-4a1 1 0 1 0 1 1A1.001 1.001 0 0 0 12 4z" /></svg>;
}

export default UimAnchor;
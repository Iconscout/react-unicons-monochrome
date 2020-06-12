import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAngleDown(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,15.12109a.99672.99672,0,0,1-.707-.293L7.05029,10.58594A.99989.99989,0,0,1,8.46436,9.17188L12,12.707l3.53564-3.53515a.99989.99989,0,0,1,1.41407,1.41406L12.707,14.82812A.99672.99672,0,0,1,12,15.12109Z" /></svg>;
}

export default UimAngleDown;
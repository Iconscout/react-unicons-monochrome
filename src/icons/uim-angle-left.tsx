import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAngleLeft(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M14.12109,17.24268a.99678.99678,0,0,1-.707-.293L9.17188,12.707a.99962.99962,0,0,1,0-1.41406l4.24218-4.24268a.99989.99989,0,0,1,1.41406,1.41407L11.293,12l3.53515,3.53564a1,1,0,0,1-.707,1.707Z" /></svg>;
}

export default UimAngleLeft;
import * as React from "react";
import { UimIconProps } from '../index.types'

function UimAnalytics(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M5 22a.99974.99974 0 0 1-1-1V13a1 1 0 0 1 2 0v8A.99974.99974 0 0 1 5 22zM10 22a.99974.99974 0 0 1-1-1V3a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 10 22zM15 22a.99974.99974 0 0 1-1-1V9a1 1 0 0 1 2 0V21A.99974.99974 0 0 1 15 22zM20 22a.99974.99974 0 0 1-1-1V17a1 1 0 0 1 2 0v4A.99974.99974 0 0 1 20 22z" /></svg>;
}

export default UimAnalytics;
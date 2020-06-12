import * as React from "react";
import { UimIconProps } from '../index.types'

function UimDialpadAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><rect width={4} height={4} x={10} y={6.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={10} y={0.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={10} y={13.045} opacity={1} rx={0.545} /><rect width={4} height={4} x={4} y={6.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={4} y={0.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={4} y={13.045} opacity={1} rx={0.545} /><rect width={4} height={4} x={16} y={6.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={16} y={0.955} opacity={1} rx={0.545} /><rect width={4} height={4} x={16} y={13.045} opacity={1} rx={0.545} /><rect width={4} height={4} x={10} y={19} opacity={1} rx={0.545} /></svg>;
}

export default UimDialpadAlt;
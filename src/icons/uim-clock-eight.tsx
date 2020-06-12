import * as React from "react";
import { UimIconProps } from '../index.types'

function UimClockEight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12,6a.99974.99974,0,0,0-1,1v4.42249l-2.09766,1.2113a1.00016,1.00016,0,0,0,1,1.73242l2.59766-1.5A1.00455,1.00455,0,0,0,13,12V7A.99974.99974,0,0,0,12,6Z" /><path opacity={0.5} d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm1,10a1.00455,1.00455,0,0,1-.5.86621l-2.59766,1.5a1.00016,1.00016,0,0,1-1-1.73242L11,11.42249V7a1,1,0,0,1,2,0Z" /></svg>;
}

export default UimClockEight;
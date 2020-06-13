import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimArrowCircleUp(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M16.707,11.293l-3.99969-3.9997a1.00354,1.00354,0,0,0-1.41468,0L7.293,11.293A.99989.99989,0,0,0,8.707,12.707L11,10.41406V16a1,1,0,0,0,2,0V10.41406l2.293,2.293A.99989.99989,0,0,0,16.707,11.293Z" /><path opacity={0.5} d="M12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm4.707,10.707a.99963.99963,0,0,1-1.41406,0L13,10.41406V16a1,1,0,0,1-2,0V10.41406L8.707,12.707A.99989.99989,0,0,1,7.293,11.293l3.99969-3.9997a1.00354,1.00354,0,0,1,1.41468,0L16.707,11.293A.99962.99962,0,0,1,16.707,12.707Z" /></svg>;
}

export default UimArrowCircleUp;
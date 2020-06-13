import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimArrowCircleRight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M12.707,16.707l3.9997-3.99969a1.00354,1.00354,0,0,0,0-1.41468L12.707,7.293A.99989.99989,0,0,0,11.293,8.707L13.58594,11H8a1,1,0,0,0,0,2h5.58594l-2.293,2.293A.99989.99989,0,0,0,12.707,16.707Z" /><path opacity={0.5} d="M22,12A10,10,0,1,0,12,22,10.01114,10.01114,0,0,0,22,12ZM11.293,16.707a.99963.99963,0,0,1,0-1.41406L13.58594,13H8a1,1,0,0,1,0-2h5.58594L11.293,8.707A.99989.99989,0,0,1,12.707,7.293l3.9997,3.99969a1.00354,1.00354,0,0,1,0,1.41468L12.707,16.707A.99962.99962,0,0,1,11.293,16.707Z" /></svg>;
}

export default UimArrowCircleRight;
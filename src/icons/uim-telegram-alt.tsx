import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimTelegramAlt(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M17.6875,21.74414a2.01908,2.01908,0,0,1-1.24121-.42676L12.416,18.19531,9.71387,21.17773a1.00011,1.00011,0,0,1-1.69825-.38281l-2.0205-6.68164-3.625-1.26074A2.042,2.042,0,0,1,2.2666,9.03516L20.18652,1.7998A2.04245,2.04245,0,0,1,22.958,4.09473l-3.2627,16.0166a2.05413,2.05413,0,0,1-2.00781,1.63281Z" /><path opacity={1} d="M8.97266,21.50586a.99968.99968,0,0,1-.957-.71l-2.168-7.15918A.9989.9989,0,0,1,6.34277,12.46L16.91016,6.958A.99975.99975,0,0,1,18.0791,8.55176l-7.083,7.083L9.95215,20.707a.99926.99926,0,0,1-.9336.79785C9.00293,21.50586,8.9873,21.50586,8.97266,21.50586Z" /></svg>;
}

export default UimTelegramAlt;
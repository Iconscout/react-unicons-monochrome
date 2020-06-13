import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimDribbble(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><circle cx={11.97} cy={11.97} r={9} opacity={0.5} /><path opacity={1} d="M2,12c-0.01333-1.76344,0.44962-3.49778,1.34-5.02c0.87224-1.51223,2.12777-2.76776,3.64-3.64C8.50221,2.44962,10.23656,1.98667,12,2c1.76344-0.01334,3.49779,0.44961,5.02,1.34c1.51224,0.87223,2.76777,2.12776,3.64,3.64C21.55038,8.50221,22.01334,10.23656,22,12c0.01334,1.76344-0.44962,3.49779-1.34,5.02c-0.87223,1.51224-2.12776,2.76777-3.64,3.64C15.49779,21.55039,13.76344,22.01334,12,22c-1.76344,0.01333-3.49779-0.44962-5.02-1.34c-1.51223-0.87224-2.76776-2.12777-3.64-3.64C2.44962,15.49778,1.98667,13.76344,2,12z M3.66,12c-0.01817,2.03247,0.73186,3.99684,2.1,5.5c0.75496-1.39065,1.79008-2.60965,3.04-3.58c1.16792-1.0202,2.5583-1.75305,4.06-2.14c-0.2-0.46667-0.39333-0.88667-0.58-1.26c-2.40789,0.75054-4.91794,1.12165-7.44,1.1c-0.52,0-0.90667-0.00667-1.16-0.02c0,0.05333-0.00333,0.12-0.01,0.2S3.66,11.94667,3.66,12z M3.92,9.94c0.29333,0.02667,0.72667,0.04,1.3,0.04c2.14597,0.01154,4.28203-0.29168,6.34-0.9c-0.89941-1.64754-2.0235-3.16204-3.34-4.5C7.16588,5.11398,6.24102,5.87161,5.51,6.8C4.7677,7.72489,4.2262,8.79427,3.92,9.94z M6.9,18.58c2.2769,1.79901,5.33702,2.25574,8.04,1.2c-0.26186-2.25964-0.78537-4.4812-1.56-6.62c-1.38647,0.35161-2.66226,1.04625-3.71,2.02C8.53432,16.12239,7.59341,17.27729,6.9,18.58z M9.96,3.94c1.28178,1.36323,2.37792,2.88976,3.26,4.54c1.59193-0.60061,3.00346-1.59901,4.1-2.9C15.83464,4.32212,13.94632,3.64062,12,3.66C11.31051,3.6613,10.62434,3.75548,9.96,3.94z M13.94,9.9c0.2,0.42667,0.42667,0.96667,0.68,1.62c0.98667-0.09333,2.06-0.14,3.22-0.14c0.82667,0,1.64667,0.02,2.46,0.06c-0.09584-1.78665-0.78567-3.4901-1.96-4.84C17.21462,8.09366,15.68902,9.23786,13.94,9.9z M15.12,12.92c0.67937,1.97056,1.1421,4.00924,1.38,6.08c1.04411-0.67063,1.92551-1.56569,2.58-2.62c0.65961-1.04626,1.07016-2.23001,1.2-3.46c-0.97334-0.06667-1.86-0.1-2.66-0.1C16.88667,12.82,16.05333,12.85333,15.12,12.92z" /></svg>;
}

export default UimDribbble;
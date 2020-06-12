import * as React from "react";
import { UimIconProps } from '../index.types'

function UimLinkedinAlt(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><g data-name="Brand Logos"><path opacity={1} d="M5.00351,7H4.97535a2.23465,2.23465,0,1,1,.05658-4.45706A2.23549,2.23549,0,1,1,5.00351,7Z" /><rect width={4} height={12} x={3.018} y={10} opacity={1} /><path opacity={1} d="M17.51754,10a4.47251,4.47251,0,0,0-3.5,1.70343V10h-4V22h4V16.5a2,2,0,0,1,4,0V22h4V14.5A4.5,4.5,0,0,0,17.51754,10Z" /></g></svg>;
}

export default UimLinkedinAlt;
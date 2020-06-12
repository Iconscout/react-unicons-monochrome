import * as React from "react";
import { UimIconProps } from '../index.types'

function UimDropbox(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><polygon opacity={1} fillRule="evenodd" points="16.53 10.091 21 12.939 16.498 15.807 12 12.941 7.502 15.807 3 12.939 7.47 10.091 3 7.243 7.502 4.375 12 7.241 16.498 4.375 21 7.243" clipRule="evenodd" /><polygon opacity={0.25} fillRule="evenodd" points="16.467 10.091 12 7.245 7.533 10.091 12 12.936" clipRule="evenodd" /><polygon opacity={0.5} fillRule="evenodd" points="7.531 16.757 7.502 15.807 12 12.941 16.498 15.807 16.534 16.757 12.032 19.625" clipRule="evenodd" /></svg>;
}

export default UimDropbox;
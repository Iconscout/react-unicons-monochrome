import * as React from "react";

function UimBing(props) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><polygon style={{
      isolation: "isolate"
    }} opacity={0.7} points="10.129 8.596 11.864 12.924 14.634 14.214 14.634 14.214 19 16.247 19 11.7 10.129 8.596" /><polygon opacity={1} points="14.634 14.214 14.634 14.214 9 17.457 9 3.4 5 2 5 19.76 9 22 19 16.247 19 11.7 14.634 14.214" /></svg>;
}

export default UimBing;
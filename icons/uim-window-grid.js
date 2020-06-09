import * as React from "react";

function UimWindowGrid(props) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><polygon opacity={0.25} points="22 11 10 11 10 2 8 2 8 11 8 11 8 13 8 13 8 22 10 22 10 13 22 13" /><path opacity={1} d="M3,2h5l0,0v20l0,0H3c-0.55228,0-1-0.44772-1-1V3C2,2.44772,2.44772,2,3,2z" /><path opacity={0.5} d="M10,2h11c0.55228,0,1,0.44772,1,1v8l0,0H10l0,0V2L10,2z M10,13h12l0,0v8c0,0.55228-0.44772,1-1,1H10l0,0V13L10,13z" /></svg>;
}

export default UimWindowGrid;
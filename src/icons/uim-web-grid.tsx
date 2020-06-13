import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimWebGrid(props: UimIconProps) {
  return <svg enableBackground="new 0 0 24 24" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><polygon opacity={0.25} points="2 13 14 13 14 22 16 22 16 13 16 13 16 11 16 11 16 2 14 2 14 11 2 11" /><path opacity={1} d="M21,22h-5l0,0V2l0,0h5c0.55228,0,1,0.44772,1,1v18C22,21.55228,21.55228,22,21,22z" /><path opacity={0.5} d="M14 22H3c-.55229 0-1-.44772-1-1v-8l0 0h12l0 0V22L14 22zM14 11H2l0 0V3c0-.55229.44771-1 1-1h11l0 0V11L14 11z" /></svg>;
}

export default UimWebGrid;
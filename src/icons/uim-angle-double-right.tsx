import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimAngleDoubleRight(props: UimIconProps) {
  return <svg viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={1} d="M7.75 16a1 1 0 0 1-.707-1.707L9.33594 12 7.043 9.707A.99989.99989 0 0 1 8.457 8.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 7.75 16zM13.25 16a1 1 0 0 1-.707-1.707L14.83594 12 12.543 9.707A.99989.99989 0 0 1 13.957 8.293l3 3a.99962.99962 0 0 1 0 1.41406l-3 3A.99676.99676 0 0 1 13.25 16z" /></svg>;
}

export default UimAngleDoubleRight;
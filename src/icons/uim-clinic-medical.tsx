import * as React from "react";
import { UimIconProps } from "../index.types"
import "../utils/style.css";

function UimClinicMedical(props: UimIconProps) {
  return <svg data-name="Layer 1" viewBox="0 0 24 24" width={props.size || '1em'} height={props.size || '1em'} fill="currentColor" {...props}><path opacity={0.5} d="M21,12a.99554.99554,0,0,1-.66406-.25244L12,4.33789,3.66406,11.74756a.99991.99991,0,0,1-1.32812-1.49512l9-8a.99893.99893,0,0,1,1.32812,0l9,8A1,1,0,0,1,21,12Z" /><path opacity={1} d="M14,13H13V12a1,1,0,0,0-2,0v1H10a1,1,0,0,0,0,2h1v1a1,1,0,0,0,2,0V15h1a1,1,0,0,0,0-2Z" /><path opacity={0.25} d="M12,4.33789,4,11.449V21a.99974.99974,0,0,0,1,1H19a.99974.99974,0,0,0,1-1V11.449ZM14,15H13v1a1,1,0,0,1-2,0V15H10a1,1,0,0,1,0-2h1V12a1,1,0,0,1,2,0v1h1a1,1,0,0,1,0,2Z" /></svg>;
}

export default UimClinicMedical;
import React,{useRef} from "react";
import "../../App.css";
import {OverlayTrigger,Popover} from "react-bootstrap";
import {Const} from "../../Utils/Constants";
import { AiOutlineWarning } from "react-icons/ai";

const TextArea = (props) => {
  const p = props;
  const {colors} = Const;
  const {label,placeholder,style} = props;
  const styles = {
    width:(p.wdt)?p.wdt:"100%",
    borderColor:colors.primary,
    marginTop:(p.marginTop)?p.marginTop:0,
    color:colors.primary,
    cursor:p.disabled?"no-drop":"auto",
    ...style
  }
  return(
    <>
      {
        label?
        <label className="badge">
          {label}
        </label> : null
      }
      <textarea 
        className="form-control inputBdk" 
        value={(p.value)?p.value:""}
        placeholder={placeholder||""}
        onChange={(p.onChange)?(e)=>p.onChange(e.target.value,(p.index!==undefined)?p.index:null):(e)=>console.log("value cambio a:",e.target.value)}
        style={styles}
        name="textarea" 
        rows={p.rows||"5"}>
          
      </textarea>
    </>
  )
};
export default (TextArea);
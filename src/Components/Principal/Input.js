import React,{useRef} from "react";
import "../../App.css";
import {OverlayTrigger,Popover} from "react-bootstrap";
import {Const} from "../../Utils/Constants";
import { AiOutlineWarning } from "react-icons/ai";

const Input = (props) => {
  const p = props;
  const {colors} = Const;
  const {errorMsg,errorPlace,label} = props;
  const target = useRef(null);
  const id = generateID();
  return(
    <>
      {
        label?
        <label className="badge">
          {label}
        </label> : null
      }
      {
        errorMsg?
        <OverlayTrigger
            target={target.current}
            placement={errorPlace?errorPlace:"top"}
            overlay={
              <Popover id={"input-"+id} >
                <Popover.Content>
                  <div style={{textAlign:"center"}}>
                    <strong className="text-center" style={{color:"gray"}}>{p.errorMsg?errorMsg:"Error"}</strong>
                  </div>
                </Popover.Content>
              </Popover>
            }
        >
          <div style={{width:"100%",height:0}}>
            <AiOutlineWarning style={{color:"gray",position:"absolute",left:"85%",fontSize:20,cursor:"help",top:label?38:8}} />
          </div>
        </OverlayTrigger> : null
      }
      <input
        ref={target}
        type={(p.password)?"password":"text"}
        className={(p.cls)?"form-control inputBdk "+p.cls:"form-control inputBdk"}
        placeholder={(p.placeholder)?p.placeholder:""}
        style={{width:(p.wdt)?p.wdt:"100%",borderColor:colors.primary,marginTop:(p.marginTop)?p.marginTop:0,color:colors.primary,cursor:p.disabled?"no-drop":"auto"}}
        value={(p.value)?p.value:""}
        onChange={(p.onChange)?(e)=>p.onChange(e.target.value,(p.index!==undefined)?p.index:null):(e)=>console.log("value cambio a:",e.target.value)}
        disabled={(props.disabled)?true:false}
      />
    </>
  )
};
export default (Input);
const generateID = ()=>{
  return "element_system_"+Math.random() * (9999 - 1) + 1;
}
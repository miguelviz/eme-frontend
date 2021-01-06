import React from "react";
import {OverlayTrigger,Popover} from "react-bootstrap";
import {Const} from "../../Utils/Constants";
import Loader from 'react-loader-spinner';
import ReturnIcon from "./ReturnIcon";
const IconButton = (props)=>{
  const {execute,icon,type,style,loader,disabled,errorPlace,title} = props;
  const {colors} = Const;
  const generateID = ()=>{
    return "element_system_"+Math.random() * (9999 - 1) + 1;
  }
  const returnStyles = (type)=>{
    let bgc;
    switch (type) {
      case "info":
        bgc = colors.buttons.secondary
        break;
      case "success":
        bgc = "linear-gradient(90deg, rgba(80,76,77,1) 0%, rgba(30,30,30,1) 100%)"
        break;
      case "danger":
        bgc = colors.buttons.cancel
        break;
      default:
        bgc = colors.buttons.secondary
    }
    return {
      background: bgc,
      borderRadius:5,
      width:46,
      height:46,
      fontWeight:"bold",
      color:"#fff",
      cursor:disabled?"no-drop":"pointer",
      ...style
    }
  }
  return(
    <OverlayTrigger
        placement={errorPlace?errorPlace:"top"}
        overlay={
          <Popover id={generateID()}>
            <Popover.Content>
              <div style={{textAlign:"center"}}>
                <strong className="text-center" style={{color:"solid black"}}>{title?title:"Acción no especificada!"}</strong>
              </div>
            </Popover.Content>
          </Popover>
        }
    >
      <button onClick={execute} className={disabled?"btn":"btn minisizeable"} style={returnStyles(type)} disabled={(disabled)?disabled:false}>
        {
          (loader)?
          <Loader
             type={Const.loader}
             color={"#fff"}
             height={20}
             width={20}
             visible={true}
          /> : <ReturnIcon nameIcon={icon} style={{color:"#fff"}} fontSize={20} />
        }
      </button>
    </OverlayTrigger>
  )
}
export default IconButton;

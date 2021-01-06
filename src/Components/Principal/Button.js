import React from "react";
import {Const} from "../../Utils/Constants";
import Loader from 'react-loader-spinner';
const Button = (props)=>{
  const {execute,label,type,style,loader,disabled} = props;
  const {colors} = Const;
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
      borderRadius:20,
      fontWeight:"bold",
      color:"#fff",
      ...style
    }
  }
  return(
    <button onClick={execute} className="btn btn-light minisizeable" style={returnStyles(type)} disabled={(disabled)?disabled:false}>
    {
      (loader)?
      <Loader
         type={Const.loader}
         color={"#fff"}
         height={20}
         width={40}
         visible={true}
      /> : label||<label />
    }
    </button>
  )
}
export default Button;

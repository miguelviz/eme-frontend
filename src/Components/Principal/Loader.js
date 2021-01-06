import React from "react";
import "./style.css";
import Loader from 'react-loader-spinner';
import {Const} from "../../Utils/Constants";
const {colors} = Const;

export default function Load(props){
  const {isVisible} = props;
  if(isVisible){
    return (
      <div className="loginDiv">
        <div className="alineado" style={{position:"fixed",top:0,left:0,width:"100vw",height:"100vh",backgroundColor:"rgba(56, 56, 56, 0.5)",zIndex:9999}}>
          <Loader
             type={Const.loader}
             color={colors.secondary}
             height={250}
             width={250}
             visible={true}
          />
          <img src={process.env.PUBLIC_URL + "/eme_logo_white.png"} style={{width:240,height:80}} alt="logo"/>
        </div>
      </div>
    )
  }else{
    return(<></>);
  }
}

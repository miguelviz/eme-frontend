import React from "react";
import "./style.css";
import Loader from 'react-loader-spinner';
import {Const} from "../../Utils/Constants";
const {colors} = Const;

export default function Load(props){
  const {isVisible} = props;
  if(isVisible){
    return (
      <div style={{width:"100%"}} className="d-flex justify-content-center">
        <div>
          <Loader
             type={Const.loader}
             color={"gray"}
             height={250}
             width={250}
             visible={true}
          />
        </div>
      </div>
    )
  }else{
    return(<></>);
  }
}

import React, {UseState} from "react";
import { GiStopSign } from "react-icons/gi";
const AccessDenied = (props) => {

  return(
    <div style={{width:"100%",padding:20,marginTop:60}} align="center">
      <div style={{width:350,borderRadius:10,borderColor:"red",borderWidth:2,borderStyle:"solid",padding:20,marginTop:20,backgroundColor:"#fff"}} align="center">
        <div className="row">
          <div className="col-2 d-flex justify-content-center">
            <GiStopSign style={{fontSize:30,color:"red"}} />
          </div>
          <div className="col-10 d-flex justify-content-center">
            <span style={{fontSize:20,color:"red",fontWeight:"bold"}}>
              Acceso no autorizado.
            </span>
          </div>
        </div>
      </div>
    </div>
  )
};
export default (AccessDenied);

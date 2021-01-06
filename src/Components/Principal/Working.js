import React from "react";
import { GrUserWorker } from "react-icons/gr";
import {Const} from "../../Utils/Constants";

const Working = ()=>{
    const {colors} = Const;
  return(
    <>
      <div className="alineado">
        <div style={{width:300,backgroundColor:"white",borderStyle:"solid",borderWidth:3,borderColor:colors.secondary,textAlign:"center",marginTop:20,borderRadius:10,padding:20}}>
          <div className="p-3">
            <GrUserWorker style={{color:colors.primary,fontSize:80}} />
          </div>
          <p style={{fontWeight:"bold",color:colors.primary}}>
            Contenido en desarrollo
          </p>
        </div>
      </div>
    </>
  )
}
export default (Working);
import React from "react";
import { GiBrokenHeart } from "react-icons/gi";
import Button from "../../Principal/Button";
import { useHistory } from "react-router-dom";

const Error = ()=>{
  let history = useHistory();
  return(
    <>
      <div className="alineado">
        <div style={{width:300,borderStyle:"solid",borderWidth:3,borderColor:"red",textAlign:"center",marginTop:150,borderRadius:10}}>
          <div className="p-3">
            <GiBrokenHeart style={{color:"red",fontSize:80}} />
          </div>
          <p style={{fontSize:40,color:"red"}}>
            404
          </p>
          <p style={{fontWeight:"bold"}}>
            ARCHIVO NO ENCONTRADO
          </p>
          <div className="p-3">
            <Button type="success" style={{width:"100%"}} label="Regresar" execute={history.goBack}/>
          </div>
        </div>
      </div>
    </>
  )
}
export default (Error);

import React from "react";
import {useUser} from "../../../../Context/User";
import ReturnIcon from "../../../Principal/ReturnIcon";
import IconButton from "../../../Principal/IconButton";


const ContentCard = (props)=>{
  const {item,handleShowModalInfo,handleShowModalAsign,handleShowModalClient} = props;
  const {colors} = useUser();
  const returnColorItem = (id)=>{
    if(id===1||id==="1"){
        return "green";
    }else{
        if(id===2||id==="2"){
            return "cyan";
        }else{
            return "red";
        }
    }
  }
  const checkDisabledAsign = ()=>{
      if(item.id_status===1){
          return false;
      }else{
          return true;
      }
  }
  return(
    <>
      <div className="d-flex justify-content-center" style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        <ReturnIcon nameIcon={"FaBed"} fontSize={100} color={colors.secondary} />
      </div>
      <div style={{paddingLeft:20,paddingRight:20,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",marginTop:5}}>
        <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{item.name_apartment}</span>
        <span style={{fontWeight:"bold",color:returnColorItem(item.id_status),fontSize:14}}>{item.status}</span>
      </div>
      <div className="p-2 d-flex justify-content-center">
        <div style={{flexDirection:"row",marginTop:20}}>
          <IconButton icon="FaInfo" type="success" execute={()=>handleShowModalInfo(item)} title="Información"/>
          {
            item.id_status !== 4 ?
              <IconButton 
                icon="FaUserPlus" 
                type="success" 
                execute={()=>handleShowModalAsign(item)} 
                title="Asignar cliente" 
                disabled={checkDisabledAsign()} 
                style={{marginLeft:10}} /> :
              <IconButton 
                icon="FaUserCheck" 
                type="info" 
                execute={()=>handleShowModalClient(item)} 
                title={"Datos del cliente"}
                style={{marginLeft:10}} />                

          }
        </div>
      </div>
    </>
  )
}
export default ContentCard;
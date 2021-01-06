import React from "react";
import {useUser} from "../../../../Context/User";
import ReturnIcon from "../../../Principal/ReturnIcon";
import IconButton from "../../../Principal/IconButton";

const ContentCard = (props)=>{
  const {branch,handleShowModalInfo,handleShowModalApartments,handleShowModalUsers} = props;
  const {colors} = useUser();
  return(
    <>
      <div className="d-flex justify-content-center" style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        <ReturnIcon nameIcon={"FaBuilding"} fontSize={100} color={colors.secondary} />
      </div>
      <div style={{paddingLeft:20,paddingRight:20,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",marginTop:5}}>
        <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{branch.name_branch}</span>
      </div>
      <div className="p-2 d-flex justify-content-center">
        <div style={{flexDirection:"row",marginTop:20}}>
          <IconButton icon="FaHome" type="success" execute={()=>handleShowModalApartments(branch)} title="Apartamentos"/>
          <IconButton icon="FaInfo" type="success" execute={()=>handleShowModalInfo(branch)} title="información" style={{marginLeft:10}} />
          <IconButton icon="FaUserAlt" type="success" execute={()=>handleShowModalUsers(branch)} title="Empleados" style={{marginLeft:10}} />
        </div>
      </div>
    </>
  )
}
export default ContentCard;

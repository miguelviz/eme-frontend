import React from "react";
import {Row,Col} from "react-bootstrap";
import {useUser} from "../../../../Context/User";
import ReturnIcon from "../../../Principal/ReturnIcon";
import IconButton from "../../../Principal/IconButton";


const ContentCard = (props)=>{
  const {jobData} = props;
  const {colors} = useUser();
  const test = ()=>console.log("test");
  return(
    <>
      <div className="d-flex justify-content-center" style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        <ReturnIcon nameIcon={"FaUserAlt"} fontSize={100} color={colors.secondary} />
      </div>
      <div style={{paddingLeft:20,paddingRight:20,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",marginTop:5}}>
        <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{jobData.name_job}</span>
      </div>
    </>
  )
}
export default ContentCard;

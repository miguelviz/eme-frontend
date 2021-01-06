import React from "react";
import {Row,Col} from "react-bootstrap";
import "./styles.css";
import {useUser} from "../../../../Context/User";

const ContentCard = (props)=>{
  const {userData} = props;
  const {colors} = useUser();
  return(
    <>
      <div style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        <img src={userData.image||"https://www.aguayodevs.com/user_profile.png"} alt="" className="imageUserCard" />
      </div>
      <div style={{paddingLeft:20,paddingRight:20,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column"}}>
        <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{userData.names}</span>
      <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{userData.second_names}</span>
        <span style={{color:colors.primary,fontSize:12,marginTop:10}}>{userData.email}</span>
        <span style={{color:colors.primary,fontSize:12}}>{"ADMINISTRADOR"}</span>
      </div>
    </>
  )
}
export default ContentCard;

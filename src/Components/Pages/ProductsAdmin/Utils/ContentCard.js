import React from "react";
import {Row,Col} from "react-bootstrap";
import {useUser} from "../../../../Context/User";
import ReturnIcon from "../../../Principal/ReturnIcon";
import IconButton from "../../../Principal/IconButton";


const ContentCard = (props)=>{
  const {productData} = props;
  const {colors} = useUser();
  const test = ()=>console.log("test");
  return(
    <>
      <div className="d-flex justify-content-center" style={{paddingLeft:20,paddingRight:20,paddingTop:20}}>
        <ReturnIcon nameIcon={"FaProductHunt"} fontSize={100} color={colors.secondary} />
      </div>
      <div style={{paddingLeft:20,paddingRight:20,display:"flex",alignItems:"center",justifyContent:"center",textAlign:"center",flexDirection:"column",marginTop:5}}>
        <span style={{fontWeight:"bold",color:colors.primary,fontSize:14}}>{productData.name_product}</span>
      </div>
      <div className="p-2 d-flex justify-content-center">
        <div style={{flexDirection:"row",marginTop:20}}>
          <IconButton icon="FaProductHunt" type="success" execute={test} title="Productos"/>
          <IconButton icon="FaInfo" type="success" execute={test} title="información" style={{marginLeft:10}} />
        </div>
      </div>
    </>
  )
}
export default ContentCard;

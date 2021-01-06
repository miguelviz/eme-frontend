import React from "react";
import {useModal} from "../../../Principal/Modal/Context";
import ReturnIcon from "../../../Principal/ReturnIcon";
import { Row,Col } from "react-bootstrap";
import Input from "../../../Principal/Input";

const ContentModalInfo = (props)=>{
    const {data,colors} = useModal();
    const {apartmentData} = data;
    return(
        <>
            <Row>
                <Col sm="6">
                    <Input label="Tipo de apartamento" value={apartmentData.name_type} disabled={true} />
                </Col>
                <Col sm="6">
                    <Input label="Estatus de apartamento" value={apartmentData.status} disabled={true} />
                </Col>
                <Col sm="6" style={{padding:20}} className="d-flex justify-content-center">
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <ReturnIcon nameIcon={"FaBed"} fontSize={80} color={colors.secondary} />
                        <span style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>{apartmentData.bedrooms} </span>
                    </div>
                </Col>
                <Col sm="6" style={{padding:20}} className="d-flex justify-content-center">
                    <div style={{display:"flex",flexDirection:"column"}}>
                        <ReturnIcon nameIcon={"FaBath"} fontSize={80} color={colors.secondary} />
                        <span style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>{apartmentData.bathrooms} </span>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default ContentModalInfo;
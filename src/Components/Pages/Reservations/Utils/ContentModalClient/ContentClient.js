import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import {useModal} from "../../../../Principal/Modal/Context";
import Input from "../../../../Principal/Input";

const Content = ()=>{
    const {data} = useModal();
    const {clientData} = data;
    return(
        <>
            <Row style={{marginTop:15,padding:15}}>
                <Col sm="6">
                    <Input value={clientData.names} label="Nombre(s)" disabled={true} />
                </Col>
                <Col sm="6">
                    <Input value={clientData.second_names} label="Apellido(s)" disabled={true} />
                </Col>
                <Col sm="6">
                    <Input value={clientData.email} label="Correo electrónico" disabled={true} />
                </Col>
                <Col sm="6">
                    <Input value={clientData.telephone} label="Número telefónico" disabled={true} />
                </Col>
            </Row>
        </>
    )
}
export default Content;
import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import {useModal} from "../../../../Principal/Modal/Context";
import Select from "../../../../Principal/Select";
import Input from "../../../../Principal/Input";

const Content = (props)=>{
    const {selectedClient,setSelectedClient} = props;
    const {data,searchData} = useModal();
    const {clients} = data;
    return(
        <>
            <Row>
                <Col sm="12">
                    <Select items={clients} val={selectedClient} setVal={setSelectedClient} placeholder="Seleccionar cliente" label="Cliente" />
                </Col>
            </Row>
            <Row style={{marginTop:15,padding:15}}>
            {
                selectedClient ? 
                    <>
                        <Col sm="6">
                            <Input value={selectedClient.names} label="Nombre(s)" disabled={true} />
                        </Col>
                        <Col sm="6">
                            <Input value={selectedClient.second_names} label="Apellido(s)" disabled={true} />
                        </Col>
                        <Col sm="6">
                            <Input value={selectedClient.email} label="Correo electrónico" disabled={true} />
                        </Col>
                        <Col sm="6">
                            <Input value={selectedClient.telephone} label="Número telefónico" disabled={true} />
                        </Col>
                    </> : null
            }
            </Row>
        </>
    )
}
export default Content;
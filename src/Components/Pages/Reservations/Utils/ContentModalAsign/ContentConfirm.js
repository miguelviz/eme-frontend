import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import Card from "../../../../Principal/Card";
import {useModal} from "../../../../Principal/Modal/Context";
import IconButton from "../../../../Principal/IconButton";
import {REQUEST} from "../../../../../Utils/Constants";
import {Toast} from "../../../../../Utils/Toast";
import {useUser} from "../../../../../Context/User";

const Content = (props)=>{
    const {selectedClient,reset,cancel} = props;
    const {data} = useModal();
    const {user} = useUser();
    const [isLoading,setIsLoading] = useState(false);
    const handleHideLoading = ()=>setIsLoading(false);
    const handleShowLoading = ()=>setIsLoading(true);
    const {apartmentData} = data;
    const save = async()=>{
        handleShowLoading();
        let postData = {user,selectedClient,apartmentData,type:"createContract"};
        let r = await REQUEST("reservations",postData).catch(e=>{
            Toast("Error al conectar al servidor","error");
            handleHideLoading();
        })
        if(r){
            if(r.error){
                Toast(r.error,"error");
            }else{
                Toast("Contrato creado exitosamente!.","info");
                cancel();
            }
        }
        handleHideLoading();
    }
    const checkErrors = ()=>{
        if(selectedClient){
            return false;
        }else{
            return true;
        }
    }
    return(
        <div style={{backgroundColor:"#a1a1a1",borderRadius:10,padding:20}}>
            <Row>
                <Col sm="12" className="d-flex justify-content-end">
                    <p style={{fontWeight:"bold",fontSize:20}}>
                        Confirmación de cliente y apartamento
                    </p>
                </Col>
                <Col sm="6">
                    <Card Content={()=>(
                        <div style={{padding:20}}>
                            <p style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                                Cliente
                            </p>
                           {
                               selectedClient ? 
                               <Row>
                               <Col sm="6">
                                   <p>
                                       Nombres
                                   </p>
                               </Col>
                               <Col sm="6" className>
                                   <p style={{textAlign:"right",fontWeight:"bold"}}>
                                       {selectedClient.names}
                                   </p>
                               </Col>
                               <Col sm="6">
                                   <p>
                                       Apellidos
                                   </p>
                               </Col>
                               <Col sm="6" className>
                                   <p style={{textAlign:"right",fontWeight:"bold"}}>
                                       {selectedClient.second_names}
                                   </p>
                               </Col>
                               <Col sm="6">
                                   <p>
                                       Correo Electrónico
                                   </p>
                               </Col>
                               <Col sm="6" className>
                                   <p style={{textAlign:"right",fontWeight:"bold"}}>
                                       {selectedClient.email}
                                   </p>
                               </Col>
                               <Col sm="6">
                                   <p>
                                       Número de teléfono
                                   </p>
                               </Col>
                               <Col sm="6" className>
                                   <p style={{textAlign:"right",fontWeight:"bold"}}>
                                       {selectedClient.telephone}
                                   </p>
                               </Col>
                           </Row> :
                           <Container>
                                <Row>
                                    <Col sm="12" style={{padding:20}} className="d-flex justify-content-center">
                                        <span style={{fontSize:20,fontWeight:"bold",textAlign:"center"}}>Por favor asigne un cliente para visualizar el contrato</span>
                                    </Col>
                                </Row>
                            </Container>

                           }
                        </div>
                    )} />
                </Col>
                <Col sm="6">
                    <Card Content={()=>(
                        <div style={{padding:20}}>
                            <p style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>
                                Apartamento
                            </p>
                            <Row>
                                <Col sm="6">
                                    <p>
                                        Nombre / Número
                                    </p>
                                </Col>
                                <Col sm="6" className>
                                    <p style={{textAlign:"right",fontWeight:"bold"}}>
                                        {apartmentData.name_apartment}
                                    </p>
                                </Col>
                                <Col sm="6">
                                    <p>
                                        Piso
                                    </p>
                                </Col>
                                <Col sm="6" className>
                                    <p style={{textAlign:"right",fontWeight:"bold"}}>
                                        {apartmentData.floor||"Planta Baja"}
                                    </p>
                                </Col>
                                <Col sm="6">
                                    <p>
                                        Recamaras
                                    </p>
                                </Col>
                                <Col sm="6" className>
                                    <p style={{textAlign:"right",fontWeight:"bold"}}>
                                        {apartmentData.bedrooms}
                                    </p>
                                </Col>
                                <Col sm="6">
                                    <p>
                                        Baños
                                    </p>
                                </Col>
                                <Col sm="6" className>
                                    <p style={{textAlign:"right",fontWeight:"bold"}}>
                                        {apartmentData.bathrooms}
                                    </p>
                                </Col>
                            </Row>
                        </div>
                    )} />
                </Col>
                <Col sm="12" className="d-flex justyfy-content-end p-3">
                    <div style={{flexDirection:"row",marginTop:25}}>
                        <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
                        <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar" style={{marginLeft:10}}/>
                        <IconButton icon="FaSave" type="success" execute={save} title="Asignar Cliente" style={{marginLeft:10}} disabled={checkErrors()} loader={isLoading}/>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
export default Content;
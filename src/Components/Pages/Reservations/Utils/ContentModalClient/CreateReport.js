import React,{useState} from "react";
import { Row,Col } from "react-bootstrap";
import {useModal} from "../../../../Principal/Modal/Context";
import Select from "../../../../Principal/Select";
import TextArea from "../../../../Principal/TextArea";
import IconButton from "../../../../Principal/IconButton.js"
import {REQUEST} from "../../../../../Utils/Constants";
import {useUser} from "../../../../../Context/User";
import {Toast} from "../../../../../Utils/Toast";

const Content = (props)=>{
    const {cancel} = props;
    const {user} = useUser();
    const {data,searchData} = useModal();
    const {report_types,apartmentData} = data;
    const [selectedType,setSelectedType] = useState(null);
    const [description,setDescription] = useState("");
    const [isloading,setisloading] = useState(false);
    const handleShowLoading = ()=>setisloading(true);
    const handleHideLoading = ()=>setisloading(false);
    const reset = ()=>{
        setDescription("");
        setSelectedType(null);
    }
    const create = async()=>{
        handleShowLoading();
        let postData = {user,selectedType,description,apartmentData,type:"createReport"};
        let r = await REQUEST("reservations",postData).catch(e=>{
          Toast("Error al conectar al servidor","error");
          handleHideLoading();
        })
        if(r){
          if(r.error){
            Toast(r.error,"error");
          }else{
            Toast("Reporte creado exitosamente","info");
            reset();
            searchData();
          }
        }
        handleHideLoading();
    }
    const checkErrors = ()=>{
        if(!description||!selectedType){
            return true;
        }else{
            return false;
        }
    }
    return(
        <>
            <Row>
                <Col sm="12">
                    <Select items={report_types} val={selectedType} setVal={setSelectedType} placeholder="Seleccionar tipo de reporte" label="Tipo de reporte" />
                </Col>
                <Col sm="12">
                    <TextArea value={description} onChange={setDescription} placeholder="Descripción de reporte" rows="3" style={{marginTop:15}} />
                </Col>
                <Col sm="12">
                    <div className="d-flex justify-content-end" style={{marginTop:20}}>
                        <div style={{flexDirection:"row"}}>
                            <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
                            <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
                            <IconButton icon="FaSave" type="success" execute={create} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default Content;
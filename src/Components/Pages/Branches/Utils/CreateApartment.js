import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import Select from "../../../Principal/Select";
import Input from "../../../Principal/Input";
import { useModal } from "../../../Principal/Modal/Context";
import TextArea from "../../../Principal/TextArea";
import IconButton from "../../../Principal/IconButton";
import {REQUEST} from "../../../../Utils/Constants";
import {useUser} from "../../../../Context/User";
import {Toast} from "../../../../Utils/Toast";


const CreateApartment = (props)=>{
    const {cancel} = props;
    const {user} = useUser();
    const {data,searchData} = useModal();
    const {branchData,listRooms} = data;
    const [floors] = useState(returnFloors(branchData.min_floor,branchData.max_floor));
    const [selectedFloor,setSelectedFloor] = useState(null);
    const [selectedListRoom,setSelectedListRoom] = useState(null);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [isloading,setisloading] = useState(false);
    const handleShowLoading = ()=>setisloading(true);
    const handleHideLoading = ()=>setisloading(false);

    const checkErrors = ()=>{
        if(checkEmpty(name)||checkEmpty(description)||!selectedFloor||!selectedListRoom){
            return true;
        }else{
            return false;
        }
    }
    const reset = ()=>{
        setName("");
        setDescription("");
        setSelectedListRoom(null);
        setSelectedFloor(null);
    }
    const checkEmpty = (value,label)=>{
        if(!value){
          if(!label){
            return "El valor no puede estar vacio!";
          }else{
            return label+" no puede estár vacio!";
          }
        }else{
          return null;
        }
    }
    const createApartment = async()=>{
        handleShowLoading();
        let postData = {user,name,description,selectedFloor,selectedListRoom,id_branch:branchData.id_branch,type:"createApartment"};
        let r = await REQUEST("apartments",postData).catch(e=>{
          Toast("Error al conectar al servidor","error");
          handleHideLoading();
        })
        if(r){
          if(r.error){
            Toast(r.error,"error");
          }else{
            Toast("Apartamento creado exitosamente","info");
            reset();
            searchData();
          }
        }
        handleHideLoading();
    }
    return(
        <>
            <Row>
                <Col sm="9">
                    <Input value={name} onChange={setName} placeholder="Nombre / Nùmero" errorMsg={checkEmpty(name,"El nombre de apartamento")} />
                    <TextArea value={description} onChange={setDescription} placeholder="Descripciòn de apartamento" rows="3" style={{marginTop:15}} />
                </Col>
                <Col sm="3">
                    <Select items={floors} val={selectedFloor} setVal={setSelectedFloor} placeholder="No. piso" />
                    <div style={{marginTop:15}}>
                        <Select items={listRooms} val={selectedListRoom} setVal={setSelectedListRoom} placeholder="Tipo de apartamento" />
                    </div>
                    <div className="d-flex justify-content-center" style={{marginTop:20}}>
                        <div style={{flexDirection:"row"}}>
                            <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
                            <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
                            <IconButton icon="FaSave" type="success" execute={createApartment} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}
export default CreateApartment;
const returnFloors = (min,max)=>{
    let flrs = [];
    for (let i = min; i <= max; i++) {
        flrs.push({value:i,label:i===0?"Planta baja":i});
    }
    return flrs;
}
import React, { useState } from "react";
import {Row,Col} from "react-bootstrap";
import IconButton from "../../../Principal/IconButton";
import Input from "../../../Principal/Input";
import {Toast} from "../../../../Utils/Toast";
import {REQUEST} from "../../../../Utils/Constants";
import {useUser} from "../../../../Context/User";

const ContentModalCreate = (props)=>{
  const {cancel} = props;
  const [name,setName] = useState("");
  const [bedrooms,setBedrooms] = useState(1);
  const [bathrooms,setBathrooms] = useState(1);
  const {user} = useUser();
  const [isloading,setisloading] = useState(false);
  const handleShowLoading = ()=>setisloading(true);
  const handleHideLoading = ()=>setisloading(false);
  const reset = ()=>{
    setName("");
    setBedrooms(1);
    setBathrooms(1);
  }
  const create = async()=>{
    handleShowLoading();
    let postData = {user,name,type:"createListRoom",bedrooms,bathrooms};
    let r = await REQUEST("apartments",postData).catch(e=>{
      Toast("Error al conectar al servidor","error");
      handleHideLoading();
    })
    if(r){
      if(r.error){
        Toast(r.error,"error");
      }else{
        Toast("Tipo de apartamento creado exitosamente","info");
        cancel();
      }
    }
    handleHideLoading();
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
  const checkErrors = ()=>{
    if(checkEmpty(name)){
      return true;
    }else{
      return false;
    }
  }
  const subtractBedroom = ()=>{
    setBedrooms(bedrooms-1);
  }
  const sumBedroom = ()=>{
    setBedrooms(bedrooms+1);
  }
  const subtractBathroom = ()=>{
    setBathrooms(bathrooms-1);
  }
  const sumBathroom = ()=>{
    setBathrooms(bathrooms+1);
  }
  const disabledMinBedroom = ()=>{
    if(bedrooms===1){
      return true;
    }else{
      return false;
    }
  }
  const disabledMinBathroom = ()=>{
    if(bathrooms===1){
      return true;
    }else{
      return false;
    }
  }
  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="9">
          <Input value={name} onChange={setName} placeholder="Nombre de apartamento" label="Nombre" errorMsg={checkEmpty(name,"Nombre de apartamento")} />
          <Row>
            <Col sm="6">
              <label className="badge">Habitaciones</label>
              <div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <IconButton icon="FaMinus" type="success" execute={subtractBedroom} title="-1" disabled={disabledMinBedroom()} />
                  <div style={{textAlign:"center",padding:10,marginLeft:10}}>
                      <p style={{fontWeight:"bold",fontSize:20}}>
                          {bedrooms}
                      </p>
                  </div>
                  <IconButton icon="FaPlus" type="success" execute={sumBedroom} title="-1" style={{marginLeft:10}} />
                </div>
              </div>
            </Col>
            <Col sm="6">
            <label className="badge">Baños</label>
              <div>
                <div style={{display:"flex",flexDirection:"row"}}>
                  <IconButton icon="FaMinus" type="success" execute={subtractBathroom} title="-1" disabled={disabledMinBathroom()} />
                  <div style={{textAlign:"center",padding:10,marginLeft:10}}>
                      <p style={{fontWeight:"bold",fontSize:20}}>
                          {bathrooms}
                      </p>
                  </div>
                  <IconButton icon="FaPlus" type="success" execute={sumBathroom} title="-1" style={{marginLeft:10}} />
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col sm="3" className="d-flex justify-content-end">
          <div style={{flexDirection:"row",marginTop:25}}>
            <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
            <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
            <IconButton icon="FaSave" type="success" execute={create} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
          </div>
        </Col>
      </Row>
    </div>
  )
}
export default ContentModalCreate;
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
  const {user} = useUser();
  const [isloading,setisloading] = useState(false);
  const handleShowLoading = ()=>setisloading(true);
  const handleHideLoading = ()=>setisloading(false);
  const reset = ()=>{
    setName("");
  }
  const create = async()=>{
    handleShowLoading();
    let postData = {user,name,type:"createCompany"};
    let r = await REQUEST("master-data",postData).catch(e=>{
      Toast("Error al conectar al servidor","error");
      handleHideLoading();
    })
    if(r){
      if(r.error){
        Toast(r.error,"error");
      }else{
        Toast("Empresa creada exitosamente","info");
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
  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="9">
          <Input value={name} onChange={setName} placeholder="Nombre de Empresa" label="Nombre" errorMsg={checkEmpty(name,"Nombre de empresa")} />
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
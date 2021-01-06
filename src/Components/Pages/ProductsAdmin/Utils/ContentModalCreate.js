import React, { useState } from "react";
import {Row,Col,Form} from "react-bootstrap";
import IconButton from "../../../Principal/IconButton";
import Input from "../../../Principal/Input";
import TextArea from "../../../Principal/TextArea";
import {Toast} from "../../../../Utils/Toast";
import {REQUEST} from "../../../../Utils/Constants";
import {useUser} from "../../../../Context/User";

const ContentModalCreate = (props)=>{
  const {cancel} = props;
  const [name,setName] = useState("");
  const [image,setImage] = useState(null);
  const [imageUri,setImageUri] = useState(null);
  const [description,setDescription] = useState("");
  const {user} = useUser();
  const [isloading,setisloading] = useState(false);
  const handleShowLoading = ()=>setisloading(true);
  const handleHideLoading = ()=>setisloading(false);
  const reset = ()=>{
    setName("");
    setDescription("");
    setImage(null);
    setImageUri(null);
  }
  const createproduct = async()=>{
    handleShowLoading();
    let postData = {user,name,description,type:"createProduct"};
    let r = await REQUEST("master-data",postData).catch(e=>{
      Toast("Error al conectar al servidor","error");
      handleHideLoading();
    })
    if(r){
      if(r.error){
        Toast(r.error,"error");
      }else{
        Toast("Producto creado exitosamente","info");
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
    if(checkEmpty(name)||checkEmpty(description)){
      return true;
    }else{
      return false;
    }
  }
  const onChangeFile = (event)=>{
    if (event.target.files && event.target.files[0]) {
      setImageUri(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }else {
      Toast("Imagen de producto no valida","info");
    }
  }
  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="4">
          {/* <img src={imageUri} onClick={()=>console.log(image)} style={{width:"100%"}} alt="product"/> */}
          
          <Form>
            <Form.File 
              id="custom-file-translate-html"
              label="Imagen de producto"
              data-browse="Seleccionar"
              onChange={onChangeFile}
              custom
              disabled={true}
            />
          </Form>
        </Col>
        <Col sm="8">
          <Input value={name} onChange={setName} placeholder="Nombre de producto" label="Nombre" errorMsg={checkEmpty(name,"Nombre de producto")} />
          <TextArea value={description} onChange={setDescription} placeholder="Descripciòn de producto" label="Descripciòn" rows="3" />
          <div className="d-flex justify-content-end" style={{marginTop:20}}>
            <div style={{flexDirection:"row"}}>
              <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
              <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
              <IconButton icon="FaSave" type="success" execute={createproduct} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
            </div>
          </div>
        </Col>

      </Row>
    </div>  
  )
}
export default ContentModalCreate;
/*
        <Col sm="3" className="d-flex justify-content-end">
          <div style={{flexDirection:"row"}}>
            <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar"/>
            <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
            <IconButton icon="FaSave" type="success" execute={createbranch} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
          </div>
        </Col>
*/
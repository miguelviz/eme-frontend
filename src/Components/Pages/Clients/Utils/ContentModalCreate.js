import React, { useState } from "react";
import {Row,Col} from "react-bootstrap";
import IconButton from "../../../Principal/IconButton";
import Input from "../../../Principal/Input";
import {Toast} from "../../../../Utils/Toast";
import {REQUEST} from "../../../../Utils/Constants";
import {useUser} from "../../../../Context/User";

const ContentModalCreate = (props)=>{
  const {cancel} = props;
  const [names,setNames] = useState("");
  const [second_names,setSecond_names] = useState("");
  const [email,setEmail] = useState("");
  const [tel,setTel] = useState("");
  const {user} = useUser();
  const [isloading,setisloading] = useState(false);
  const handleShowLoading = ()=>setisloading(true);
  const handleHideLoading = ()=>setisloading(false);
  const reset = ()=>{
    setNames("");
    setSecond_names("");
    setTel("");
    setEmail("");
  }
  const create = async()=>{
    handleShowLoading();
    let postData = {user,names,second_names,email,tel,type:"createClient"};
    let r = await REQUEST("reservations",postData).catch(e=>{
      Toast("Error al conectar al servidor","error");
      handleHideLoading();
    })
    if(r){
      if(r.error){
        Toast(r.error,"error");
      }else{
        Toast("Cliente creado exitosamente","info");
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
    if(checkEmpty(names)||checkEmpty(second_names)||checkMail()||checkTel()){
      return true;
    }else{
      return false;
    }
  }
  const checkMail = ()=>{
    if(!email){
      return "Es necesario especificar el correo electrónico";
    }else{
      let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
      if (reg.test(email)) {
        return null;
      }else{
        return "Formato de correo electrónico inválido";
      }
    }
  }
  const checkTel = ()=>{
    if(isNaN(tel)||!tel){
      return "Formato telefónico inválido";
    }else{
      return null;
    }
  }
  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="6">
          <Input value={names} onChange={setNames} placeholder="Nombre(s)" label="Nombre(s)" errorMsg={checkEmpty(names,"Nombre de cliente")} />
        </Col>
        <Col sm="6">
          <Input value={second_names} onChange={setSecond_names} placeholder="Apellido(s)" label="Apellido(s)" errorMsg={checkEmpty(second_names,"Apellido de cliente")} />
        </Col>
        <Col sm="6">
          <Input value={email} onChange={setEmail} placeholder="Correo electrónico" label="Correo Electrónico" errorMsg={checkMail()} />
        </Col>
        <Col sm="6">
          <Input value={tel} onChange={setTel} placeholder="Teléfono" label="Teléfono" errorMsg={checkTel()} />
        </Col>
        <Col sm="12" className="d-flex justify-content-end">
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
/*

*/
export default ContentModalCreate;
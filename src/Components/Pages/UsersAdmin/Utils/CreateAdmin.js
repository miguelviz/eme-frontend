import React ,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import md5 from "md5";
import Input from "../../../Principal/Input";
import IconButton from "../../../Principal/IconButton";
import {useUser} from "../../../../Context/User";
import {Const,REQUEST} from "../../../../Utils/Constants";
import {Toast} from "../../../../Utils/Toast";

const CreateAdmin = (props)=>{
  const {cancel} = props;
  const {user} = useUser();
  const [names,setNames] = useState("");
  const [second_names,setSecond_names] = useState("");
  const [email,setEmail] = useState("");
  const [psw,setPsw] = useState("");
  const [psw2,setPsw2] = useState("");
  const [isloading,setisloading] = useState(false);
  const handleShowLoading = ()=>setisloading(true)
  const handleHideLoading = ()=>setisloading(false);
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
  const checkPsw = ()=>{
    if(!psw){
      return "Contraseña no puede estar vacia!";
    }else{
      if(psw.length<8){
        return "La contraseña debe contener al menos 8 caracteres!";
      }else{
        if(psw!==psw2){
          return "Las contraseñas no coinciden!"
        }else{
          return null;
        }
      }
    }
  }
  const checkPsw2 = ()=>{
    if(!psw2){
      return "Repita la contraseña";
    }else{
      if(psw!==psw2){
        return "Las contraseñas no coinciden!"
      }else{
        return null;
      }
    }
  }
  const checkErrors = ()=>{
    if(checkPsw()||checkPsw2()||checkEmpty(names)||checkEmpty(second_names)||checkMail()){
      return true;
    }else{
      return false;
    }
  }
  const reset = ()=>{
    setNames("");
    setSecond_names("");
    setEmail("");
    setPsw("");
    setPsw2("");
  }
  const createadmin = async()=>{
    handleShowLoading();
    let postData = { user,names,second_names,email,psw:md5(psw),type:"createAdmin" };
    let r = await REQUEST("admin",postData).catch(e=>{
      Toast("Error al conectar al servidor","error");
    })
    if(r){
      if(r.error){
        Toast(r.error,"error")
      }else{
        Toast("Administrador creado axitosamente.","info");
        reset();
      }
    }
    handleHideLoading()
  }
  return(
    <>
      <div style={{padding:10}}>
        <Row>
          <Col sm="4">
            <Input value={names} onChange={setNames} placeholder="Nombre(s)" label="Nombre(s)" errorMsg={checkEmpty(names,"Nombre")} />
          </Col>
          <Col sm="4">
            <Input value={second_names} onChange={setSecond_names} placeholder="Apellido(s)" label="Apellido(s)" errorMsg={checkEmpty(second_names,"Apellido")} />
          </Col>
          <Col sm="4">
            <Input value={email} onChange={setEmail} placeholder="Correo electrónico" label="Correo electrónico" errorMsg={checkMail()} />
          </Col>
          <Col sm="4">
            <Input value={psw} password={true} onChange={setPsw} placeholder="Contraseña" label="Contraseña" errorMsg={checkPsw()} />
          </Col>
          <Col sm="4">
            <Input value={psw2} password={true} onChange={setPsw2} placeholder="Repetir contraseña" label="Repetir contraseña" errorMsg={checkPsw2()} />
          </Col>
          <Col sm="4" className="d-flex justify-content-end" style={{paddingRight:20}}>
            <div style={{flexDirection:"row",marginTop:20}}>
              <IconButton icon="FaTimes" type="danger" execute={cancel} title="Cerrar" style={{marginLeft:10}}/>
              <IconButton icon="FaSyncAlt" type="info" execute={reset} title="Reiniciar formulario" style={{marginLeft:10}}/>
              <IconButton icon="FaSave" type="success" execute={createadmin} title="Crear" style={{marginLeft:10}} disabled={checkErrors()} loader={isloading}/>
            </div>
          </Col>
        </Row>
      </div>
    </>
  )
}
export default CreateAdmin;

import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import Select from "../../../Principal/Select";
import Input from "../../../Principal/Input";
import { useModal } from "../../../Principal/Modal/Context";
import IconButton from "../../../Principal/IconButton";
import {REQUEST} from "../../../../Utils/Constants";
import {useUser} from "../../../../Context/User";
import {Toast} from "../../../../Utils/Toast";
import md5 from "md5";


const CreateUser = (props)=>{
    const {cancel} = props;
    const {user} = useUser();
    const {data,searchData} = useModal();
    const {jobs,branchData} = data;
    const [name,setName] = useState("");
    const [second_name,setSecond_name] = useState("");
    const [email,setEmail] = useState("");
    const [psw,setPsw] = useState("");
    const [psw2,setPsw2] = useState("");
    const [selectedJob,setSelectedJob] = useState(null);
    const [isloading,setisloading] = useState(false);
    const handleShowLoading = ()=>setisloading(true);
    const handleHideLoading = ()=>setisloading(false);

    const checkErrors = ()=>{
        if(checkEmpty(name)||!selectedJob||checkEmpty(second_name)||checkMail()||checkPsw()||checkPsw2()){
            return true;
        }else{
            return false;
        }
    }
    const reset = ()=>{
        setName("");
        setSelectedJob(null);
        setSecond_name("");
        setPsw("");
        setPsw2("");
        setEmail("");
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
    const create = async()=>{
        handleShowLoading();
        let postData = {user,name,second_name,email,psw:md5(psw),id_job:selectedJob.value,id_branch:branchData.id_branch,type:"createBranchUser"};
        let r = await REQUEST("master-data",postData).catch(e=>{
          Toast("Error al conectar al servidor","error");
          handleHideLoading();
        })
        if(r){
          if(r.error){
            Toast(r.error,"error");
          }else{
            Toast("Empleado creado exitosamente","info");
            reset();
            searchData();
          }
        }
        handleHideLoading();
    }
    const checkMail = ()=>{
        let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (reg.test(email)) {
          return null;
        }else{
          return "Formato de correo electrónico inválido";
        }
      }
    return(
        <>
            <Row>
                <Col sm="4">
                    <Input value={name} onChange={setName} placeholder="Nombres" label="Nombres" errorMsg={checkEmpty(name,"El nombre de empleado")} />
                </Col>
                <Col sm="4">
                    <Input value={second_name} onChange={setSecond_name} placeholder="Apellidos" label="Apellidos" errorMsg={checkEmpty(second_name,"El apellido de empleado")} />
                </Col>
                <Col sm="4">
                    <Select items={jobs} val={selectedJob} setVal={setSelectedJob} placeholder="Puesto" label="Puesto laboral"/>
                </Col>
                <Col sm="4">
                    <Input value={email} onChange={setEmail} placeholder="Correo electrónico" label="Correo electrónico" errorMsg={checkMail()} />
                </Col>
                <Col sm="4">
                    <Input value={psw} onChange={setPsw} placeholder="Contraseña" label="Contraseña" password={true} errorMsg={checkPsw()} />
                </Col>
                <Col sm="4">
                    <Input value={psw2} onChange={setPsw2} placeholder="Repetir Contraseña" label="Repetir contraseña" password={true} errorMsg={checkPsw2()} />
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
export default CreateUser;
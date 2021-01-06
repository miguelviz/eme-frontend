import React, { useState } from "react";
import {Row,Col} from "react-bootstrap";
import Input from "./Input";
import {REQUEST,Const} from "../../Utils/Constants";
import {Toast} from "../../Utils/Toast";
import IconButton from "./IconButton";

const EditableInput = (props)=>{
  const {initialValue,label,requireInfo,url,errorMsg,searchData} = props;
  const {colors} = Const;
  const [value,setValue] = useState(initialValue||"Sin definir");
  const [editing,setEditing] = useState(false);
  const [loading,setLoading] = useState(false);
  const handleEditing = ()=>{
    if(editing){
      setEditing(false);
      setValue(initialValue);
    }else{
      setEditing(true);
    }
  }
  const returnDisabledSaveBtn = ()=>{
    if(initialValue===value){
      return true;
    }else{
      if(value){
        if(errorMsg){
          if(errorMsg(value)){
            console.log("ErrorMsg:",errorMsg(value));
            return true;
          }else{
            return false;
          }
        }else{
          return false;
        }
      }else{
        return true;
      }
    }
  }
  const saveNewValue = async()=>{
    let postData = { value,...requireInfo };
    setLoading(true)
    let r = await REQUEST(url,postData).catch(e=>{
      Toast(e,"error")
    })
    console.log(r);
    if(r.error){
      Toast(r.error,"error");
    }else{
      setEditing(false);
      Toast("Dato actualizado exitosamente","info");
      if(searchData){
        searchData()
      }
    }
    setLoading(false)
  }
  const returnErrorMsg = ()=>{
    if(errorMsg){
      if(errorMsg(value)){
        return errorMsg(value);
      }else{
        return null;
      }
    }else{
      return null
    }
  }
  return(
    <>
      <label className="badge" style={{color:colors.primary}}>
        {label}
      </label>
      <Row>
        <Col sm={editing?"9":"10"} md={editing?"8":"10"} xl={editing?"9":"10"} style={{padding:5}}>
          <Input value={value} errorMsg={returnErrorMsg()} execute={saveNewValue} onChange={setValue} disabled={editing?false:true}/>
        </Col>
        {
          editing?
          <>
            <Col sm="2" md="2" xl="2" className="d-flex justify-content-center">
              <IconButton type="danger" icon="FaTimes" execute={handleEditing} title="Cancelar" />
            </Col>
            <Col sm="1" md="2" xl="1" className="d-flex justify-content-center">
              <IconButton type="success" loader={loading} execute={saveNewValue} icon="FaSave" title="Guardar cambios" disabled={returnDisabledSaveBtn()}/>
            </Col>
          </> :
          <Col sm="2" md="2" xl="2" className="d-flex justify-content-center">
            <IconButton icon="FaPencilAlt" execute={handleEditing} title="Modificar" />
          </Col>
        }
      </Row>
    </>
  )
}
export default EditableInput;

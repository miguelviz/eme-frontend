import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import IconButton from "../Principal/IconButton";
import { Const,REQUEST } from "../../Utils/Constants";
import {Toast} from "../../Utils/Toast";

const EditableNumber = (props)=>{
    const {initialValue,label,requireInfo,url,searchData,min} = props;
    const ini = parseInt(initialValue) || 0;
    const {colors} = Const;
    const [value,setValue] = useState(ini);
    const [loading,setLoading] = useState(false);
    const reset = ()=>{
        setValue(ini);
    }
    const disabled = ()=>{
        if(value!==ini){
            return false;
        }else{
            return true;
        }
    }
    const subtract = (q)=>{
        setValue(value-q);
    }
    const sum = (q)=>{
        setValue(value+q);
    }
    const save = async()=>{
        let postData = { value,...requireInfo };
        setLoading(true)
        let r = await REQUEST(url,postData).catch(e=>{
          Toast(e,"error")
        })
        console.log(r);
        if(r.error){
          Toast(r.error,"error");
        }else{
          Toast("Dato actualizado exitosamente","info");
          if(searchData){
            searchData()
          }
        }
        setLoading(false)
    }
    return(
        <>
            <label className="badge" style={{color:colors.primary}}>
                {label}
            </label>
            <Row>
                <Col sm="8">
                    {
                        min ? 
                        <Row>
                            <Col sm="4" className="d-flex justify-content-center">
                                <IconButton icon="FaMinus" type="success" execute={()=>subtract(1)} title="-1"/>
                            </Col>
                            <Col sm="4" className="d-flex justify-content-center">
                                <div style={{textAlign:"center",padding:10}}>
                                    <p style={{fontWeight:"bold",fontSize:20}}>
                                        {value}
                                    </p>
                                </div>
                            </Col>
                            <Col sm="4" className="d-flex justify-content-center">
                                <IconButton icon="FaPlus" type="success" execute={()=>sum(1)} title="+1"/>
                            </Col>
                        </Row> : 
                            <Row>
                                <Col sm="1"></Col>
                                <Col sm="2" className="d-flex justify-content-center">
                                    <IconButton icon="FaMinus" type="success" execute={()=>subtract(10)} title="-10"/>
                                </Col>
                                <Col sm="2" className="d-flex justify-content-center">
                                    <IconButton icon="FaMinus" type="success" execute={()=>subtract(1)} title="-1"/>
                                </Col>
                                <Col sm="2" className="d-flex justify-content-center">
                                    <div style={{textAlign:"center",padding:10}}>
                                        <p style={{fontWeight:"bold",fontSize:20}}>
                                            {value}
                                        </p>
                                    </div>
                                </Col>
                                <Col sm="2" className="d-flex justify-content-center">
                                    <IconButton icon="FaPlus" type="success" execute={()=>sum(1)} title="+1"/>
                                </Col>
                                <Col sm="2" className="d-flex justify-content-center">
                                    <IconButton icon="FaPlus" type="success" execute={()=>sum(10)} title="+10"/>
                                </Col>
                                <Col sm="1"></Col>
                            </Row>
                    }
                </Col>
                <Col sm="4" className="d-flex justify-content-end">
                    <IconButton icon="FaSyncAlt" type="info" disabled={disabled()} execute={reset} title="Reiniciar valor"/>
                    <IconButton icon="FaSave" type="success" loader={loading} disabled={disabled()} execute={save} title="Guardar" style={{marginLeft:10}} />
                </Col>
            </Row>
        </>
    )
}
export default EditableNumber;
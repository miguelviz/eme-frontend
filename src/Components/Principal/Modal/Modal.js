import React from "react";
import {Modal} from "react-bootstrap";
import {Const} from "../../../Utils/Constants";
import "./style.css";

const ModalXl = (props)=>{
  const {title,show,handleClose,Content,centrado,size,maxWidth} = props;
  const {colors} = Const;
  return(
    <>
    <Modal size={(size)?size:null} show={show} onHide={handleClose} aria-labelledby={"modal"+title} centered={(centrado)?centrado:false}>
      <Modal.Header style={{background:"linear-gradient(90deg, rgba(80,76,77,1) 0%, rgba(30,30,30,1) 100%)"}} closeButton>
        <Modal.Title style={{color:"#fff"}}>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {
          (Content)?
          <Content {...props} />
          :
          <div className="d-flex justify-content-center">
            <p style={{fontWeight:"bold",fontSize:20}}>
              El modal no tiene contenido
            </p>
          </div>
        }
      </Modal.Body>
    </Modal>
    </>
  )
}

export default ModalXl;

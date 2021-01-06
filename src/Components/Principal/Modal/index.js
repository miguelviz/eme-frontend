import React, {useState} from "react";
import {ModalProvider,useModal} from "./Context";
import AloneLoader from "../AloneLoader";
import ErrorContainer from "../ErrorContainer";
import Modal from "./Modal";
const ModalDefault = (props)=>{
  const {Content,url,postData,title,size,centrado,visible,handleHide} = props;
  return(
    <ModalProvider url_start={url} data_start={postData}>
      <Modal
        Content={()=><ModalTunnel Content={Content} url={url} />}
        title={title}
        show={visible}
        size={size}
        handleClose={handleHide}
        centrado={centrado||null}
      />
    </ModalProvider>
  )
}
export default ModalDefault;
const ModalTunnel = (props)=>{
  const {Content,url} = props;
  const {data,loadingData,error} = useModal();
  return(
    <>
      {
        url!==null?
        loadingData ? <AloneLoader isVisible={true} /> :
          error ? <ErrorContainer error={error.msg} /> :
            data ? <Content /> : <p>...</p> : <Content />

      }
    </>
  )
}

import React from "react";
import {ComponentProvider,useComponent} from "./Context";
import AloneLoader from "../../Components/Principal/AloneLoader";
import ErrorContainer from "../../Components/Principal/ErrorContainer";
const ContextComponent = (props)=>{
  const {Content,url,data_start} = props;
  return(
    <ComponentProvider url_start={url} data_start={data_start}>
      <ComponentTunnel Content={Content} />
    </ComponentProvider>
  )
}
export default ContextComponent;

const ComponentTunnel = (props)=>{
  const {Content} = props;
  const {data,error,loadingData} = useComponent();
  return(
    <>
      {
        loadingData ? <AloneLoader isVisible={true} /> :
          error ? <ErrorContainer error={error.msg} /> :
            data ? <Content /> : <p>...</p>
      }
    </>
  )
}

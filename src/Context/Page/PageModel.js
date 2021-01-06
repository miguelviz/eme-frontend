import React from "react";
import {ViewProvider,useView} from "./index";
import Loader from "../../Components/Principal/Loader";
import AccessDenied from "../../Components/Principal/AccessDenied";
import Nav from "../../Components/Principal/Sidebar/Nav";
import Navbar from "../../Components/Principal/Sidebar/Navbar";
import {Const} from "../../Utils/Constants";
import "./styles.css";
import { Scrollbars } from 'react-custom-scrollbars';

const PageModel = (props)=>{
  const {url,datos,Content} = props;
  return(
    <ViewProvider url_start={url} data_start={datos}>
      <div style={{width:"100vw",height:"100vh",position:"absolute",top:0,left:0,backgroundColor:"#a1a1a1"}}>
        <ViewTunnel Content={()=><Content />} />
      </div>
    </ViewProvider>
  )
}

const ViewTunnel = (props)=>{
  const {Content} = props;
  const {auth,loadingData,sidebar_status} = useView();
  const {colors} = Const;
  const returnClassName = () => {
    let className = "containerPage ";
    if(!sidebar_status){
      className += "containerPageopen";
    }else{
      className += "containerPageclose";
    }
    return className;
  }
  return(
    <>
      {
        loadingData?
        <Loader isVisible={true} /> : auth?
          <>
            <Nav />
            <div className={returnClassName()} style={{width:sidebar_status?"calc("+window.screen.width+"px - 200px)":"100%",height:"100%"}}>
              <Navbar />
              <div style={{padding:5,height:"100%",width:"100%"}} >
                <Scrollbars className="backgroundTech" style={{borderRadius:10,width:"100%",height:"100%"}}>
                  <div style={{opacity:"1"}}>
                    <Content />
                  </div>
                  <div style={{height:50}}></div>
                </Scrollbars>
              </div>
            </div>
          </> :
          <>
            <Nav />
            <div className={returnClassName()} style={{width:sidebar_status?"calc("+window.screen.width+"px - 200px)":"100%",height:"100%"}}>
              <Navbar />
              <div style={{padding:5,height:"100%",width:"100%"}} >
                <Scrollbars className="backgroundTech" style={{borderRadius:10,width:"100%",height:"100%"}}>
                  <div style={{opacity:"1"}}>
                    <AccessDenied />
                  </div>
                  <div style={{height:50}}></div>
                </Scrollbars>
              </div>
            </div>
          </>
      }
    </>
  )
}
export default PageModel;

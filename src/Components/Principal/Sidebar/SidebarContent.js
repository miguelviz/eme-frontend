import React,{useState} from "react";
import {withRouter} from "react-router-dom";
import { useHistory } from 'react-router';
import SidebarContentHeader from "./SidebarContentHeader";
import SidebarContentBody from "./SidebarContentBody";
import { Scrollbars } from 'react-custom-scrollbars';
const SidebarContent = (props) => {
  const {rutas,close,toast} = props;
  const history = useHistory();
  return(
    <Scrollbars style={{ width: "100%", height: window.screen.height }}>
      <SidebarContentHeader history={history} close={close} />
      <SidebarContentBody rutas={rutas} close={close}/>
    </Scrollbars>
  )
};
export default withRouter(SidebarContent);
//https://demotint.bdksistemas.com/cliente/index.php

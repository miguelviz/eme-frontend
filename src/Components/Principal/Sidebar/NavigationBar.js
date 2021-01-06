import React, {useState} from "react";
import {Const} from "../../../Utils/Constants";
import Sidebar from "./Sidebar";
import {useView} from "../../../Context/Page";
const NavigationBar = (props)=>{
  const {user,toast,rutas} = props;
  const {sidebar_status,closeSidebar,openSidebar} = useView();
  const {colors} = Const;
  return(
    <>
      <Sidebar openSideBar={openSidebar} closeSidebar={closeSidebar} sidebar_status={sidebar_status}/>
    </>
  )
}

export default NavigationBar;

import React from "react";
import {useUser} from "../../../Context/User";
import {useView} from "../../../Context/Page";
import SidebarContent from "./SidebarContent";
import "./Sidebar.css";

const Sidebar = ()=>{
  const {sidebar_status,toggleSidebar} = useView();
  const {routes} = useUser();

  const returnImageRoute = ()=>{
    let route = process.env.PUBLIC_URL;
    if(!sidebar_status){
      return route + "SidebarCloseButton.png";
    }else{
      return route + "SidebarOpenButton.png";
    }
  }
  const returnSidebarStyles = ()=>{
    return {

    }
  }
  const returnClassName = ()=>{
    let className = "sidebar ";
    if(sidebar_status){
      className += "sidebaropen";
    }else{
      className += "sidebarclose"
    }
    return className +" sidebar-background";
  }
  return(
    <>
      <div className={returnClassName()} style={returnSidebarStyles()}>
        <SidebarContent rutas={routes}/>
        <img src={returnImageRoute()} alt="sidebarButton" className="sidebar-button" onClick={toggleSidebar} />
      </div>
    </>
  )
}
export default Sidebar;

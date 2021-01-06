import React, {useState,useMemo,useEffect} from "react";
import axios from "axios";
import {Const} from "../../Utils/Constants";
import {toast} from "react-toastify";
//import { useHistory } from 'react-router';
import {useUser} from "../../Context/User";

const ViewContext = React.createContext();

export const ViewProvider = (props)=>{
  const {url_start,data_start} = props;
  const {user} = useUser();
  const [data,setData] = useState(null);
  const [auth,setAuth] = useState(null);
  const [loadingData,setLoadingData] = useState(false);
  const [sidebar_status,setSidebar_status] = useState(false);
  const closeSidebar = ()=>setSidebar_status(false);
  const openSidebar = ()=>setSidebar_status(true);
  const toggleSidebar = ()=>{
    setSidebar_status(!sidebar_status);
    console.log("Cambio el estatus a:",sidebar_status);
  }

  const searchData = async(load)=>{
    if(load){
      setLoadingData(true);
    }
    let postData = {
      user:user,
      ...data_start
    }
    console.log(Const.backend+url_start)
    let r = await axios.post(Const.backend+url_start,postData).catch(e=>{
      toast.error("Error al conectar al servidor");
      console.log(e);
    })
    if(r){
      if(r.data.error){
        toast.error(r.data.error);
        console.log(r.data.datos);
      }else{
        console.log(r.data);
        setData(r.data.result);
        setAuth(r.data.auth);
      }
    }
    if(load){
      setLoadingData(false);
    }
  }
  useEffect(()=>{
    if(!data){
      if(url_start!==null){
        searchData(true);
      }else{
        setLoadingData(true);
        setAuth(true);
        setLoadingData(false);
      }
    }
  },[])
  const value = useMemo(()=>{
    return({data,auth,loadingData,searchData,sidebar_status,toggleSidebar})
  },[data,auth,loadingData,sidebar_status])
  return <ViewContext.Provider value={value} {...props}/>
}


export const useView = ()=>{
  return React.useContext(ViewContext);
}

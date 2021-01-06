import React, {useState,useMemo,useEffect} from "react";
import axios from "axios";
import {Const} from "../../Utils/Constants";
import {toast} from "react-toastify";
import {useUser} from "../User";

const ViewComponent = React.createContext();

export const ComponentProvider = (props)=>{
  const {url_start,data_start} = props;
  const {user} = useUser();
  const [data,setData] = useState(null);
  const [auth,setAuth] = useState(null);
  const [loadingData,setLoadingData] = useState(false);
  const [error,setError] = useState(null);

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
      setError({msg:"Error al conectar al servidor",error:e});
    })
    if(r){
      if(r.data.error){
        setError({msg:r.data.error,error:r.data.datos});
      }else{
        setData(r.data.result);
        setAuth(r.data.auth);
      }
    }
    if(load){
      setLoadingData(false)
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
    return({data,auth,loadingData,searchData,error})
  },[data,auth,loadingData,error])
  return <ViewComponent.Provider value={value} {...props}/>
}


export const useComponent = ()=>{
  return React.useContext(ViewComponent);
}

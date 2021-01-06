import React, {useState,useMemo,useEffect} from "react";
import axios from "axios";
import {Const} from "../../Utils/Constants";
import md5 from "md5";
import { useHistory } from 'react-router';
import {Toast} from "../../Utils/Toast";

const UserContext = React.createContext();

export const UserProvider = (props)=>{
  const {navigation} = props;
  const history = useHistory();
  const [user,setUser] = useState(null);
  const [routes,setRoutes] = useState([]);
  const [loadingUser,setLoadingUser] = useState(false);
  const [colors,setColors] = useState(Const.colors);
  const login = async(email,psw)=>{
    psw = md5(psw);
    setLoadingUser(true);
    let r = await axios.post(Const.backend,{type:"login",email:email,psw:psw}).catch(e=>{
      Toast("Error al conectar al servidor");
      console.log(e);
    })
    if(r){
      if(r.data.error){
        Toast(r.data.error,"error");
        console.log(r.data.datos);
      }else{
        localStorage.setItem("conection",r.data.result);
        window.location.reload();
      }
    }
    setTimeout(()=>{setLoadingUser(false);},500)
  }
  const logout = (email,psw)=>{
    localStorage.clear();
    window.location.reload();
  }
  const checkUserData = async()=>{
    setLoadingUser(true);
    if(localStorage.conection){
      let r = await axios.post(Const.backend,{type:"consultUserData",conection:localStorage.conection}).catch(e=>{
        Toast("Error al conectar al servidor","error");
        console.log(e);
      })
      if(r){
        if(r.data.error){
          Toast(r.data.error);
          localStorage.clear();
          window.location.reload(true);
        }else{
          setUser(r.data.datos);
          setRoutes(r.data.rutas);
        }
        setLoadingUser(false);
      }
    }else{
      setUser("Invitado");
    }
    setLoadingUser(false);
  }
  useEffect(()=>{
    if(!user){
      checkUserData();
    }
  },[user])
  const value = useMemo(()=>{
    return({user,logout,login,loadingUser,routes,Toast,colors})
  },[user,loadingUser])
  return <UserContext.Provider value={value} {...props}/>
}


export const useUser = ()=>{
  return React.useContext(UserContext);
}

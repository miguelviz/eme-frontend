import React,{useState} from "react";
import { useHistory } from 'react-router';
import {useUser} from "../../../Context/User";
import {Toast} from "../../../Utils/Toast";
import ReturnIcon from "../ReturnIcon";
import {FaArrowAltCircleDown,FaArrowCircleUp,FaUserAlt,FaHome} from "react-icons/fa";

const SidebarContentBody = (props)=>{
  const {rutas,close} = props;
  const {user,logout,colors} = useUser();
  const [selectedModule,setSelectedModule] = useState(null);
  const history = useHistory();
  const functionSelectedModule = (index)=>{
    if(index===selectedModule){
      setSelectedModule(null);
    }else{
      setSelectedModule(index);
    }
  }
  const navigate = (ruta,auth)=>{
    if(auth){
      history.push(ruta)
    }else{
      Toast("¡Acceso no autorizado!","error")
    }
  }
  return(
    <>
      <div style={{width:"100%",height:"100%"}}>
        <div style={{width:"100%",backgroundColor:colors.secondary,alignItems:"center"}}>
          <p onClick={()=>console.log(user)} style={{fontSize:15,fontWeight:"bold",color:colors.primary,textAlign:"center"}}>
            NAVEGACIÓN
          </p>
        </div>
        <div style={{width:"100%",padding:10,height:"100%"}}>
          <div className="fila" style={{cursor:"pointer"}} onClick={()=>navigate("/",true)}>
            <div className="columna" style={{width:"20%"}}>
              <FaHome style={{fontSize:15,color:"#fff"}} />
            </div>
            <div className="columna" style={{width:"80%"}}>
              <p style={{fontWeight:"bold",color:"#fff",fontSize:10}}>
                {user.user_type===1?"Inicio":"Configuración Inicial"}
              </p>
            </div>
          </div>
          {
            rutas.map((item,index)=>(
              <div key={index} style={{cursor:"pointer",marginTop:10}}>
                <div className="fila" onClick={()=>{functionSelectedModule(index)}}>
                  <div className="columna" style={{width:"10%"}}>
                    <ReturnIcon nameIcon={item.icon} marginTop={3} fontSize={15}/>
                  </div>
                  <div className="columna" style={{width:"80%"}}>
                    <p style={{fontWeight:"bold",color:"#fff",fontSize:13}}>
                      {item.name_module}
                    </p>
                  </div>
                  <div className="columna" style={{width:"10%"}}>
                    {
                      (index===selectedModule)? <FaArrowCircleUp style={{color:"#fff",marginTop:3}}/> : <FaArrowAltCircleDown style={{color:"#fff",marginTop:3}}/>
                    }
                  </div>
                </div>
                {
                  item.vistas.map((item2,index2)=>(
                    <div key={index2} style={{display:(index===selectedModule)?"block":"none",marginLeft:10}} onClick={()=>navigate("/"+item2.route,item2.auth)}>
                      <div className="fila">
                        <div className="columna" style={{width:"10%"}}>
                          <ReturnIcon nameIcon={item2.icon} fontSize={13} />
                        </div>
                        <div className="columna" style={{width:"80%"}}>
                          <p style={{fontWeight:"bold",color:"#fff",fontSize:10}}>
                            {item2.name_view}
                          </p>
                        </div>
                        <div className="columna" style={{width:"10%"}}>
                          {
                            (!item2.auth)?
                            <ReturnIcon nameIcon={"FaLock"} fontSize={13} color="#707070" /> : null
                          }
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </>
  )
}
export default SidebarContentBody;

import React from "react";
import {Const} from "../../../Utils/Constants";
import { useHistory } from 'react-router';
import {useUser} from "../../../Context/User";
import {useView} from "../../../Context/Page";
import { IoIosLogOut } from "react-icons/io";
import ReturnIcon from "../ReturnIcon";
import {Toast} from "../../../Utils/Toast";
import "./Navbar.css";
const Navbar = (props)=>{
  const {colors} = Const;
  const history = useHistory();
  const {user,logout,routes} = useUser();
  const {sidebar_status} = useView();
  const checkVisibility = ()=>{
    if(window.screen.width<=600){
      if(sidebar_status){
        return "hidden"
      }else{
        return "visible"
      }
    }else{
      return "visible"
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
    <div className="navbar" style={{paddingLeft:10}}>
      <div className="fila" style={{width:"100%"}}>
        <div className="columna" style={{width:"70%"}}>
          <div style={{display:"flex",flexDirection:"row"}}>
            <img onClick={()=>console.log(routes)} src={process.env.PUBLIC_URL + "/eme_logo_white.png"} style={{width:120,height:40}}/>
            {
              routes.map((item,index)=>(
                <div className="dropdown" style={{cursor:"pointer"}} >
                  <div className="sizeable">
                    <ReturnIcon nameIcon={item.icon} marginTop={5} fontSize={25} style={{marginLeft:20}} />
                  </div>
                  <div class="dropdown-content">
                    <div className="d-flex justify-content-center">
                      <span style={{color:"white",fontSize:10,fontWeight:"bold"}}>{item.name_module}</span>
                    </div>
                    {
                      
                      item.vistas.map((view,index_view)=>(
                        <div className="minisizeable" style={{marginTop:index_view>0?0:10}}>
                          <div className="fila" onClick={()=>navigate("/"+view.route,view.auth)}>
                            <div className="columna" style={{width:"20%"}}>
                              <ReturnIcon nameIcon={view.icon} fontSize={18} />
                            </div>
                            <div className="columna" style={{width:"70%"}}>
                              <p style={{fontWeight:"bold",color:"#fff",fontSize:15}}>
                                {view.name_view}
                              </p>
                            </div>
                            <div className="columna" style={{width:"10%"}}>
                              {
                                (!view.auth)?
                                <ReturnIcon nameIcon={"FaLock"} fontSize={13} color="#707070" /> : null
                              }
                            </div>
                          </div>
                        </div>
                      )) 
                    }
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className="columna d-flex justify-content-end" style={{width:"30%",visibility:checkVisibility()}}>
          <div className="fila d-flex justify-content-end" >
            <div className="columna" style={{paddingLeft:5,paddingRight:5}}>
              <img src={user.image||"https://www.aguayodevs.com/user_profile.png"} className="imageNavbarUser" alt="logo"/>
            </div>
            <div className="columna" style={{paddingLeft:5,paddingRight:5}}>
              <div>
                <p style={{color:"#fff",fontWeight:"bold",fontSize:9}}>
                  {user.names}
                </p>
                <br />
                <p style={{color:"#fff",fontWeight:"bold",fontSize:9,marginTop:-40}}>
                  {user.name_type}
                </p>
                <br />
                <p style={{color:"#fff",fontWeight:"bold",fontSize:9,marginTop:-40}}>
                  {user.email}
                </p>
              </div>
            </div>
            <div className="columna" style={{paddingLeft:5,paddingRight:5}}>
              <IoIosLogOut onClick={logout} style={{color:"#fff",fontSize:40,cursor:"pointer"}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Navbar;

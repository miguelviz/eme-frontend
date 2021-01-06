import React,{useState} from "react";
import Button from "../../../../Principal/Button";
import {useModal} from "../../../../Principal/Modal/Context";
import {useUser} from "../../../../../Context/User";
import {useComponent} from "../../../../../Context/Component/Context";
import {REQUEST} from "../../../../../Utils/Constants";
import {Toast} from "../../../../../Utils/Toast";
//import PermissionComponent from "./PermissionComponent";
const PermissionList = ()=>{
  const {data,searchData} = useComponent();
  const {user} = useUser();
  const modalData = useModal();
  const id_user = modalData.data.userInfo.id_user;
  const {permissions} = data;
  const [loadingBtn,setLoadingBtn] = useState(false);
  const changePermission = async(permit)=>{
    let r = await REQUEST("admin",{type:"changePermission",permit,id_user,user}).catch(e=>{
      Toast("Error al conectar al servidor.","error");
    })
    if(r){
      if(r.error){
        Toast(r.error,"error")
      }else{
        Toast("Permiso actualizado exitosamente","info");
        searchData()
      }
    }
  }
  return(
    <>
      <table className="table table-hover">
        <thead>
          <tr align="center">
            <th style={{width:"33%"}}>
              ID Permiso
            </th>
            <th style={{width:"33%"}}>
              Permiso
            </th>
            <th style={{width:"33%"}}>
              Autorizar / Remover
            </th>
          </tr>
        </thead>
        <tbody>
          {
            permissions.map((item,index)=>(
              <tr key={index} align="center">
                <td>
                  {
                    item.id_permit
                  }
                </td>
                <td>
                  {
                    item.name_permit
                  }
                </td>
                <td>
                  <Button type={item.permit?"danger":"success"} label={item.permit?"Remover":"Autorizar"} loader={loadingBtn} execute={()=>changePermission(item)}/>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}
export default PermissionList;

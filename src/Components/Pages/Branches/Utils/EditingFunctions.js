import React,{useState} from "react";
import {Toast} from "../../../../Utils/Toast";
import {Const} from "../../../../Utils/Constants";
import {REQUEST} from "../../../../Utils/Constants";
import { useModal } from "../../../Principal/Modal/Context";
import Loader from 'react-loader-spinner';
import Select from "../../../Principal/Select";

const returnItemValue = (items,value)=>{
    let val = items.filter(item=>item.value===value);
    return val[0];
}

export const EditStatusComponent = (props)=>{
    const {items,value,auth,id_apartment} = props;
    const [val,setVal] = useState(returnItemValue(items,value));
    const [requesting,setRequesting] = useState(false);

    const changeStatus = async(item)=>{
        if(auth){
            setRequesting(true);
            let postData = {camp:"apartment_status",value:item.value,id_apartment,type:"updateApartmentData"};
            let r = await REQUEST("apartments",postData).catch(e=>{
              Toast("Error al conectar al servidor","error");
              setRequesting(false);
            })
            if(r){
              if(r.error){
                Toast(r.error,"error");
              }else{
                Toast("Estatus actualizado exitosamente","info");
                setVal(item)
              }
              setRequesting(false);
            }
        }else{
            Toast("Acceso no autorizado!","error");
        }
    }

    return(
        <>
        {
            requesting ? 
            <Loader
                type={Const.loader}
                color={Const.colors.primary}
                height={20}
                width={20}
                visible={true}
            /> : 
            <Select items={items} val={val} setVal={changeStatus} placeholder="Estatus"/>
        }
        </>
    )
}
export const EditTypeComponent = (props)=>{
    const {items,value,auth,id_apartment} = props;
    const [val,setVal] = useState(returnItemValue(items,value));
    const [requesting,setRequesting] = useState(false);
    const {searchData} = useModal()

    const changeType = async(item)=>{
        if(auth){
            setRequesting(true);
            let postData = {camp:"apartment_list_room",value:item.value,id_apartment,type:"updateApartmentData"};
            let r = await REQUEST("apartments",postData).catch(e=>{
              Toast("Error al conectar al servidor","error");
              setRequesting(false);
            })
            if(r){
              if(r.error){
                Toast(r.error,"error");
              }else{
                Toast("Tipo de apartamento actualizado exitosamente","info");
                setVal(item)
                searchData();
              }
              setRequesting(false);
            }
        }else{
            Toast("Acceso no autorizado!","error");
        }
    }

    return(
        <>
        {
            requesting ? 
            <Loader
                type={Const.loader}
                color={Const.colors.primary}
                height={20}
                width={20}
                visible={true}
            /> : 
            <Select items={items} val={val} setVal={changeType} placeholder="Tipo"/>
        }
        </>
    )
}
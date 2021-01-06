import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import { useModal } from "../../../Principal/Modal/Context";


const ListApartments = (props)=>{
    const {data} = useModal();
    const {users} = data;


    return(
        <>
            {
                users.length>0?
                <>
                    <div className="table-responsive" style={{height:300,overflowY:"auto"}}>
                        <table className="table table-hover">
                            <thead>
                                <tr align="center">
                                    <th style={{width:"20%"}}>Nombres</th>
                                    <th style={{width:"20%"}}>Apellidos</th>
                                    <th style={{width:"20%"}}>Correo electrónico</th>
                                    <th style={{width:"20%"}}>Puesto</th>
                                    <th style={{width:"20%"}}>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.length>0?
                                    users.map((item,index)=>(
                                    <tr align="center" key={index}>
                                        <td>
                                            {item.names}
                                        </td>
                                        <td>
                                            {item.second_names}
                                        </td>
                                        <td>
                                            {item.email}
                                        </td>
                                        <td>
                                            {item.name_job}
                                        </td>
                                        <td>
                                            {item.name_status}
                                        </td>
                                    </tr> 
                                    )) : 
                                    <tr align="center">
                                        <td colSpan="5">
                                            No existen empleados en esta sucursal.
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </> : 
                <div className="d-flex justify-content-center p-5">
                    <p style={{fontWeight:"bold"}} >
                        Aun no se han creado empleados
                    </p>
                </div>
            }
        </>
    )
}
export default ListApartments;
const returnFloors = (min,max)=>{
    let flrs = [];
    for (let i = min; i <= max; i++) {
        flrs.push({value:i,label:i===0?"Planta baja":i});
    }
    return flrs;
}

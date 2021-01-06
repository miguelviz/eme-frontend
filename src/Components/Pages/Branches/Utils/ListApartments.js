import React,{useState} from "react";
import {Row,Col} from "react-bootstrap";
import { useModal } from "../../../Principal/Modal/Context";
import Select from "../../../Principal/Select";
import EditableInput from "../../../Principal/EditableInput";
import Input from "../../../Principal/Input";
import {EditStatusComponent,EditTypeComponent} from "./EditingFunctions";


const ListApartments = (props)=>{
    const {data,searchData} = useModal();
    const {apartments,branchData,statusList,listRooms,changeStatusPermission} = data;
    const [floors] = useState(returnFloors(branchData.min_floor,branchData.max_floor));
    const [selectedFloor,setSelectedFloor] = useState(null);
    const [search,setSearch] = useState("");


    const returnFilteredApartments = ()=>{
        if(selectedFloor){
            return apartments.filter(item=>selectedFloor.value===item.floor).filter(item=>item.name_apartment.toLowerCase().indexOf(search.toLowerCase())!==-1)
        }else{
            return apartments.filter(
                item=>item.name_apartment.toLowerCase().indexOf(search.toLowerCase())!==-1
            );
        }
    }
    const returnColorStatus = (status)=>{
        if(status===1){
            return "green";
        }else{
            if(status===2){
                return "cyan";
            }else{
                return "red";
            }
        }
    }
    return(
        <>
            {
                apartments.length>0?
                <>
                    <Row>
                        <Col sm="8">
                            <Input value={search} onChange={setSearch} placeholder="Nombre / Numero" />
                        </Col>
                        <Col sm="4">
                            <Select items={floors} val={selectedFloor} setVal={setSelectedFloor} placeholder="No. piso" />
                        </Col>
                    </Row>
                    <div className="table-responsive" style={{height:300,overflowY:"auto"}}>
                        <table className="table table-hover">
                            <thead>
                                <tr align="center">
                                    <th style={{width:"30%"}}>Nombre / Numero</th>
                                    <th style={{width:"20%"}}>Tipo</th>
                                    <th style={{width:"15%"}}>Recamaras</th>
                                    <th style={{width:"15%"}}>Baños</th>
                                    <th style={{width:"20%"}}>Estatus</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    returnFilteredApartments().length>0?
                                    returnFilteredApartments().map((item,index)=>(
                                        <tr align="center" key={index}>
                                            <td>
                                                    <Input value={item.name_apartment} disabled={true} />
                                            </td>
                                            <td>
                                                <EditTypeComponent id_apartment={item.id_apartment} value={item.id_list_room} items={listRooms} auth={changeStatusPermission} />
                                            </td>
                                            <td>{item.bedrooms}</td>
                                            <td>{item.bathrooms}</td>
                                            <td>
                                                <EditStatusComponent id_apartment={item.id_apartment} value={item.id_status} items={statusList} auth={changeStatusPermission} />
                                            </td>
                                        </tr>
                                    )) : 
                                    <tr align="center">
                                        <td colSpan="5">
                                            No se encontraron apartamentos.
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </> : 
                <div className="d-flex justify-content-center p-5">
                    <p style={{fontWeight:"bold"}} >
                        Aun no se han creado apartamentos
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

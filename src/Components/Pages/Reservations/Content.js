import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap"; 
import {useUser} from "../../../Context/User";
import {useView} from "../../../Context/Page";
import Select from "../../Principal/Select";
import Input from "../../Principal/Input";
import Modal from "../../Principal/Modal";
import Card from "../../Principal/Card";
import ContentCard from "./Utils/ContentCard";
import ContentModalInfo from "./Utils/ContentModalInfo";
import ContentModalAsign from "./Utils/ContentModalAsign";
import ContentModalClient from "./Utils/ContentModalClient";

const Content = ()=>{
  const {data,searchData} = useView();
  const {user} = useUser();
  const {apartments,floors,apartment_types} = data;
  const [selectedItem,setSelectedItem] = useState(null);
  const [selectedFloor,setSelectedFloor] = useState(floors[0]);
  const [selectedType,setSelectedType] = useState(null);
  const [modalInfo,setModalInfo] = useState(false);
  const [modalAsign,setModalAsign] = useState(false);
  const [modalClient,setModalClient] = useState(false);
  const [search,setSearch] = useState("");
  const handleShowModalClient = (item)=>{
    setSelectedItem(item);
    setModalClient(true);
  }
  const handleHideModalClient = ()=>{
    setSelectedItem(null);
    setModalClient(false);
    searchData();
  }
  const handleShowModalAsign = (item)=>{
    setSelectedItem(item);
    setModalAsign(true);
  }
  const handleHideModalAsign = ()=>{
    setSelectedItem(null);
    setModalAsign(false);
    searchData();
  }
  const handleShowModalInfo = (item)=>{
    setSelectedItem(item);
    setModalInfo(true);
  }
  const handleHideModalInfo = ()=>{
    setSelectedItem(null);
    setModalInfo(false);
  }
  const filter = ()=>{
    if(!selectedType&&!search){
      return apartments.filter(item=>item.floor === selectedFloor.value);
    }else{
      if(selectedType){
        if(search===""){
          return apartments.filter(item=>(item.floor===selectedFloor.value&&item.id_list_room === selectedType.value))
        }else{
          return apartments.filter(item=>(item.floor===selectedFloor.value&&item.id_list_room === selectedType.value&&item.name_apartment.toLowerCase().indexOf(search.toLowerCase())!==-1))
        }
      }else{
        return apartments.filter(item=>(item.floor === selectedFloor.value&&item.name_apartment.toLowerCase().indexOf(search.toLowerCase())!==-1));
      }
    }
  }
  return(
    <div className="modelDiv">
      {
        selectedItem ?
          <>
            <Modal size={"xl"}
              title={"Información de "+selectedItem.name_apartment}
              visible={modalInfo}
              handleHide={handleHideModalInfo}
              Content={()=><ContentModalInfo userInfo={selectedItem} />}
              url="reservations" 
              postData={{id:selectedItem.id_apartment,type:"getApartmentData",user}}
            />
            <Modal size={"xl"}
              title={"Asignar cliente a "+selectedItem.name_apartment}
              visible={modalAsign}
              handleHide={handleHideModalAsign}
              Content={()=><ContentModalAsign cancel={handleHideModalAsign} />}
              url="reservations" 
              postData={{id:selectedItem.id_apartment,type:"getApartmentData",user}}
            />
            <Modal size={"xl"}
              title={"Información de cliente "+selectedItem.name_apartment}
              visible={modalClient}
              handleHide={handleHideModalClient}
              Content={()=><ContentModalClient cancel={handleHideModalClient} />}
              url="reservations" 
              postData={{id:selectedItem.id_apartment,type:"getApartmentClient",user}}
            />
          </>
        : null
      }
      <Row>
        <Col sm="4">
          <Select items={floors} val={selectedFloor} setVal={setSelectedFloor} placeholder="Filtrar por piso" />
        </Col>
        <Col sm="4">
          <Select items={apartment_types} val={selectedType} setVal={setSelectedType} placeholder="Filtrar tipo de apartamento" />
        </Col>
        <Col sm="4">
          <Input value={search} onChange={setSearch} placeholder="Nombre / Número" cls="minisizeable" />
        </Col>
      </Row>
      <Container>
        <Row>
          {
            
            filter().map((item,index)=>(
              <Col sm="3" key={index}>
                <Card Content={()=><ContentCard item={item} handleShowModalClient={handleShowModalClient} handleShowModalInfo={handleShowModalInfo} handleShowModalAsign={handleShowModalAsign} />}/>
              </Col>
            ))
            
          }
        </Row>
      </Container>
    </div>
  )
}

export default Content;

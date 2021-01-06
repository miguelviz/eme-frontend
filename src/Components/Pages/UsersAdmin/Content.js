import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import {useView} from "../../../Context/Page";
import Card from "../../Principal/Card";
import ContentCard from "./Utils/ContentCard";
import IconButton from "../../Principal/IconButton";
import Input from "../../Principal/Input";
import Modal from "../../Principal/Modal";
import ModalUserAdmin from "./Utils/ModalUserAdmin";
import CreateAdmin from "./Utils/CreateAdmin";
const Content = ()=>{
  const {data,searchData} = useView();
  const {admins} = data;
  const [search,setSearch] = useState("");
  const [visibleModal,setVisibleModal] = useState(false);
  const [visibleModalAdd,setVisibleModalAdd] = useState(false);
  const [selectedItem,setSelectedItem] = useState(null);
  const handleHideModalAdd = ()=>{
    setVisibleModalAdd(false);
    searchData();
  }
  const handleShowModalAdd = ()=>setVisibleModalAdd(true);
  const handleShowModal = (item)=>{
    setSelectedItem(item);
    setVisibleModal(true);
  }
  const handleHideModal = ()=>{
    setVisibleModal(false);
    setTimeout(()=>{
      setSelectedItem(null)
      searchData();
    },500)
  }
  const filterAdmins = ()=>{
    if(!search){
      return admins;
    }else{
      return admins.filter(item=>(item.email.toLowerCase().indexOf(search.toLowerCase())!==-1)||(item.names.toLowerCase().indexOf(search)!==-1)||(item.second_names.toLowerCase().indexOf(search)!==-1))
    }
  }
  return(
    <div className="modelDiv">
      {
        selectedItem ?
        <Modal size={"xl"} title={selectedItem.names} visible={visibleModal} handleHide={handleHideModal} Content={()=><ModalUserAdmin userInfo={selectedItem} />} url="admin" postData={{id:selectedItem.id_user,type:"searchAdminData"}} />
        : null
      }
      <Modal size={"xl"} title={"Crear Administrador"} visible={visibleModalAdd} handleHide={handleHideModalAdd} Content={()=><CreateAdmin cancel={handleHideModalAdd} />} url={null} postData={{}} />
      <Row>
        <Col sm="1">
          <IconButton icon="FaPlus" type="success" execute={handleShowModalAdd} title="Crear administrador" />
        </Col>
        <Col sm="8"></Col>
        <Col sm="3">
          <Input value={search} onChange={setSearch} placeholder="Buscar" cls="minisizeable" />
        </Col>
      </Row>
      <Container>
        <Row>
          {
            filterAdmins().map((item,index)=>(
              <Col sm="6" md="4" xl="3" lg="3" key={index}>
                <Card onClick={()=>handleShowModal(item)} sizeable={true} Content={()=><ContentCard userData={item} />}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Content;

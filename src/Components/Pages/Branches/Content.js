import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import {useView} from "../../../Context/Page";
import {useUser} from "../../../Context/User";
import IconButton from "../../Principal/IconButton";
import Card from "../../Principal/Card";
import Input from "../../Principal/Input";
import Select from "../../Principal/Select";
import ContentCard from "./Utils/ContentCard";
import Modal from "../../Principal/Modal";
import ContentModalInfo from "./Utils/ContentModalInfo";
import ContentModalCreate from "./Utils/ContentModalCreate";
import ContentModalApartments from "./Utils/ContentModalApartments";
import ContentModalUsers from "./Utils/ContentModalUsers";
const Content = ()=>{
  const {data,searchData} = useView();
  const {companies} = data;
  const {user} = useUser();
  const [search,setSearch] = useState("");
  const [selectedItem,setSelectedItem] = useState(null);
  const [modalInfo,setModalInfo] = useState(false);
  const [modalCreate,setModalCreate] = useState(false);
  const [modalApartments,setModalApartments] = useState(false);
  const [modalUsers,setModalUsers] = useState(false);
  const [selectedCompany,setSelectedCompany] = useState(companies[0]);
  const handleHideModalUsers = ()=>{
    setModalUsers(false);
    setSelectedItem(null)
  }
  const handleShowModalUsers = (item)=>{
    setSelectedItem(item)
    setModalUsers(true);
  }
  const handleHideModalApartments = ()=>{
    setModalApartments(false);
    setSelectedItem(null)
  }
  const handleShowModalApartments = (item)=>{
    setSelectedItem(item)
    setModalApartments(true);
  }
  const handleHideModalCreate = ()=>{
    setModalCreate(false);
    searchData();
  }
  const handleShowModalCreate = ()=>{
    setModalCreate(true)
  }
  const handleHideModalInfo = ()=>{
    setModalInfo(false);
    setSelectedItem(null)
    searchData();
  }
  const handleShowModalInfo = (item)=>{
    setSelectedItem(item)
    setModalInfo(true)
  }
  const returnIndexCompany = ()=>{
    let index = 0;
    for (let i = 0; i < companies.length; i++) {
      const element = companies[i];
      if(element.id_company===selectedCompany.id_company){
        index = i;
      }
    }
    return index
  }
  const filterBranches = ()=>{
    let index_company = returnIndexCompany()
    if(!search){
      return companies[index_company].branches;
    }else{
      return companies[index_company].branches.filter(item=>(item.name_branch.toLowerCase().indexOf(search.toLowerCase())!==-1))
    }
  }
  return(
    <div className="modelDiv">
      {
        selectedItem ?
        <>
          <Modal size={"xl"}
            title={selectedItem.name_branch}
            visible={modalInfo}
            handleHide={handleHideModalInfo}
            url={"master-data"}
            postData={{id_branch:selectedItem.id_branch,user,type:"getBranchData"}}
            Content={()=><ContentModalInfo userInfo={selectedItem} />}
          />
          <Modal size={"xl"}
            title={"Apartamentos "+selectedItem.name_branch}
            visible={modalApartments}
            handleHide={handleHideModalApartments}
            url={"apartments"}
            postData={{id_branch:selectedItem.id_branch,user,type:"getApartments"}}
            Content={()=><ContentModalApartments cancel={handleHideModalApartments}/>}
          />
          <Modal size={"xl"}
            title={"Empleados de "+selectedItem.name_branch}
            visible={modalUsers}
            handleHide={handleHideModalUsers}
            url={"master-data"}
            postData={{id_branch:selectedItem.id_branch,user,type:"getBranchUsers"}}
            Content={()=><ContentModalUsers cancel={handleHideModalUsers}/>}
          />
        </>
        : null
      }
      <Modal size={"lg"}
        title={"Crear sucursal en "+selectedCompany.name_company}
        visible={modalCreate}
        handleHide={handleHideModalCreate}
        url={null}
        postData={{}}
        Content={()=><ContentModalCreate cancel={handleHideModalCreate} id_company={selectedCompany.id_company} />}
      />
      <Row>
        <Col sm="1">
          <IconButton icon="FaPlus" type="success" execute={handleShowModalCreate} title="Crear Sucursal" />
        </Col>
        <Col sm="5"></Col>
        <Col sm="3">
        <Select items={companies} val={selectedCompany} setVal={setSelectedCompany} placeholder="Tipo de apartamento" />
        </Col>
        <Col sm="3">
          <Input value={search} onChange={setSearch} placeholder="Buscar" cls="minisizeable" />
        </Col>
      </Row>
      <Container>
        <Row>
          {
            filterBranches().map((item,index)=>(
              <Col sm="3" key={index}>
                <Card Content={()=><ContentCard branch={item} handleShowModalApartments={handleShowModalApartments} handleShowModalUsers={handleShowModalUsers} handleShowModalInfo={handleShowModalInfo} />}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Content;

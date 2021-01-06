import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import {useView} from "../../../Context/Page";
import {useUser} from "../../../Context/User";
import IconButton from "../../Principal/IconButton";
import Card from "../../Principal/Card";
import Input from "../../Principal/Input";
import ContentCard from "./Utils/ContentCard";
import Modal from "../../Principal/Modal";
import ContentModalInfo from "./Utils/ContentModalInfo";
import ContentModalCreate from "./Utils/ContentModalCreate";
const Content = ()=>{
  const {data,searchData} = useView();
  const {jobs} = data;
  const {user} = useUser();
  const [search,setSearch] = useState("");
  const [selectedItem,setSelectedItem] = useState(null);
  const [modalInfo,setModalInfo] = useState(false);
  const [modalCreate,setModalCreate] = useState(false);
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
  const filterJobs = ()=>{
    if(!search){
      return jobs;
    }else{
      return jobs.filter(item=>(item.name_job.toLowerCase().indexOf(search.toLowerCase())!==-1))
    }
  }
  return(
    <div className="modelDiv">
      {
        selectedItem ?
          <Modal size={"xl"}
            title={selectedItem.name_job}
            visible={modalInfo}
            handleHide={handleHideModalInfo}
            Content={()=><ContentModalInfo userInfo={selectedItem} />}
            url="master-data" 
            postData={{id:selectedItem.id_job,type:"getJobData",user}}
          />
        : null
      }
      <Modal size={"xl"}
        title={"Crear Puesto"}
        visible={modalCreate}
        handleHide={handleHideModalCreate}
        url={null}
        postData={{}}
        Content={()=><ContentModalCreate cancel={handleHideModalCreate}/>}
      />
      <Row>
        <Col sm="1">
          <IconButton icon="FaPlus" type="success" execute={handleShowModalCreate} title="Crear Puesto" />
        </Col>
        <Col sm="8"></Col>
        <Col sm="3">
          <Input value={search} onChange={setSearch} placeholder="Buscar" cls="minisizeable" />
        </Col>
      </Row>
      <Container>
        <Row>
          {
            filterJobs().map((item,index)=>(
              <Col sm="3" key={index}>
                <Card onClick={()=>handleShowModalInfo(item)} sizeable={true} Content={()=><ContentCard jobData={item} />}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Content;
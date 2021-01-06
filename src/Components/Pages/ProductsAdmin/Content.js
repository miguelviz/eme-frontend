import React,{useState} from "react";
import {Row,Col,Container} from "react-bootstrap";
import {useView} from "../../../Context/Page";
import IconButton from "../../Principal/IconButton";
import Card from "../../Principal/Card";
import Input from "../../Principal/Input";
import ContentCard from "./Utils/ContentCard";
import Modal from "../../Principal/Modal";
import ContentModalInfo from "./Utils/ContentModalInfo";
import ContentModalCreate from "./Utils/ContentModalCreate";
const Content = ()=>{
  const {data,searchData} = useView();
  const {products} = data;
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
    searchData();
  }
  const handleShowModalInfo = ()=>{
    setModalInfo(true)
  }
  const filterProducts = ()=>{
    if(!search){
      return products;
    }else{
      return products.filter(item=>(item.name_product.toLowerCase().indexOf(search.toLowerCase())!==-1))
    }
  }
  return(
    <div className="modelDiv">
      {
        selectedItem ?
          <Modal size={"xl"}
            title={selectedItem.name_branch}
            visible={modalInfo}
            handleHide={handleHideModalInfo}
            url={null}
            postData={{}}
            Content={()=><ContentModalInfo userInfo={selectedItem} />}
          />
        : null
      }
      <Modal size={"xl"}
        title={"Crear Producto"}
        visible={modalCreate}
        handleHide={handleHideModalCreate}
        url={null}
        postData={{}}
        Content={()=><ContentModalCreate cancel={handleHideModalCreate}/>}
      />
      <Row>
        <Col sm="1">
          <IconButton icon="FaPlus" type="success" execute={handleShowModalCreate} title="Crear Producto" />
        </Col>
        <Col sm="8"></Col>
        <Col sm="3">
          <Input value={search} onChange={setSearch} placeholder="Buscar" cls="minisizeable" />
        </Col>
      </Row>
      <Container>
        <Row>
          {
            filterProducts().map((item,index)=>(
              <Col sm="3" key={index}>
                <Card Content={()=><ContentCard productData={item} />}/>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default Content;

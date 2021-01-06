import React from "react";
import {Row,Col} from "react-bootstrap";
import EditableInput from "../../../../Principal/EditableInput";
import ReturnIcon from "../../../../Principal/ReturnIcon";
import {useModal} from "../../../../Principal/Modal/Context";
import {useUser} from "../../../../../Context/User";
import {Const} from "../../../../../Utils/Constants";

const ContentInfo = (props)=>{
  const {data,searchData} = useModal();
  const {clientData} = data;
  const {colors} = Const;
  const {user} = useUser();
  const checkMail = (email)=>{
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (reg.test(email)) {
      return null;
    }else{
      return "Formato de correo electrónico inválido";
    }
  }
  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="3" className="d-flex justify-content-center">
          <ReturnIcon nameIcon={"FaUserAlt"} fontSize={150} color={colors.secondary} />
        </Col>
        <Col sm="9">
          <EditableInput
            initialValue={clientData.names}
            label="Nombre(s)"
            url={"reservations"}
            requireInfo={{camp:"names",type:"updateClientInfo",id_client:clientData.id_client,user}}
            searchData={searchData}
          />
          <EditableInput
            initialValue={clientData.second_names}
            label="Apellido(s)"
            url={"reservations"}
            requireInfo={{camp:"second_names",type:"updateClientInfo",id_client:clientData.id_client,user}}
            searchData={searchData}
          />
        </Col>
      </Row>
      <Row>
        <Col sm="6">
          <EditableInput
            initialValue={clientData.email}
            label="Correo electrónico"
            url={"reservations"}
            requireInfo={{camp:"email",type:"updateClientInfo",id_client:clientData.id_client,user}}
            searchData={searchData}
          />
        </Col>
        <Col sm="6">
          <EditableInput
            initialValue={clientData.telephone}
            label="Número de teléfono"
            url={"reservations"}
            requireInfo={{camp:"telephone",type:"updateClientInfo",id_client:clientData.id_client,user}}
            searchData={searchData}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ContentInfo;

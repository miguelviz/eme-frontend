import React from "react";
import {Row,Col} from "react-bootstrap";
import EditableInput from "../../../../Principal/EditableInput";
import {useModal} from "../../../../Principal/Modal/Context";
import {useUser} from "../../../../../Context/User";

const ContentInfo = (props)=>{
  const {data,searchData} = useModal();
  const {userInfo} = data;
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
        <Col sm="4">
          <img src={userInfo.image||"https://www.aguayodevs.com/user_profile.png"} alt="" className="imageUserCard" />
        </Col>
        <Col sm="8">
          <EditableInput
            initialValue={userInfo.names}
            label="Nombre(s)"
            url={"admin"}
            requireInfo={{camp:"names",type:"updateUserInfo",id:userInfo.id_user,user}}
            searchData={searchData}
          />
          <EditableInput
            initialValue={userInfo.second_names}
            label="Apellido(s)"
            url={"admin"}
            requireInfo={{camp:"second_names",type:"updateUserInfo",id:userInfo.id_user,user}}
            searchData={searchData}
          />
          <EditableInput
            initialValue={userInfo.email}
            label="Correo electrónico"
            url={"admin"}
            requireInfo={{camp:"email",type:"updateUserInfo",id:userInfo.id_user,user}}
            searchData={searchData}
            errorMsg={checkMail}
          />
        </Col>
      </Row>
    </div>
  )
}
export default ContentInfo;

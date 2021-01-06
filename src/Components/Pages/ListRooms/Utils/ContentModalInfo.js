import React from "react";
import {Row,Col} from "react-bootstrap";
import EditableInput from "../../../Principal/EditableInput";
import ReturnIcon from "../../../Principal/ReturnIcon";
import {useModal} from "../../../Principal/Modal/Context";
import {useUser} from "../../../../Context/User";
import {Const} from "../../../../Utils/Constants";
import EditableNumber from "../../../Principal/EditableNumber";

const ContentInfo = (props)=>{
  const {data,searchData} = useModal();
  const {listRoomData} = data;
  const {colors} = Const;
  const {user} = useUser();

  return(
    <div style={{width:"100%",padding:20}}>
      <Row>
        <Col sm="3" className="d-flex justify-content-center">
          <ReturnIcon nameIcon={"FaBed"} fontSize={200} color={colors.secondary} style={{marginTop:20}} />
        </Col>
        <Col sm="9">
        <EditableInput
            initialValue={listRoomData.name_list_room}
            label="Nombre"
            url={"apartments"}
            requireInfo={{camp:"name_list_room",type:"updateListRoomInfo",id_list_room:listRoomData.id_list_room,user}}
            searchData={searchData}
        />
        <EditableNumber
            initialValue={listRoomData.bedrooms}
            label="Habitaciones"
            url={"apartments"}
            requireInfo={{camp:"bedrooms",type:"updateListRoomInfo",id_list_room:listRoomData.id_list_room,user}}
            searchData={searchData}
            min
        />
        <EditableNumber
            initialValue={listRoomData.bathrooms}
            label="Baños"
            url={"apartments"}
            requireInfo={{camp:"bedrooms",type:"updateListRoomInfo",id_list_room:listRoomData.id_list_room,user}}
            searchData={searchData}
            min
        />
        </Col>
      </Row>
    </div>
  )
}
export default ContentInfo;
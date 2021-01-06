import React from "react";
import {Row,Col} from "react-bootstrap";
import { useModal } from "../../../Principal/Modal/Context";
import {Const} from "../../../../Utils/Constants";
import { useUser } from "../../../../Context/User";
import EditableInput from "../../../Principal/EditableInput";
import EditableNumber from "../../../Principal/EditableNumber";
import ReturnIcon from "../../../Principal/ReturnIcon";
const ContentInfo = (props)=>{
  const {data,searchData} = useModal();
  const {branchData} = data;
  const {colors} = Const;
  const { user } = useUser();
  return(
    <>
      <Row>
        <Col sm="3" className="d-flex justify-content-center">
          <ReturnIcon nameIcon={"FaBuilding"} fontSize={200} color={colors.secondary} style={{marginTop:20}} />
        </Col>
        <Col sm="9">
          <EditableInput
              initialValue={branchData.name_branch}
              label="Nombre"
              url={"master-data"}
              requireInfo={{camp:"name_branch",type:"updateBranchInfo",id_branch:branchData.id_branch,user}}
              searchData={searchData}
            />
            <EditableNumber 
              initialValue={branchData.min_floor}
              label="Piso Minimo"
              url={"master-data"}
              requireInfo={{camp:"min_floor",type:"updateBranchInfo",id_branch:branchData.id_branch,user}}
              searchData={searchData}
            />
            <EditableNumber 
              initialValue={branchData.max_floor}
              label="Piso Maximo"
              url={"master-data"}
              requireInfo={{camp:"max_floor",type:"updateBranchInfo",id_branch:branchData.id_branch,user}}
              searchData={searchData}
            />
        </Col>
      </Row>
    </>
  )
}
export default ContentInfo;

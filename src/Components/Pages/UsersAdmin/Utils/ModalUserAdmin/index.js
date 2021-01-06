import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentInfo from "./ContentInfo";
import ContentPermission from "./ContentPermission";
import ContextComponent from "../../../../../Context/Component";
import {useModal} from "../../../../Principal/Modal/Context";
const ModalUserAdmin = (props)=>{
  const {data} = useModal();
  const {userInfo} = data;
  return(
    <>
    <Tabs>
      <TabList>
        <Tab>Información</Tab>
        <Tab>Permisos</Tab>
      </TabList>
      <TabPanel>
        <ContentInfo />
      </TabPanel>
      <TabPanel>
        <ContentPermission />
      </TabPanel>
    </Tabs>
    </>
  )
}
export default ModalUserAdmin;

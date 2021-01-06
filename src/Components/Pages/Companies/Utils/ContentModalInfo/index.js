import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentInfo from "./ContentInfo";
import ContentPermission from "./ContentPermission";
import ContextComponent from "../../../../../Context/Component";
import {useModal} from "../../../../Principal/Modal/Context";
const ModalUserAdmin = (props)=>{
  const {data} = useModal();
  return(
    <>
    <Tabs>
      <TabList>
        <Tab>Información</Tab>
      </TabList>
      <TabPanel>
        <ContentInfo />
      </TabPanel>
    </Tabs>
    </>
  )
}
export default ModalUserAdmin;

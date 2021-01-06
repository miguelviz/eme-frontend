import React, {useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentInfo from "./ContentInfo";
const ModalUserAdmin = (props)=>{
  return(
    <>
    <Tabs>
      <TabList>
        <Tab>Información del cliente</Tab>
      </TabList>
      <TabPanel>
        <ContentInfo />
      </TabPanel>
    </Tabs>
    </>
  )
}
export default ModalUserAdmin;

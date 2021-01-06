import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentInfo from "./ContentInfo";
import ContentUbication from "./ContentUbication";

const ContentModalInfo = (props)=>{
  return(
    <>
      <Tabs>
        <TabList>
          <Tab>Información</Tab>
          <Tab>Ubicación</Tab>
        </TabList>
        <TabPanel>
          <ContentInfo />
        </TabPanel>
        <TabPanel>
          <ContentUbication />
        </TabPanel>
      </Tabs>
    </>
  )
}
export default ContentModalInfo;

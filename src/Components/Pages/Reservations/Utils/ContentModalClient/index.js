import React,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentClient from "./ContentClient";
import CreateReport from "./CreateReport";

const Content = (props)=>{
    const {cancel} = props;

    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>Datos de cliente</Tab>
                    <Tab>Crear reporte</Tab>
                </TabList>
                <TabPanel>
                    <ContentClient />
                </TabPanel>
                <TabPanel>
                    <CreateReport cancel={cancel} />
                </TabPanel>
            </Tabs>
        </>
    )
}
export default Content;
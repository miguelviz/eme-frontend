import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ListApartments from "./ListApartments";
import CreateApartment from "./CreateApartment";


const ContentModalApartments = (props)=>{
    const {cancel} = props;
    return(
        <Tabs>
            <TabList>
                <Tab>Listado</Tab>
                <Tab>Crear Apartamento</Tab>
            </TabList>
            <TabPanel>
                <ListApartments />
            </TabPanel>
            <TabPanel>
                <CreateApartment cancel={cancel} />
            </TabPanel>
        </Tabs>
    )
}
export default ContentModalApartments;
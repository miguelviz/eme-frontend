import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ListUsers from "./ListUsers";
import CreateUser from "./CreateUser";



const ContentModalApartments = (props)=>{
    const {cancel} = props;
    return(
        <Tabs>
            <TabList>
                <Tab>Empleados</Tab>
                <Tab>Crear Empleado</Tab>
            </TabList>
            <TabPanel>
                <ListUsers />
            </TabPanel>
            <TabPanel>
                <CreateUser cancel={cancel} />
            </TabPanel>
        </Tabs>
    )
}
export default ContentModalApartments;
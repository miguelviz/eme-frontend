import React,{useState} from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ContentClient from "./ContentClient";
import ContentContract from "./ContentContract";
import ContentConfirm from "./ContentConfirm";

const Content = (props)=>{
    const {cancel} = props;
    const [selectedClient,setSelectedClient] = useState(null);

    const reset = ()=>{
        setSelectedClient(null);
    }

    return(
        <>
            <Tabs>
                <TabList>
                    <Tab>Cliente</Tab>
                    <Tab>Contrato</Tab>
                    <Tab>Confirmar</Tab>
                </TabList>
                <TabPanel>
                    <ContentClient selectedClient={selectedClient} setSelectedClient={setSelectedClient} />
                </TabPanel>
                <TabPanel>
                    <ContentContract selectedClient={selectedClient} />
                </TabPanel>
                <TabPanel>
                    <ContentConfirm selectedClient={selectedClient} cancel={cancel} reset={reset} />
                </TabPanel>
            </Tabs>
        </>
    )
}
export default Content;
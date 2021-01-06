import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import {useModal} from "../../../../Principal/Modal/Context";
import ContextComponent from "../../../../../Context/Component";
import PermissionList from "./PermissionList";
const ContentPermission = (props)=>{
  const modalData = useModal();
  const jobInfo = modalData.data.jobInfo;
  const id_job = jobInfo.id_job;
  const modules = modalData.data.modules;
  return(
    <>
      <Tabs>
        <TabList>
          {
            modules.map((item,index)=>(
              <Tab key={index}>{item.name_module}</Tab>
            ))
          }
        </TabList>
        {
          modules.map((item,index)=>(
            <TabPanel key={index}>
              <Tabs>
                <TabList>
                  {
                    item.views.map((item2,index2)=>(
                      <Tab key={index2}>{item2.name_view}</Tab>
                    ))
                  }
                </TabList>
                {
                  item.views.map((item2,index2)=>(
                    <TabPanel key={index2}>
                      <ContextComponent url="master-data" data_start={{type:"consultJobsPermissions",id_view:item2.id_view,id_job}} Content={()=><PermissionList />} />
                    </TabPanel>
                  ))
                }
              </Tabs>
            </TabPanel>
          ))
        }
      </Tabs>
    </>
  )
}
export default ContentPermission;

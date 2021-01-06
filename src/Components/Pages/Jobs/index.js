import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"master-data"} datos={{id_view:4,id_module:2,type:"consultJobs"}} Content={()=><Content />} />
  )
}

export default Page;
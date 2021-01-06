import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"master-data"} datos={{id_view:7,id_module:2,type:"consultCompanies"}} Content={()=><Content />} />
  )
}

export default Page;
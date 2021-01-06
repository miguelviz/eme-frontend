import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"BranchReports"} datos={{id_view:9,id_module:5,type:"consultApartmentReports"}} Content={()=><Content />} />
  )
}

export default Page;
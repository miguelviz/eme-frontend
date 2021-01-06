import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"reservations"} datos={{id_view:8,id_module:3,type:"consultClients"}} Content={()=><Content />} />
  )
}

export default Page;
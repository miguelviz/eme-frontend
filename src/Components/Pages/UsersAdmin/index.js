import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"admin"} datos={{id_view:1,id_module:1,type:"consultAdmins"}} Content={()=><Content />} />
  )
}

export default Page;

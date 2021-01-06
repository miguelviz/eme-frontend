import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={"apartments"} datos={{id_view:6,id_module:4,type:"getListRooms"}} Content={()=><Content />} />
  )
}

export default Page;
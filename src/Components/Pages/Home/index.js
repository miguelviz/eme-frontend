import React from "react";
import PageModel from "../../../Context/Page/PageModel";
import Content from "./Content";

const Page = (props)=>{
  return(
    <PageModel url={null} datos={{}} Content={()=><Content />} />
  )
}

export default Page;

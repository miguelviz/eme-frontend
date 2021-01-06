import React from "react";

const SidebarContentHeader = (props)=>{
  const {history,close} = props;
  return(
    <>
      <div className="d-flex justify-content-center">
        <img src={process.env.PUBLIC_URL + "/eme_logo_cuad.png"} style={{width:"100%",height:"100%",cursor:"pointer"}} alt="logo" onClick={()=>history.push("/")}/>
      </div>
    </>
  )
}
export default SidebarContentHeader;

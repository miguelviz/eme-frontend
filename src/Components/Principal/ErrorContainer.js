import React from "react";

const ErrorContainer = (props)=>{
  const {error} = props;
  if(error){
    return(
      <div style={{width:"100%"}} className="d-flex justify-content-center">
        <div style={{borderRadius:15,borderColor:"red",borderStyle:"solid",borderWidth:2,textAlign:"center",padding:20}}>
          <p style={{fontSize:18,FontWeight:"bold",textAlign:"center",color:"red"}}>
            ERROR
          </p>
          <p style={{fontSize:18,FontWeight:"bold",textAlign:"center",color:"#a1a1a1"}}>
            {error}
          </p>
        </div>
      </div>
    )
  }else{
    return(<></>)
  }
}
export default ErrorContainer;

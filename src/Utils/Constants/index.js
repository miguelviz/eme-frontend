import axios from "axios";
export const Const = {
  backend: "http://localhost:8081/",
  //backend: "http://maslow-admin.herokuapp.com/",
  loader:"Puff",
  colors:{
    primary: "#1e1e1e",
    secondary: "gray",
    buttons:{
      primary:"#1e1e1e",
      secondary: "#63c9c3",
      cancel: "#9e0000"
    }
  }
}
export const REQUEST = (url,postData)=>{
  return new Promise((res,rej)=>{
    console.log("Consultando:",Const.backend+url);
    (async()=>{
      let r = await axios.post(Const.backend+url,postData).catch(e=>{
        console.log("entro al catch",e.error);
        console.log("PostData:",postData)
        res({error:"Error al conectar al servidor"})
      })
      if(r){
        if(r.data.error){
          console.log("Entro a r.data.error")
          res({error:r.data.error})
        }else{
          console.log("Entro a result")
          res({result:r.data.result,error:null});
        }
      }
    })()
  })
}

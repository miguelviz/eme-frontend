import React,{useState,useEffect,useMemo} from "react";
import {useUser} from "../Context/User";
import {Const} from "../Utils/Constants";
import { toast } from 'react-toastify';
import Navigation from "./Principal/Navigation";

const ContentApp = (props)=>{
  const {user,routes} = useUser();


  return(
    <>
      {
        user?
        <div style={{maxWidth:"100vw",maxHeight:"100vh"}}>
          <Navigation />
        </div> : null
      }
    </>
  )
}
export default ContentApp

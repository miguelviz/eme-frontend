import React from "react";
import "./style.css";

const Card = (props)=>{
  const {Content,onClick,style,sizeable} = props;
  const styles = {
    cursor:onClick?"pointer":"auto",
    width:"100%",
    padding:10,
    borderRadius:15,
    background:"#fff",
    boxShadow:"2px 2px 2px #000",
    marginTop:15,
    ...style
  }
  return(
    <>
      <div className={sizeable?"minisizeable":""} style={styles} onClick={onClick?()=>onClick():null}>
        <Content />
      </div>
    </>
  )
}
export default Card;

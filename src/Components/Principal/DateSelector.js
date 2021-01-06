import React,{useEffect} from "react";

const DateSelector = (props)=>{
  const {style,label,value,setValue,placeholder,min,disabled} = props;
  const inputStyle = {
    borderRadius:10,
    marginTop:10,
    ...style
  }
  const returnDate = ()=>{
    if(min.toString()){
      let newDate = new Date(min);
      if(newDate){
        let year = newDate.getFullYear();
        let month = (newDate.getMonth()+1>=10)?(newDate.getMonth()+1):"0"+newDate.getMonth()+1;
        let day = (parseInt(newDate.getDate())>=10)?newDate.getDate():"0"+newDate.getDate;
        return year+"-"+month+"-"+day;
      }else{
        return "";
      }
    }else{
      return ""
    }
  }
  useEffect(()=>{
    if(min&&!value){
      setValue(returnDate());
    }
  },[])
  return(
    <>
      {
        label?
        <>
          <label className="label d-flex justify-content-start" style={{fontSize:15,fontWeight:"bold"}}>{label}</label>
        </> : null
      }
      <input type="date" className="form-control inputBdk" min={(min)?returnDate():null} placeholder={placeholder?placeholder:""} onChange={(e)=>{setValue(e.target.value);console.log(e.target.value)}} value={value} disabled={disabled}/>
    </>
  )
}
export default DateSelector;

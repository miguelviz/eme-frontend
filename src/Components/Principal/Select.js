import React, {useState} from "react";
import Select from 'react-select';
import { Const } from "../../Utils/Constants";

const Selector = (props) => {
  const {val,setVal,items,label,placeholder,multi,index,styleContainer,isDisabled,styleSelect} = props;
  const {colors} = Const;
  const styles = {
    control: (provided, state)=> ({
      ...provided,
      ...styleContainer
    }),
    option: (provided, state) => ({
      ...provided,
      color: colors.primary,
      ...styleSelect,
    }),
  }
  return(
    <>
      {
        label?
        <label className="badge">
          {label}
        </label> : null
      }
      {
        (multi)?
        <Select
          isMulti
          value={val}
          onChange={(value)=>setVal(value,index)}
          options={items}
          placeholder={(placeholder)?placeholder:"Seleccione una opción"}
          className="basic-multi-select"
          classNamePrefix="select"
          style={styles}
          isDisabled={isDisabled}
        /> :
        <Select
          value={val}
          onChange={(value)=>setVal(value,index)}
          options={items}
          placeholder={(placeholder)?placeholder:"Seleccione una opción"}
          style={styles}
          isDisabled={isDisabled}
        />
      }
    </>
  )
};
export default (Selector);

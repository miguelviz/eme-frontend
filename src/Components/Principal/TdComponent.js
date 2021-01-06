import React, {useState} from "react";
import {OverlayTrigger,Popover} from "react-bootstrap";

const TdComponent = (props)=>{
    const {value,ContentEditing,label,colSpan,style} = props;
    const [editing,setEditing] = useState(false);

    const generateID = ()=>{
        return "element_system_"+Math.random() * (9999 - 1) + 1;
    }
    const tdStyles = {
        cursor:"pointer",
        ...style
    }
    return(
        <td colSpan={colSpan||"1"} style={tdStyles}>
            {
                            editing ? <ContentEditing cancelEditing={()=>setEditing(false)} /> :
                            <OverlayTrigger
                                placement={"top"}
                                overlay={
                                <Popover id={generateID()}>
                                    <Popover.Content>
                                    <div style={{textAlign:"center"}}>
                                        <strong className="text-center" style={{color:"gray"}}>{label}</strong>
                                    </div>
                                    </Popover.Content>
                                </Popover>
                                }
                            >
                                <p onClick={()=>setEditing(true)}>{value}</p>
                            </OverlayTrigger> 
            }
        </td>
    )
}
export default TdComponent;
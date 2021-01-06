import React from "react";
import {FaUserAlt,FaSave,FaQuestion,FaUserCog,FaLock,FaHamburger,FaPencilAlt,
        FaProductHunt,FaBox,FaWarehouse,FaUserTie,FaTruck,FaStore,FaStoreAlt,FaHome,
        FaListAlt,FaUserGraduate,FaUniversity,FaBuilding,FaPlus,FaSyncAlt,FaTimes,
        FaInfo,FaDatabase,FaHotel,FaMinus,FaList,FaBed,FaBath,FaUserPlus,FaUserCheck,
        FaWpforms} from "react-icons/fa";
import {MdLibraryBooks} from "react-icons/md";
import { GiGearHammer,GiCarKey,GiCancel } from "react-icons/gi";
const ReturnIcon = (props) => {
  const {nameIcon,color,fontSize,marginTop,style} = props;
  const iconStyle = {
    marginTop:(marginTop)?marginTop:0,
    color:(color)?color:"#fff",
    fontSize:(fontSize)? fontSize : "",
    ...style
  }
  switch (nameIcon) {
    case "FaWpforms":
      return <FaWpforms style={iconStyle}/>
    case "FaUserCheck":
      return <FaUserCheck style={iconStyle}/>
    case "FaUserPlus":
      return <FaUserPlus style={iconStyle}/>
    case "FaList":
      return <FaList style={iconStyle}/>
    case "FaBath":
      return <FaBath style={iconStyle}/>
    case "FaBed":
      return <FaBed style={iconStyle}/>
    case "FaMinus":
      return <FaMinus style={iconStyle}/>
    case "FaHome":
      return <FaHome style={iconStyle}/>
    case "FaHotel":
      return <FaHotel style={iconStyle}/>
    case "FaDatabase":
      return <FaDatabase style={iconStyle}/>
    case "FaTimes":
      return <FaTimes style={iconStyle}/>
    case "FaInfo":
      return <FaInfo style={iconStyle}/>
    case "FaStoreAlt":
      return <FaStoreAlt style={iconStyle}/>
    case "FaSyncAlt":
      return <FaSyncAlt style={iconStyle}/>
    case "FaPlus":
      return <FaPlus style={iconStyle}/>
    case "FaSave":
      return <FaSave style={iconStyle}/>
    case "FaPencilAlt":
      return <FaPencilAlt style={iconStyle}/>
    case "GiCancel":
      return <GiCancel style={iconStyle}/>
    case "FaStore":
      return <FaStore style={iconStyle}/>
    case "FaTruck":
      return <FaTruck style={iconStyle}/>
    case "FaWarehouse":
      return <FaWarehouse style={iconStyle}/>
    case "FaUserTie":
      return <FaUserTie style={iconStyle}/>
    case "FaUserAlt":
      return <FaUserAlt style={iconStyle}/>
    case "FaUserCog":
      return <FaUserCog style={iconStyle}/>
    case "FaLock":
      return <FaLock style={iconStyle}/>
    case "GiGearHammer":
      return <GiGearHammer style={iconStyle}/>
    case "FaHamburger":
      return <FaHamburger style={iconStyle}/>
    case "FaProductHunt":
      return <FaProductHunt style={iconStyle}/>
    case "FaBox":
      return <FaBox style={iconStyle} />
    case "FaListAlt":
      return <FaListAlt style={iconStyle} />
    case "FaBuilding":
      return <FaBuilding style={iconStyle} />
    case "FaUniversity":
      return <FaUniversity style={iconStyle} />
    case "FaUserGraduate":
      return <FaUserGraduate style={iconStyle} />
    case "MdLibraryBooks":
      return <MdLibraryBooks style={iconStyle} />
    case "GiCarKey":
      return <GiCarKey style={iconStyle} />
    default:
      return <FaQuestion style={iconStyle}/>
  }
};
export default (ReturnIcon);

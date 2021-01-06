import {toast} from "react-toastify";
export const Toast = (msg,type)=>{
  switch (type) {
    case "info":
      toast.info(msg);
      break;
    case "error":
      toast.error(msg);
      break;
    case "success":
      toast.success(msg);
      break;
    case "warning":
      toast.warning(msg);
      break;
    default:
      toast.dark(msg);
  }
}

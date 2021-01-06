import './App.css';
import {UserProvider,useUser} from "./Context/User";
import Loader from "./Components/Principal/Loader";
import Login from "./Components/Login/Login";
import ContentApp from "./Components/ContentApp";
import 'bootstrap/dist/css/bootstrap.min.css';
import {ToastContainer,Zoom} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'react-tabs/style/react-tabs.css';

const AppContextUser = (props)=>{
  return(
    <>
      <UserProvider>
        <App />
      </UserProvider>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={true} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
    </>
  )
}

const App = ()=>{
  const {user,loadingUser} = useUser();
  return (
    <>
      {
        loadingUser ?
        <Loader isVisible={true} /> :
          user!=="Invitado" ? <ContentApp /> : <Login />
      }
    </>
  );
}

export default AppContextUser;

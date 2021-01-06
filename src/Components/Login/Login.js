import React,{useState} from "react";
import {Container,Row,Col,Card} from "react-bootstrap";
import Input from "../Principal/Input";
import Button from "../Principal/Button";
import {Const} from "../../Utils/Constants";
import {useUser} from "../../Context/User";

const Login = (props)=>{
  const {login,loadingUser,Toast} = useUser();
  const {colors} = Const;
  const [email,setEmail] = useState("");
  const [psw,setPsw] = useState("");

  const checkMail = ()=>{
    let reg = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    if (reg.test(email)) {
      return null;
    }else{
      return "Formato de correo electrónico inválido";
    }
  }
  const startLogin = ()=>{
    login(email,psw)
  }
  const checkErrors = ()=>{
    if(!checkMail(email)&&psw){
      return false;
    }else{
      return true;
    }
  }
  return(
    <div className="loginDiv">
        <Container>
          <Row>
            <Col xs="1" md="3" lg="3" xl="3"></Col>
            <Col xs="10" md="6" lg="6" xl="6">
              <div className="loginCard">
                <div className="loginContentCard">
                  <div style={{padding:50}}>
                    <img src={process.env.PUBLIC_URL + '/eme_logo_white.png'} alt="logo" style={{width:250,opacity:1}} />
                  </div>
                  <div style={{padding:30}}>
                    <Input value={email} onChange={setEmail} placeholder="Correo Electrónico" errorMsg={checkMail()} />
                    <Input value={psw} onChange={setPsw} placeholder="Contraseña" password={true}/>
                    <div className="d-flex justify-content-center mt-3">
                      <Button type="success" style={{width:"100%"}} label="Iniciar Sesión" loader={loadingUser} execute={startLogin} disabled={checkErrors()}/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs="1" md="3" lg="3" xl="3"></Col>
          </Row>
        </Container>
    </div>
  )
}
export default Login;

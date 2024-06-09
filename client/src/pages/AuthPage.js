import {Container,Card, Form, FormControl, Button, Row } from "react-bootstrap";

import React, { useContext, useState } from 'react';
import { Context } from '..';
import {observer} from "mobx-react-lite";
import { CATALOG_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import { registration, login } from "../http/userAPI";

const Auth = observer( () => {
  const {user, darkMode} = useContext(Context)
  const location = useLocation();
  const Navigate = useNavigate();
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try{
      let Data;
      if(isLogin){
        Data = await login(email, password);
      }else{
        Data = await registration(email, password)
      }
      user.setUser(true)
      user.setIsAuth(true)
      Navigate(CATALOG_ROUTE)
    } catch (e){
      alert(e.response.data.message)
    }
    
  } 

  return (
    !darkMode.darkMode ? 
    <Container
      className="d-flex justify-content-center align-items-center whiteModeContainer"
      style={{height: window.innerHeight - 54}}
    >
      <Card style={{width: "600px"}} className="p-4 darkElement">
        <h2 style={{color: "white"}} className="m-auto">{ isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <FormControl style={{width: "100%"}} className="mt-4 whiteActiveElement" placeholder="Введите email..." type="email" value={email} onChange={e => setEmail(e.target.value)}>

          </FormControl>
          <FormControl style={{width: "100%"}} className="mt-4 whiteActiveElement" placeholder="Введите пароль..." type="password" value={password} onChange={e => setPassword(e.target.value)}>

          </FormControl>
          <Row className="d-flex align-items-center mt-4" style={{width: "100%", justifyContent: "space-between"}}>
            { isLogin ?
              <div style={{color: "white", margin: 0, display: "flex", width: "65%"}}>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{color: 'wheat', textDecoration: 'none'}}>- Зарегистрируйтесь!</NavLink>
              </div>
              :
              <div style={{color: "white", margin: 0, display: "flex", width: "65%"}}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{color: 'wheat', textDecoration: 'none'}}>- Войти!</NavLink>
              </div>
            }
            <Button variant="outline-light" style={{width: "34%"}} onClick={click}>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
    : 
    <Container
    className="d-flex justify-content-center align-items-center blackModeContainer"
      style={{height: window.innerHeight - 54}}
      >
      <Card style={{width: "600px"}} className="p-4">
        <h2 className="m-auto">{ isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <FormControl style={{minWidth: "100%"}} className="mt-4 darkActiveElement" placeholder="Введите email..." type="email" value={email} onChange={e => setEmail(e.target.value)}>

          </FormControl>
          <FormControl style={{minWidth: "100%"}} className="mt-4 whiteActiveElement" placeholder="Введите пароль..." type="password" value={password} onChange={e => setPassword(e.target.value)}>

          </FormControl>
          <Row className="d-flex justify-content-between align-items-center mt-4 pe-3">
            { isLogin ?
              <div style={{color: "black", margin: 0, display: "flex", width: "65%"}}>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE} style={{color: 'rgba(101, 12, 133, 0.897)', textDecoration: 'none'}}> - Зарегистрируйтесь!</NavLink>
              </div>
              :
              <div style={{color: "black", margin: 0, display: "flex", width: "65%"}}>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE} style={{color: 'rgba(101, 12, 133, 0.897)', textDecoration: 'none'}}>- Войти!</NavLink>
              </div>
            }
            <Button variant="outline-dark" style={{width: "34%"}} onClick={click}>{isLogin ? "Войти" : "Зарегистрироваться"}</Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
})

export default Auth;
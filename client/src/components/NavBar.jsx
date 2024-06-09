import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

import React, { useContext } from 'react';
import { Context } from '..';
import { NavLink } from 'react-router-dom';
import {CATALOG_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import { useNavigate } from "react-router-dom";


const NavBar = observer( () => {
  const {user, darkMode} = useContext(Context)
  const Navigate = useNavigate()

  const logOut = () => {
    user.setUser({})
    user.setIsAuth(false)
    localStorage.setItem('token', '')
  }

  return (
    !darkMode.darkMode ? 
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration: 'none'}} to={CATALOG_ROUTE}>TopFilms</NavLink>
          { user.isAuth ? 
            <Nav className="ms-auto" style={{color:'white'}}>
              <Button variant="light" onClick={() => Navigate(ADMIN_ROUTE)}>Админ панель</Button>
              <Button variant="light" className='ms-2' id='switchMode' onClick={() => {logOut(); Navigate(CATALOG_ROUTE)}}>Выйти</Button>
              <div className="vr ms-2" />
              <Button variant="light" className="ms-2" onClick={() => darkMode.setDarkMode(true)}>Сменить тему</Button>
              </Nav>
              
              :
              <Nav className="ms-auto" style={{color:'white'}}>
              <Button variant="light" onClick={() => Navigate(LOGIN_ROUTE)}>Авторизация</Button> 
              <div className="vr ms-2" />
              <Button variant="light" className="ms-2" onClick={() => darkMode.setDarkMode(true)}>Сменить тему</Button>
            </Nav>
          }
        </Container>
      </Navbar>

      : 
      <Navbar bg="light" data-bs-theme="dark">
        <Container>
          <NavLink style={{color:'white', textDecoration: 'none'}} to={CATALOG_ROUTE}>TopFilms</NavLink>
          { user.isAuth ? 
            <Nav className="ms-auto" style={{color:'black'}}>
              <Button variant="outline-dark">Админ панель</Button>
              <Button variant="outline-dark" className="ms-2" id='switchMode' onClick={() => {user.setIsAuth(false); Navigate(CATALOG_ROUTE)}}>Выйти</Button>
              <div className="vr ms-2" />
              <Button variant="outline-dark" className="ms-2" onClick={() => darkMode.setDarkMode(false)}>Сменить тему</Button>
              </Nav>
              
              :
              <Nav className="ms-auto" style={{color:'black'}}>
              <Button variant="outline-dark" onClick={() => user.setIsAuth(true)}>Авторизация</Button>
              <div className="vr ms-2" />
              <Button variant="outline-dark" className="ms-2" onClick={() => darkMode.setDarkMode(false)}>Сменить тему</Button>
            </Nav>
          }
        </Container>
      </Navbar>
  );
});

export default NavBar;
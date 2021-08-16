import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { CartWidget } from './components/CartWidget/CartWidget';
import { Nav, Navbar } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';

import { ItemCount } from './components/ItemCount/ItemCount';

function App() {
    return (
      <div className="App">
        <Navbar bg="mynav" variant="dark" sticky="top" expand="lg">
            <Navbar.Brand href="#home">AutumnVibes ♡ <CartWidget /></Navbar.Brand>
            <NavbarToggle />
            <NavbarCollapse>
              <Nav>
                <Nav.Link href="#">Inicio</Nav.Link>
                <Nav.Link href="#">Productos</Nav.Link>
                <Nav.Link href="#">Sales</Nav.Link>
                <Nav.Link href="#">Contactos</Nav.Link>
              </Nav>
            </NavbarCollapse>
        </Navbar>
        <div className="itemCount">
          <ItemCount stock="5" />
        </div> 
      </div>
    );
}

export default App;

import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from "react-router-dom"
import logo from "../../data/imgs/Freshi-logo.png"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container fluid className="header">
            <Navbar.Brand> 
                <Link to='/'><img className="freshi" src={logo} alt="Freshi Logo"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" className='toggle' />
            <Navbar.Collapse id="navbarScroll" className="link">
                <Nav className="me-auto my-3 my-lg-0" navbarScroll>
                    <Nav.Link className="navLink">
                        <Link to='/productos/Verduleria' className="link">Verdulería</Link>
                    </Nav.Link>
                    <Nav.Link className="navLink">
                        <Link to='/productos/Carnes' className="link">Carnes</Link>
                    </Nav.Link>
                    <Nav.Link className="navLink">
                        <Link to='/productos/Almacen' className="link">Almacen</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            <Nav.Link className="link">
                <Link to='/cart' className="link"><CartWidget/></Link>
            </Nav.Link>
        </Container>
        </Navbar>
    )
}



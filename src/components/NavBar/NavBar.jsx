import React from 'react'
import { CartWidget } from '../CartWidget/CartWidget'
import "./NavBar.css"
import { Link } from "react-router-dom"
import logo from "../../data/imgs/Freshi-logo.png"

export const NavBar = () => {
    return (
        <div className="header">
            <Link className="link" to='/'>
                <img className="freshi" src={logo} alt="Freshi Logo"/>
            </Link> 
            <Link className="link" to='/productos/Verduleria'>Verdulería</Link>
            <Link className="link" to='/productos/Carnes'>Carnes</Link>
            <Link className="link" to='/productos/Almacen'>Almacen</Link>
            <Link className="link" to='/cart'><CartWidget/></Link>
        </div>
    )
}


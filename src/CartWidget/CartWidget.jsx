import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import { CartContext } from '../context/CartContext';
import "./CartWidget.css"

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div>
            <BiCart className='carrito'/> 
            <span>{calcularCantidad()}</span>
        </div>
    )
}
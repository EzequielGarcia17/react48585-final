import React, { useContext } from 'react'
import { BiCart } from "react-icons/bi";
import { CartContext } from '../context/CartContext';


export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <>
            <BiCart/> 
            <span>{calcularCantidad()}</span>
        </>
    )
}
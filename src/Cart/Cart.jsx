import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { CartContext } from '../context/CartContext'
import { BiCart } from "react-icons/bi";

export const Cart = () => {

    const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

    return (
        <div  className='compras'>
        {
            carrito.length ===0
            ?<div className="centrar">
                <h1>Carrito Vacio</h1>
                <Link to='/'><Button className="volver">Seguir comprando</Button></Link>
            </div> 
            :<>
                <h1>Tu carrito</h1>
            {
                carrito.map((prod) => (
                    <div className="lineaCarro">
                        <img className="chico" alt="producto" src={prod.image}/>
                        <div className="prodDet">
                            <h2>{prod.name}</h2>
                            <h3>Cantidad: {prod.counter}</h3>
                            <Button className="volver eliminar" onClick={() => removerItem(prod.id)}>Eliminar</Button>
                        </div>
                        <div className="priceBox">
                            <h4>Precio</h4>
                            <h2 className="prodPrice">${prod.price} {prod.amount}</h2>
                        </div>
                    </div>
                ))
            }
            <div className="precioTotal">
            <p>PRECIO TOTAL ${precioTotal()}</p>
            </div>
            <Link to="/checkout"><Button className="cta">Finalizar Compra</Button></Link>
            <Button className='borrar'onClick={vaciarCarrito}>Vaciar Carrito<BiCart className='carDel'/></Button>
        </>
    }
    </div>
)
}


import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Cart.css"
import { CartContext } from '../context/CartContext'

export const Cart = () => {

    const {carrito, precioTotal, removerItem, vaciarCarrito} = useContext(CartContext)

    return (
        <div  className='compras'>
        {
            carrito.length ===0
            ?<>
                <h3>Carrito Vacio</h3>
                <Link to='/' className="btn btn-sucess">Volver a comprar</Link>
                </> 
            :<>
                <h3>Tu carrito</h3>
            {
                carrito.map((prod) => (
                    <div>
                        Listado
                        <p>{prod.name}</p>
                        <p>${prod.price} {prod.amount}</p>
                        <p>Cantidad: {prod.counter}</p>
                        <Button onClick={() => removerItem(prod.id)}>Eliminar</Button>
                    </div>
                ))
            }
            <hr/>
            <p>PRECIO TOTAL ${precioTotal()}</p>
            <hr/>
            <Link to="/checkout" class="btn btn-success">Finalizar Compra</Link>
            <Button className='btn btn-danger'onClick={vaciarCarrito}>vaciarCarrito</Button>
        </>
    }
    </div>
)
}


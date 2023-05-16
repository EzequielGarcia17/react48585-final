import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { BiCart, BiChevronsLeft } from "react-icons/bi";


export const ItemDetail = ({id, name, description, origen, price, amount, image, category, stock}) => {

const navigate = useNavigate ()
const volverAtras = () => {
    navigate(-1)
}
const {addToCart} = useContext(CartContext)

const [counter, setCounter] = useState(0)

const sumarAlCarrito = () => {
    const newItem ={
        id,
        name,
        description,
        image,
        price,
        amount,
        counter
    }
    addToCart(newItem)
    Swal.fire({
        icon: 'success',
        title: 'Agregado al carrito',
        timer: 1000,
        showComfirmButtom: "false",
        iconColor: "#64d5c1",
    })
}

    return (
    <div className="detalle">
    <Card className="itemdetalle">
        <Card.Img className="heroDet" variant="top" src={image} />
        <Card.Body className="detBody">
            <Button className="volver" onClick={volverAtras}><BiChevronsLeft/>Volver</Button>
            <Card.Title className='mainTitle'>{name}</Card.Title>
            <Card.Text className="parrafo">{description}</Card.Text>
            <p className="subt">Origen: <span className="light">{origen}</span></p>
            <p className="subt">Stock: <span className="light">{stock}</span></p>
            <Card.Text  className="subt priceDet">${price} {amount}</Card.Text>
            <ItemCount max={stock} min="1" modify={setCounter} cantidad={counter}/>
            <Button className="compra ctaDet" onClick={sumarAlCarrito}><BiCart/> Agregar al carrito</Button>
            <br/>
            <Link to="/cart">
                <Button className="volver goCart">Ir al carrito<BiCart/></Button>
            </Link>
        </Card.Body>
    </Card>
    </div>
    )
}


import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';
import { ItemCount } from '../ItemCount/ItemCount';
import "./ItemDetail.css"
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
}

    return (
    <div className="detalle">
    <Card className="itemdetalle">
        <Card.Img className="heroDet" variant="top" src={image} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <p className="subt">Origen: <span className="light">{origen}</span></p>
            <p className="subt">Categoría: <span className="light">{category}</span></p>
            <Card.Text  className="subt priceDet">${price} {amount}</Card.Text>
            <ItemCount max={stock} min="1" modify={setCounter} cantidad={counter}/>
            <Button className="compra ctaDet" onClick={sumarAlCarrito}>Agregar al carrito</Button>
            <Link to="/cart">Ir al carrito</Link> 
            <Button onClick={volverAtras}>Volver</Button>
        </Card.Body>
    </Card>
    </div>
    )
}


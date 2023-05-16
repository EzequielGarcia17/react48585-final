import React from "react"
import "./Item.css"
import {Card, Button} from 'react-bootstrap';
import {Link} from "react-router-dom";



export const Item = ({id, name, origen, price, amount, image, category}) => {

    return (
    <div>
        <div className="grupo">
            <Card className="item" style={{ width: '25em' }}>
                <Card.Img className="hero" variant="top" src={image} />
                <Card.Body>
                    <Card.Title className="title">{name}</Card.Title>
                    <p className="subt">Origen: <span className="light">{origen}</span></p>
                    <p className="subt">Categoría: <span className="light">{category}</span></p>
                    <Card.Text  className="subt price">${price} {amount}</Card.Text>
                    <Link to={`/detail/${id}`}>
                        <Button className="cta" variant="primary">Ver más</Button>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    </div>
);
}


import React, {useEffect, useState} from "react";
import Spinner from 'react-bootstrap/Spinner';
import {ItemDetail} from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"
import { getFirestore } from "../../firebase/config";

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()

        const productos = db.collection("productos")

        const item = productos.doc(itemId)
        item.get()
        .then((doc) => {
            setItem({
                id: doc.id, ...doc.data()
            })
        })
        .catch((error) => console.log(error))
        .finally(() => {
        setLoading(false)
    })
},[itemId])

return (
    <section className="productos">
        {
            loading
            ?<div className="spinner">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
            :<ItemDetail {...item}/>
        }
    </section>
)
}
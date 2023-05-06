import React, {useEffect, useState} from "react";
import { FaSpinner } from "react-icons/fa"
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
    <section>
        {
            loading
            ?<FaSpinner/>
            :<ItemDetail {...item}/>
        }
    </section>
)
}
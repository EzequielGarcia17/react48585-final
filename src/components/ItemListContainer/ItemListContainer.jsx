import React, { useEffect, useState } from 'react'
import { FaSpinner } from "react-icons/fa"
import "./itemListContainer.css"
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom'
import { getFirestore } from '../../firebase/config';

export const ItemListContainer = () => {
    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true)
        const db = getFirestore()
    
        const productos = categoryId
          ?db.collection('productos').where('category', '==', categoryId)
          : db.collection('productos')
          productos.get()
          .then((res) => {
                  const newItem = res.docs.map((doc) => {
                    return { id: doc.id, ...doc.data() };
                  });
                  console.table(newItem);
                  setItems(newItem);
                })
                .catch((err) => console.log(err))
                .finally(() => {
                  setLoading(false);
                });
    
      }, [categoryId, setLoading])
    
return (
    <div className='productos'>
    {
        loading
        ?<div className="spinner">
        <FaSpinner/>
        </div>
        :<ItemList productos={items}/>
    }
    </div>
    )}









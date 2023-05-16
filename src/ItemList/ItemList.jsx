import React from 'react'
import {Item} from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({productos=[]}) => {
return (
    <div className='itemlist'>
        <h1>NUESTRO PRODUCTOS</h1>
        <div className="listaDeProductos">
        {productos.map((item) => <Item {...item} key={item.id}/>)}
        </div>
    </div>
    )
}


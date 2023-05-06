import React from 'react'
import {Item} from '../Item/Item'
import "./ItemList.css"

export const ItemList = ({productos=[]}) => {
return (
    <div className='itemlist'>
        <h1>Nuestros productos</h1>
        {productos.map((item) => <Item {...item} key={item.id}/>)}
    </div>
    )
}


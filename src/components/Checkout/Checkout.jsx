import { useState } from "react"
import React from "react"
import "./Checkout.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import firebase from "firebase"
import "firebase/firestore"
import { getFirestore } from "../../firebase/config"
import Swal from "sweetalert2"

export const Checkout = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext)

    const [email, setEmail] = useState("")

    const [nombre, setNombre] = useState("")

    const [apellido, setApellido] = useState("")

    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Email:", email)
        console.log("Nombre:", nombre)
        console.log("Apellido:", apellido)
        console.log("Teléfono:", telefono)
        
        const orden = {
    buyer: {
        email,
        nombre,
        apellido,
        telefono
    },
    item: carrito,
    total_price: precioTotal(),
    data: firebase.firestore.Timestamp.fromDate(new Date())
}
console.log(orden)
const db = getFirestore()

const ordenes = db.collection("ordenes")

ordenes.add(orden)
    .then((res) =>{
        Swal.fire({
            icon: 'success',
            title: 'Compra finalizada con éxito',
            text: 'Guarde su número de compra: ${}',
            willClose: () =>{
                vaciarCarrito()
            }
        })
    })
    .finally(()=>{
        console.log("Operacion terminada con éxito")
    })
    carrito.forEach((item) =>{
        const docRef = db.collection("productos").doc(item.id)
        docRef.get()
        .then((doc) =>{
            docRef.update({
                stock: doc.data().stock - item.counter
            })
        })
    })
}




    return (
        <div className="checkout">
            <h3>Terminar Compra</h3>
            <form onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label htmlFor="" for="exampleInputEmail1" class="form-label">Email
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Nombre
                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Apellido
                        <input type="text" class="form-control" id="exampleInputPassword1" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Teléfono
                        <input type="number" class="form-control" id="exampleInputPassword1" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                    </label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Suscribite para saber de nuestras promociones</label>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                    <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                </div>
                <button type="submit" class="btn btn-success">Finalizar</button>
                <Link to="/cart" class="btn btn-info">Volver al Carrito</Link>
            </form>
        </div>
    )
}
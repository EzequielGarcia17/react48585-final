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
            text: `Guarde su numero de compra: ${res.id}`,
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
            <h1>Terminar Compra</h1>
            <form className="completarDatos" onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputName1" class="form-label">Nombre
                        <input type="text" class="form-control" id="exampleInputName1" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                    </label>

                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <div class="mb-3">
                    <label for="exampleInputApellido1" class="form-label">Apellido
                        <input type="text" class="form-control" id="exampleInputApellido1" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label htmlFor="" for="exampleInputEmail1" class="form-label" required>Email
                        <input type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} value={email}/>
                    </label>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPhone1" class="form-label" required>Teléfono
                        <input type="number" class="form-control" required id="exampleInputPhone1" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                    </label>
                </div>
                <button type="submit" class="ctaFin">FINALIZAR</button>
                <br/>
                <Link to="/cart" class="volverCarrito">Volver al Carrito</Link>
            </form>
        </div>
    )
}
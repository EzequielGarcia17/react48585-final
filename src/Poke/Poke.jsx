import React, { useEffect, useState } from 'react'
import "./Poke.css"

export const Poke = () => {
    const [pokemon, setPokemon] = useState ("");
    const [id, setId] = useState (1);
    const [busqueda,setBusqueda] = useState ("");
    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then((res) => res.json())
            .then((data) =>{
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default,
                })
            })
    }, [id])

    const siguiente = () =>{
        setId (id +1)
    }

    const anterior = () =>{
        id > 1 && setId (id -1)
    }

    const inputBusqueda = (e) =>{
        setBusqueda(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        if(busqueda.length > 2){
            fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
            .then((res) => res.json())
            .then((data) => {
                setPokemon({
                    numero: data.id,
                    nombre: data.name,
                    imagen: data.sprites.front_default,
                })
                setId(
                )
            })
        }
    }


    return (
        <div>
            {!pokemon ? <h3>Cargando....</h3>:
            <div>
                <h3 className="poke">{pokemon.id}</h3>
                <h4 className="poke">{pokemon.numero}</h4>
                <h5 className="poke">{pokemon.nombre}</h5>
                <img src={pokemon.imagen}/>
            </div>
            }
            <div>
                <button onClick={anterior}>Anterior</button>
                <button onClick={siguiente}>Siguiente</button>
            </div>
            <form onSubmit={submit}>
                <input type="text" value={busqueda} onChange={inputBusqueda}/>
            </form>
        </div>
    )
}
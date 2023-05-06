import "./ItemCount.css"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export const ItemCount = ({max, cantidad, modify}) => {
    //const [counter, setCounter] = useState(0)

    const sumar = () =>{
        if (cantidad < max){
        modify ( cantidad +1 )
    }
}

    const restar = () =>{
        if (cantidad > 0) {
        modify ( cantidad -1 )
        }
    }
    const reset = () =>{
        modify(0)
    }


return (
    <div>
    <h3>Cantidad</h3>
    <ButtonGroup aria-label="Basic example">
        <Button variant="secondary" onClick={restar}>-</Button>
        <Button variant="secondary">{cantidad}</Button>
        <Button variant="secondary" onClick={sumar}>+</Button>
        <Button variant="secondary" onClick={reset}>🔄</Button>
    </ButtonGroup>
    </div>
)
}


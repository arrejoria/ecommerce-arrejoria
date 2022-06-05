import {Button} from '@mui/material';
import { useState, useEffect } from 'react';


const CounterApp = ({initial, stock}) => {

    const [amount, setAmount] = useState(initial)
    const [result, setResult] = useState(0)
    useEffect( () => {
        console.log('El componente fue montado')
    }, [])

    useEffect( () => {
        console.log('Se ejecuta después del montaje y cuando actualiza count')
    }, [amount])

    useEffect( () => {
        setResult(amount * 2)
    }, [amount])


    const decrement = () => {
        amount > initial  && setAmount(amount - 1) 
    }

    const increment = () => {
        amount < stock  && setAmount(amount + 1)
    }

    const reset = () => {
            setAmount(initial);
    }

    console.log('Antes del montaje y en cada rerender (ACTUALIZACION')

    return (
        <>

            <h1 style={{color: '#FFF'}}>Amount x2: {result} </h1>
            <Button onClick={decrement} size="small" variant="contained">-</Button>
            <h2 style={{color: '#FFF'}}>{amount}</h2>
            <Button onClick={increment} size="small" variant="contained">+</Button>
            <Button onClick={reset} size="small" variant="contained"><h1>RESET</h1></Button>

        </>
    )
}

export default CounterApp
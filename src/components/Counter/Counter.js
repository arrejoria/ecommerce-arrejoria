import {Button, Container, Typography} from '@mui/material';
import { useState, useEffect } from 'react';
import './Counter.css'

const Counter = ({initial, stock}) => {

    const [amount, setAmount] = useState(initial)
    const [result, setResult] = useState(0)


    const decrement = () => {
        amount > initial  && setAmount(amount - 1) 
    }

    const increment = () => {
        amount < stock  && setAmount(amount + 1)
    }

    console.log('Antes del montaje y en cada rerender (ACTUALIZACION')

    return (
        <Container className='counter'> 
            <button onClick={decrement} >-</button>
            <Typography>{amount}</Typography>
            <button onClick={increment} >+</button>
        </Container>
    )
}

export default Counter
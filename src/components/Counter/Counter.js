import {Button, Container, Typography} from '@mui/material';
import { useState, useEffect } from 'react';


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
            <Button onClick={decrement} size="small" variant="contained">-</Button>
            <Typography>{amount}</Typography>
            <Button onClick={increment} size="small" variant="contained">+</Button>
        </Container>
    )
}

export default Counter
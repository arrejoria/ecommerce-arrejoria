import {Container, Typography} from '@mui/material';
import { useState } from 'react';
import './ItemCount.css'

const ItemCount = ({initial, stock, onAdd }) => {

    const [stockQuantity, setStockQuantity] = useState(stock)
    
    const [amount, setAmount] = useState(initial)
    // const [result, setResult] = useState(0)
  
    const removeItem = () => {
        amount > initial  && setAmount(amount - 1) && setStockQuantity(stockQuantity + 1)
    }
  
    const addItem = () => {
        amount < stock  && setAmount(amount + 1) && setStockQuantity(stockQuantity - 1)
    }
  
    return (
      <Container className='counter'> 
          <Typography variant='p'> CANTIDAD: </Typography>
          <button onClick={removeItem} >-</button>
          <Typography style={{color: '#111'}}>{ amount }</Typography>
          <button onClick={addItem}  >+</button>
          <button onClick={() => onAdd(amount)}>Agregar al carrito</button>
      </Container>
  )
  } 

export default ItemCount
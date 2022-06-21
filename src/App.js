import './App.css';
import {Container} from '@mui/material'
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Contenedor/ItemListContainer'
import ItemDetailContainer from './components/Contenedor/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext';

function App() {

  const [cart, setCart] = useState([])
  console.log(cart)

/*   const addItem = (productToAdd) => {
    if(cart.find(item => item.id === productToAdd.id)){
      const newCart = cart.map(item => {
        if(item.id === productToAdd.id){
          item.quantity += 1
        }
        return item
      }
      )
      setCart(newCart)
    }
  } */


  return (
    <Container className="App">
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/category/:categoryId" element={<ItemListContainer />} />
            <Route path="detail/:productId" element={<ItemDetailContainer />}/>
            <Route path='./cart' element={<ItemListContainer />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </Container>
  );
}

export default App;

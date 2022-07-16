import './App.css';
import {Container} from '@mui/material';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/Contenedor/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/Contenedor/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './Notifications/Notification';
import Cart from './components/Contenedor/CartContainer/Cart';
import Checkout from './components/Contenedor/CheckoutContainer/Checkout';

function App() {

  return (
    <Container className="App">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home title='Home'/> } />
            <Route path="/products" element={<ItemListContainer title='Productos'/>} />
            <Route path="/products/category/:categoryId" element={<ItemListContainer title='Categoría'/>} />
            <Route path="detail/:productId" element={<ItemDetailContainer title='Detalles'/>}/>
            <Route path="/cart" element={<Cart title='Carrito'/>} />
            <Route path="/checkout" element={<Checkout title='Checkout'/>} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </Container>
  );
}

export default App;

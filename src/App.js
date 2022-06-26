import './App.css';
import {Container} from '@mui/material'
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import ItemListContainer from './components/Contenedor/ItemListContainer'
import ItemDetailContainer from './components/Contenedor/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { CartProvider } from './Context/CartContext';
import { NotificationProvider } from './Notifications/Notification'
import Cart from './components/Cart/Cart';

function App() {

//   const [cart, setCart] = useState([])
//   console.log(cart)

// /*   const addItem = (productToAdd) => {
//     if(cart.find(item => item.id === productToAdd.id)){
//       const newCart = cart.map(item => {
//         if(item.id === productToAdd.id){
//           item.quantity += 1
//         }
//         return item
//       }
//       )
//       setCart(newCart) 
//     }
//   } */


  return (
    <Container className="App">
      <NotificationProvider>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/products" element={<ItemListContainer />} />
            <Route path="/products/category/:categoryId" element={<ItemListContainer />} />
            <Route path="detail/:productId" element={<ItemDetailContainer />}/>
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      </NotificationProvider>
    </Container>
  );
}

export default App;

import './App.css';
import {Container} from '@mui/material'
import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Contenedor/ItemListContainer'
import ItemDetailContainer from './components/Contenedor/ItemDetailContainer/ItemDetailContainer';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
    <Container className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' />
          <Route path="/products" element={<ItemListContainer />} />
          <Route path="/products/category/:categoryId" element={<ItemListContainer />} />
          <Route path="detail/:productId" element={<ItemDetailContainer />}/>
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

export default App;

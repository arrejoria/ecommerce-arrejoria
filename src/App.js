import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Contenedor/ItemListContainer'


function App() {
  return (
    <div className="App">
      <header className='header'>
        <NavBar />
      </header>
      <main>
        <ItemListContainer />
      </main>
    </div>
  );
}

export default App;

import './App.css';
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/Contenedor/ItemListContainer'

import { useState } from 'react';
import CounterApp from './components/CounterApp/CounterApp';

function App() {
  const [show, setShow] = useState(true)

  return (
    <div className="App">
      <header className='header'>
        <nav><NavBar /></nav>
      </header>
      <main>

        <button onClick={ () => setShow(!show)}>Show / Hide </button>
        { show && <ItemListContainer />}
        <CounterApp initial={0} stock={50} />
      </main>
    </div>
  );
}

export default App;

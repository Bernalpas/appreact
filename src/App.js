import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Counter } from './Componentes/Contador';
import { Navegacion } from './Componentes/Navegacion';
import { Footer } from './Componentes/Footer';
import { Productos } from './Componentes/Productos';


class App extends Component {
  render(){
  return (
    <div className="App">

      <nav>
        <Navegacion/>
      </nav>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>

      <main>
        <p>
          <h1>Me sumo al Componente App</h1>
        </p>
        <Counter></Counter>
        <Productos/>
      </main>

      <Footer/>  

    </div>
  );
}
}

export default App;

import React from 'react';
import logo from './logo.svg';
import Componente from './components/Componente';
import Propiedades from './components/Propiedades';
import './App.css';
import Estado from './components/Estado';
import RenderizadoCondicional from './components/RenderizadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventosES6, EventosES7, MasSobreEventos } from './components/Eventos'; //Se destructura porque no lo estamos exportando por defecto

function App() {
  let name = "pepe";

  return (
    <div className="App">
      <header className="App-header">
        <section>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{name}</h1>
        </section>
        <section>

          <Componente msg="Hola soy un Componente de clase" />
          <hr></hr>

          <Propiedades
            cadena="Esto es una cadena de texto"
            numero={19}
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: "Andres", apellido: "Avendaño" }}
            funcion={(num) => num * num}
            elementoReact={<i>Esto es un elemento React</i>}
            componenteReact={<Componente msg="Soy un componente pasado como prop" />}
          />
          <hr></hr>

          <Estado/>
          <hr></hr>

          <RenderizadoCondicional/>
          <hr></hr>

          <RenderizadoElementos/>
          <hr></hr>

          <EventosES6/>
          <hr></hr>
          <EventosES7/>
          <hr></hr>
          <MasSobreEventos />
          <hr></hr>


        </section>
      </header>
    </div>
  );
}

export default App;

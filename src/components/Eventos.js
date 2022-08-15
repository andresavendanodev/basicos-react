import React, {Component} from "react";

//Eventos y Bindings
export class EventosES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };

        //BINDING
        //Bind = metodo para definir el this en todo el documentobv
        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e) {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e) {
        console.log("Restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return(
            <div>
                <h2>Eventos en Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


export class EventosES7 extends Component {
    state = {
        contador: 0,
    };

    //En las Arrow Function el this es implicito dentro de la clase
    sumar = (e) => {
        console.log("Sumando");
        console.log(this);
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) => {
        console.log("Restando");
        console.log(this);
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}>+</button>
                    <button onClick={this.restar}>-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}


export class MasSobreEventos extends Component {
    handleClick = (e) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);


    }

    render() {
        return(
            <div>
                <h2>Más Sobre Eventos</h2>
                <button onClick={this.handleClick}>Saludar</button>
            </div>
        )
    }
}
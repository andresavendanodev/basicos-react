import React, { Component } from "react";


// ------------------ Funtional Componenet -------------------
// De manera original los componenetes funcionales no pueden tener estado (Solo desde la version 16.8 Hooks - UseState() )
function EstadoAHijo(props) {
    return (
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    );
}



// ------------------ Class Componenet -----------------------
export default class Estado extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        }

        // setInterval(() => {
        //     // No se puede actualizar el estado de manera directa
        //     //this.setState.contador += 1;
        //     this.setState({
        //         contador: this.state.contador + 1,
        //     });
        // }, 1000);
    }

    render() {
        return (
            <div>
                <h2>El State</h2>
                <p>{this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador} />
            </div>
        );
    }
}
import React, {Component} from "react";



// ----------------- Funtional Component - Expresada como arrow funtion --------------
// const Componente = props => <h2>{props.msg}</h2>


// ----------------- Funtional Component -------------------
// function Componente(props) {
//     return <h2>{props.msg}</h2>
// }


// ----------------- Class Component ---------------------
class Componente extends Component {
    render(){
        return<h2>{this.props.msg}</h2>
    }
}

export default Componente;
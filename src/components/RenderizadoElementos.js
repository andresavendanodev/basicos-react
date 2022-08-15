import { element } from "prop-types";
import React, {Component} from "react";
import data from "../helpers/data.json";

function ElementoLista (props) {
    return(
        <li>
            <a href={props.el.web} target="_blank">{props.el.name}</a>
        </li>
    )
}

 export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ["Primavera", "Verano", "Otoño", "Inviernos"],
        }
    }

    render() {
        console.log(data);
        return (
            <div>
                <h1>Renderizado de Elementos</h1>
                {/* Rendeizado con elementos de Javascript */}
                <h3>Estaciones del año</h3>
                <ol>
                    {
                        this.state.seasons.map((season) => <li key={season}>{season}</li> )
                    }
                </ol>
                {/* Renderizado con componentes (dinamicamente) */}
                <h3>Frameworks Frontend JavaScript</h3>
                <ul>
                    {
                        data.frameworks.map((el) => <ElementoLista key={el.id} el={el}/>)
                    }
                </ul>
            </div>
        )
    }
 }
import React from "react";
import PropTypes from 'prop-types';

export default function Propiedades(props) {
    return(
        <div>
            <h2>{props.porDefecto}</h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.booleano ? "Verdadero" : "Falso"}</li>
                <li>{props.arreglo.join(", ")}</li>
                <li>{props.objeto.nombre + " " + props.objeto.apellido}</li>
                <li>{props.arreglo.map(props.funcion).join(", ")}</li>
                <li>{props.elementoReact}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    );
}

/* Propiedades por defectos */
Propiedades.defaultProps = {
    porDefecto: "Las Props",
};

/* Propiedades requeridas */
Propiedades.propTypes = {
    numero: PropTypes.number.isRequired,
};// La propiedad numero va a ser un tipo de prop requerida de numero, solo admite numero.
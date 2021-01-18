import React, {Component} from "react";
import PropTypes from "prop-types";


class Tarea extends Component {

    estiloCompleto(){
        return{
            fontSize:"20px",
            color: this.props.tarea.hecha ? "gray" : "black", //ESTO ES COMO UN IF Y UN ELSE(CONDICIONAL)
            textDecoration: this.props.tarea.hecha ? "line-through" : "none" 
        }
    }

    render(){
        const {tarea} = this.props
        return <div style={this.estiloCompleto()}>
        <h1> {tarea.id}-
        {tarea.titulo}
        </h1>
        <h2>
            {tarea.descripcion}
            {tarea.Hecha}
            <input type="checkbox" onChange={this.props.tareaHecha.bind(this, tarea.id)}></input>
        <button style={boton} /*className="boton"*/ onClick={this.props.borrarTarea.bind(this, tarea.id)}>x</button>
        </h2>
        </div>   
    }
}

Tarea.propTypes = {
    tarea: PropTypes.object.isRequired
}
 const boton = {  //SE PONE CON STYLE Y LLAVES EN EL OBJETO QUE QUEREMOS EDITAR 
    background: "red",  //ESTO ES LO MISMO QUE HACERLO EN CSS PERO HAY QUE HACERLO CON JAVASCRIPT }
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "10px",
    border: "none"
}

export default Tarea
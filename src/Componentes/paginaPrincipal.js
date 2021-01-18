import React from "react";
import {Link} from "react-router-dom";


const paginaPrincipal = () => {
    return <div>
    <div className="principal">
        <Link to="/home" className="titulo"><h1>React🌐</h1></Link>
    </div>
    <div className="nav">
        <Link className="links" to="/home"></Link>
        <Link className="links" to="/tareas">Tareas</Link>
        <Link className="links" to="/posts">Post</Link>
        <Link className="links" to="/contador">Contador</Link>
        <Link className="links" to="/jsx">Jsx</Link>
        <Link className="links" to="/Lista">Lista</Link>
        <Link className="links" to="/Formulario">Form</Link>
        <Link className="links" to="/Tarea1">Tarea1</Link>
        <Link className="links" to="/Saludo">Saludo</Link>
        <Link className="links" to="/Comentario">Comentario</Link>
        <Link className="links" to="/Boton">Boton</Link>
    </div>    
    </div>

}

export default paginaPrincipal;
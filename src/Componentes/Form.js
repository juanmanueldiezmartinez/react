import React, {Fragment, useState} from 'react'

const Form = () => {
    const [datos, setDatos] = useState({
        nombre: "",
        apellido: ""
    })

    const cambioAlTeclear = (event) => {
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }
    const enviarDatos = (event) => {
        event.preventDefault();
        alert("Usuario Ingresado: " + datos.nombre + " " + datos.apellido)
        
    }


    return(
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={enviarDatos}>
                <input onChange={cambioAlTeclear} name="nombre" type="text" className="input" placeholder="Nombre"></input>
                <input onChange={cambioAlTeclear} name="apellido" type="text" className="input" placeholder="Apellido"></input>
                <button className="botonenviar" type="submit">Enviar</button>
            </form>
        </Fragment>
            //<h3>{datos.nombre} - {datos.apellido}</h3>esto arriba de fragment muestra como se van ingresnado letras
    )
};
export default Form;
import React, {Component} from "react"


class FormularioTarea extends Component {

    state = {
        titulo: "",
        descripcion: "" 
    }

    estilosFormulario () {
        return{
            margin: "20px",
            fontSize: "20px",
        }
    }
    metodoEnviar = (e) => {
        this.props.agregarTarea(this.state.titulo, this.state.descripcion)
        e.preventDefault();
    }

    cambioAlEscribir = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        })
    }
    

    render() {
      
        return (
        <form onSubmit={this.metodoEnviar} style={this.estilosFormulario()}>
                <input className="input" type="text"
                name="titulo" 
                placeholder="Escribe una tarea" 
                onChange={this.cambioAlEscribir} 
                value={this.state.titulo}>
                </input>
                <textarea className="input"
                name="descripcion"
                placeholder="Escribe una descripción de la tarea" 
                onChange={this.cambioAlEscribir} 
                value={this.state.descripcion}
                ></textarea>
                <button className="botonenviar" type="submit">Agregue la nueva tarea</button>
            </form>
        )
    }
}


export default FormularioTarea;
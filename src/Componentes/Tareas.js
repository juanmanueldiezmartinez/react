import React, {Component} from "react";
import Tarea from "./tarea"


class Tareas extends Component {
    render() {
        return this.props.tareas.map(tarea => 
        <Tarea 
        tarea={tarea} 
        key={tarea.id}
        borrarTarea={this.props.borrarTarea}
        tareaHecha={this.props.tareaHecha}
        />);
    }
  }

export default Tareas
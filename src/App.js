import './App.css';
import React, {Component, Fragment} from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import tareas from "./Ejemplos/tareas.json"
//AHORA IMPORTAMOS LOS COMPONENTES
import Tareas from "./Componentes/Tareas";
import FormularioTarea from "./Componentes/formularioTarea"
import Posts from './Componentes/post'
import paginaPrincipal from "./Componentes/paginaPrincipal";
import Contador from "./Componentes/Contador";
import Jsx from "./Componentes/Jsx";
import Lista from "./Componentes/Lista";
import Form from './Componentes/Form';
import Tarea1 from "./Componentes/Tarea1";
import Saludo from "./Componentes/Saludo";
import Comentarios from "./Componentes/Comentarios";
import LikeButton from './Componentes/Boton';

class App extends Component {
  
  state = {
    tareas: tareas
  }

  agregarTarea = (titulo, descripcion) => {
    const nuevaTarea = {
      titulo: titulo,
      descripcion: descripcion,
      id: this.state.tareas.length+1
    }
   this.setState({
     tareas: [...this.state.tareas, nuevaTarea]
   })
  }

  borrarTarea = (id) => {
  const nuevastareas =  this.state.tareas.filter(tarea => tarea.id !== id);
  this.setState({tareas: nuevastareas})
  }

  tareaHecha = id => {
    const nuevasTareas = this.state.tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.hecha = !tarea.hecha
      }
      return tarea
    });
    this.setState({tareas: nuevasTareas})
  }
  render(){
  return <div className="alineado">
    <Router>
      <Route component={paginaPrincipal}></Route>
      <Route path="/tareas" render={() => {
      return <div>
      <FormularioTarea agregarTarea/*(Esto es un props(propiedad) para pasar la funcion)*/={this.agregarTarea}/>
      <br></br>
      <br></br>
      <Tareas tareas={this.state.tareas} borrarTarea={this.borrarTarea} tareaHecha={this.tareaHecha}/>
      </div>
    }}></Route>
      <Route path="/posts" component={Posts}></Route>
      <Route path="/contador" component={Contador}></Route>
      <Route path="/jsx" component={Jsx}></Route>
      <Route path="/Lista" component={Lista}></Route>
      <Route path="/Formulario" component={Form}></Route>
      <Route path="/Tarea1" render={() => {
        return <Fragment>
          <Tarea1 nombre="Juan Manuel Diez" profesion="Front End developer"></Tarea1>
          <Tarea1 nombre="Jimena Gomez" profesion="Psicologa"></Tarea1>
        </Fragment>
      }}></Route>
      <Route path="/Saludo" render={() => {
        return <Fragment>
          <Saludo persona="Juanma" edad={25}/*es entre llaves porque asi se ponen los numeros*/></Saludo>
          <Saludo persona="Jimena" edad={24}></Saludo>
        </Fragment>
      }}></Route>
      <Route path="/Comentario" render={() => {
        return ( <Fragment>
          <h2>Comentarios</h2>
        <Comentarios nombre="Juan Manuel" comentario="Cras sit amet nibh libero, in gravida nulla."></Comentarios>
        <Comentarios nombre="Pablo" comentario="Cras sit amet nibh libero, in gravida nulla."></Comentarios>
        </Fragment>
        )
      }}></Route>
      <Route path="/Boton" component={LikeButton}></Route>
    </Router>
    </div>
    
  
}
}
export default App;








































//  TODO ESTO FUE PARA MOSTRAR Y PRACTCAR LOS CONCEPTOS BASICOS
//  function HelloWorld(props){
//    return ( 
//    <div className="hola">
//      <h3>{props.subtitulo}</h3>
//      {props.mitexto}
//      </div> //props.mitexto lo trata como un objeto 
//    );
//  }
// const App = () => <div>Este es mi componente : <HelloWorld/> </div> ESTO ES LO MISMO QUE LO DE ABAJO PERO CON UNA ARROW FUNCTION

// class HelloWorld extends React.Component{
  
//   state = {
//     show: true
//   }
//   botonCambio = () => {
//     this.setState({show: !this.state.show})//eso cambia el estado, si es false cambia a verdadero y viceversa(el signo ! hace eso)
//   }
//   render() {
//     if(this.state.show){
//       return ( 
//         <div className="hola">
//           <h3>{this.props.subtitulo}</h3>
//           {this.props.mitexto}
//           <button onClick={this.botonCambio} className="boton">Cambiar estado del Elemento</button>
//           </div>
//           )
//         }else{
//       return(
//         <div>
//       <h1>Se cambio el estado de los elementos</h1>
//       <h1>No hay elementos para mostrar</h1>
//       <button onClick={this.botonCambio}>Cambiar estado del elemento</button>
//       </div>
//       )
//     }
//   }
// }
// function App() {
//   return (
//     <div>
//       <h1 className="titulo">Este es mi componente :</h1> 
//     <HelloWorld mitexto="Hola mundo" subtitulo="Este es un subtitulo" /> 
//     <HelloWorld mitexto="Hola juan" subtitulo="Este es un tituloooooooo" /> 
//     <HelloWorld mitexto="Hola perro" subtitulo="Este es un titulo" /> 
//      </div>
//   );
// }
import React, {useState} from 'react'; //con imr se hace el atajo de esto


const Jsx = () => {
    const [temperatura, setTemperatura] = useState(21);
    const aumentar= () =>{
        setTemperatura(temperatura + 1);
    }
    const disminuir= () =>{
        setTemperatura(temperatura - 1);
    }
    return (
        <div>
        <h1>Frio o calor?</h1>
         <button onClick={aumentar}>+</button>
        <button onClick={disminuir}>-</button> 
        <div>La temperatura es: {temperatura}</div>
        <h2>
        {
        temperatura >= 24 ? "calor" : "Frio"
        }
        </h2>
        </div>
    );
    
}
export default Jsx;


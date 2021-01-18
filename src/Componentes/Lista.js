import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] = useState([1]);
    
    const agregarElemento = () => {
        setNumero([...arrayNumero, arrayNumero.length + 1])
    };
    return(
        <Fragment>
            <h2>Lista</h2>
            <button className="input" onClick={agregarElemento}>Agregar</button>
            {
                arrayNumero.map((i, index) => 
            <p key={index}>{i}</p>
                )
            }
        </Fragment>
    )
};
export default Lista;
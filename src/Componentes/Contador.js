import React, {useState/*,Fragment */} from 'react'; // este fragment lo podemos usar apra remplazar el div que ponemos pero no usamos

const Contador = () => { // el nombre del componente empieza con mayuscula
   // 1 elemento de los corchetees es el elemento y setNumero es el que lo va a modificar
    const [numero, setNumero] = useState(0);// adentro de los parentesis es el valor inicial de numero, PODRIA SER UN STRING TMB

    const aumentar = () => {
        setNumero(numero + 1)
    }
    const disminuir = () => {
        setNumero(numero - 1)
    }

    return ( // EN EL RETURN SOLO SE PUEDE DEVOLVER UN SOLO ELEMENTO, POR ESO VA EL DIV
    /*<Fragment>*/<div className="divContador"> 
            <button className="input" onClick={aumentar}>+</button>
            <h3>{numero}</h3>
            <button className="input" onClick={disminuir}>-</button>
            
            <div id="whatsapp-icon">
            <a href="https://api.whatsapp.com/send?phone=+5492612482384"><img alt="logo Whatsapp" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/240px-WhatsApp.svg.png" width="50" height="50"></img></a>
            </div>



            </div> //</Fragment> en vez de div
    
    );
}

export default Contador;
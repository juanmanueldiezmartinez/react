import React from 'react'; //con imr se hace el atajo de esto


const Jsx = () => {
    const temperatura = 21;
    return (
        <div>
        <h1>Frio o calor?</h1>
    <div>{}</div>
        <h2>
        {
        temperatura > 20 ? "calor" : "Frio"
        }
        </h2>
        </div>
    );
    
}
export default Jsx;


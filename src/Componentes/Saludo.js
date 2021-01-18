import React, { Fragment } from 'react'


const Saludo = (props) => {
    return(
        <Fragment>
            <div>
                <h2>Hola {props.persona} tu edad es {props.edad}</h2>
            </div>
        </Fragment>
    )
}
export default Saludo
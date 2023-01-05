/**
 * Ejemplo Hooks:
 * -useState()
 * -useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componenete 1
 * Dispone de un contexto que va a terner un valor
 * que recibe desde el padre
*/
const miContexto = React.createContext(null)

const Componente1 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h1>El Token es--: {state.token}</h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}
const Componente2 = () => {
    const state = useContext(miContexto)
    return (
        <div>
            <h2>La sesión es: {state.sesion}</h2>
        </div>
    );
}

export default function MiComponenteConContexto() {

    const estadoInicial = {
        token: '12345',
        sesion: 1
    }
    //Creamos el estado de este componente
    const [sessionData, setSessionData] = useState(estadoInicial);

    function actualizarSesion(){
        setSessionData(
            {
                token: 'JWT123456789',
                sesion: sessionData.sesion +1
            }
        )
    }

    return (
        <div>
            <miContexto.Provider value = { sessionData }>
                {/* Todo lo que esté aquí dentro puede leer los datos de sessionData */}
                {/* Además, sis se actualiza, los componenetes de aquí, tabién lo actualizan */}
                <h1>*** Ejemplo de useState() y useContext() ***</h1>
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>UPDATE Sesión</button>
            </miContexto.Provider>
        </div>
    );
}

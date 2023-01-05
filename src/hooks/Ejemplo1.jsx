/* 
Crear un componente de tipo función y acceder a su estado
privado a través de un hook y, además poder modificarlo
*/
import React, {useState} from "react";

/* import PropTypes from 'prop-types'; */


const Ejemplo1 = () => {
    //valor inicial para un contador
    const valorInicial = 0;
    //valor inicial para una persona
    const personaInicial = {
        nombre: 'martin',
        email: 'martin@imgainagro.com'
    }
    /* 
     *Queremos que el VALORINICIAL Y PERSONAINICIAL sean
     *parte del estado del componente para así poder gestionar su cambio
     *y que éste se vea reflejado en la vista del componente.
     *const [nombreVariable, funciónParaCambiar] = useState(valorInicial)
     */
    const [contador, setContador] = useState(valorInicial);
    const [persona, setPersona] = useState(personaInicial);
    /* Función para actualizar el estado privado que contiene el contador */
    function incrementarContador(){
        setContador(contador +1);
    }
    /* Función para actualizar el estado privado que contiene lA PERSONA */
    function actualizarPersona(){
        setPersona({
            nombre:'pepe',
            email:'pepe@gmail.com'
        })
    }
    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>CONTADOR: {contador}</h2>
            <h2>Datos de la persona:</h2>
            <h3>Nombre: {persona.nombre}</h3>
            <h3>Email: {persona.email}</h3>
            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar Contador</button>
            <button onClick={actualizarPersona}>actualizar Persona</button>
        </div>
    );
};


/* Ejemplo1.propTypes = {

}; */


export default Ejemplo1;

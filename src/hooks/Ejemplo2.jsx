/**
 * Ejemplo de uso de:
 * - useState()
 * - useRef()
 * - useEffect()
 */
import React, {useState, useRef, useEffect} from 'react';

const Ejemplo2 = () => {
    // Vamos a crear dos contadores distinto
    // cada uno en un estado diferente
    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);
    //Vamos a crear una referencia con useRef() para asociar una variable
    //con un elemento del DOM del componente (vista HTML)
    const miRef = useRef();

    function incrementar1(){
        setContador1(contador1 +1 )
    }
    function incrementar2(){
        setContador2(contador2 +1)
    }
    /**Trabajando con UseEffect
     * ? Caso 1: Ejecutar SIEMPRE un snippet de código
     * cada vez que haya un cambio en el estado del componente
     * Se ejecuta aquello que esté dentro del useEffect()
     */
    /* useEffect(() => {
        console.log('Cambio en el estado del componente')
        console.log('Mostrando Referencia a elemento del DOM:')
        console.log(miRef)
    }) */
    /**
     * ?caso 2: Ejecutar solo cuando cambie CONTADOR 1
     * cada vez que haya un cambio en contador1, se ejecuta lo que diga el useEfect
     * En caso de que cambie CONTADOR2 no habrá ejecución
     */
    /* useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrando Referencia a elemento del DOM')
        console.log(miRef)
    }, [contador1]); */
    /**
     * ? Caso 2: Ejecutar SOLO CUANDO CAMBIE CONTADOR1 o CONTADOR2
     * Cada vez que haya un cambio en contador1, se ejecuta lo que diga useEffect()
     * Cada vez que haya un cambio en contador2, se ejecuta lo que diga useEffect()
     */
    useEffect(() => {
        console.log('CAMBIO EN EL ESTADO DEL COMPONENTE')
        console.log('Mostrando Referencia a elemento del DOM')
        console.log(miRef)
    }, [contador1, contador2]);
    
    return (
        <div>
            <h1>*** Ejemplo de useState(), useEffect(), y useRef()**</h1>
            <h1>Contador1: {contador1}</h1>
            <h1>Contador2: {contador2}</h1>
            <h4 ref={miRef}>Ejemplo de elemento referenciado</h4>
            <div>
                <button onClick={incrementar1}>Incrementar contador1</button>
                <button onClick={incrementar2}>Incrementar contador2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;

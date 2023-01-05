/**
 * Ejemplo de uso del método
 * de ciclo de vida en componente clase y el hook de ciclo de vida
 */
import React, { Component, useEffect } from 'react';

export class DidMount extends Component {
    componentDidMount(){
        console.log('Componente antes de que el comp se añadido al DOM')
    }
    render() {
        return (
            <div>
                <h1>DidMount</h1>
            </div>
        );
    }
}

export const DidMountHook = () => {
    useEffect(()=>{
        console.log('Comportamiento antes de que el componente sea añadido al DOM(renderize)')
    },[]) //solo una vez si no indicamos [] se ejecuta todas las veces
    return (
        <div>
            <h1>DidMOunt Ff</h1>
        </div>
    );
}

/**
 * Ejemplo de uso de método componentDidUpdate en componente clase
 * y uso de hook en componente funcional
 */
import React, { Component, useEffect } from 'react';

export class DidUpdate extends Component {
    componentDidMount(){
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    }
    render() {
        return (
            <div>
                <h1>DidUpdate</h1>
            </div>
        );
    }
}

export const DidUpdateHook = () => {
    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado')
    });/* Sin corchetes [] para que se ejecute todas las veces que haya cambio en el componente */
    return (
        <div>
            
        </div>
    );
}



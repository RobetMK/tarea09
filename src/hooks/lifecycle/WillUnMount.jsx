/**
 * Ejemplo de uso del método componentWillUnmount para componente clase
 * Ejemplo de uso del hooks para componente funcional
 * (Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnmount extends Component {
    componentWillUnmount(){
        console.log('Comoportamiento antes de que el componente desaparezzca');
    }
    render() {
        return (
            <div>
                <h1>WillUnmount</h1>
            </div>
        );
    }
}

export const WillUnmountHook = () => {
    useEffect(() => {
        /* effect //aqui no ponemos nada */
        return () => {
            /* cleanup */
            console.log('Comoportamiento antes de que el componente desaparezzca');
        };
    }, []);
    return (
        <div>
            <h1>WillUnmount</h1>
        </div>
    );
}


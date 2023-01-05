import React, { useState } from 'react';
//definiendo estilos en constantes

//?Estilo para usuario logueado
const loggedStyle = {
    color:'white'
}
//?Estilo para usuario no logueado
const unLoggedStyle = {
    color:'tomato',
    fontWeight: 'bold'
}

const GreetingStyled = (props) => {

    const [logged, setLogged] = useState(false);
    const greetingUser = ()=>(<p>Hola, {props.name}</p>)
    const pleaseLogin = ()=>(<p>Please login</p>)
    return (
        <div style={logged ? loggedStyle : unLoggedStyle}>
            {/* { logged ? (<p>Hola, {props.name}</p>) : (<p>Please login</p>) } */}
            { logged ? greetingUser() : pleaseLogin() }
            <button onClick={ ()=>{
                console.log('Botón pulsado')
                setLogged(!logged)
            }}>
                { logged ? 'loggout': 'login'}
            </button>
        </div>
    );
}

export default GreetingStyled;

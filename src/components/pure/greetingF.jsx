import React, { useState } from 'react';
import PropTypes from 'prop-types';


const GreetingF = (props) => {
    //Breve introducción a useState
    const [age, setage] = useState(29);
    const birthday = ()=>{
        //actualizamos el State
        setage(age +1)
    }
    return (
        <div>
                <h1>¡Hola: {props.name} desde componente funcional!</h1>
                {/* <h2>Tu edad es de: { this.state.age}</h2> */}
                <h2>Tu edad es de: {age}</h2>
                <div>
                    {/* <button onClick={this.brithday}> Cumplir años </button> */}
                    <button onClick={birthday}>Cumplir Años</button>
                </div>
            </div>
    );
};


GreetingF.propTypes = {

};


export default GreetingF;

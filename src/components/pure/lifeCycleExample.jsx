/**
 * Ejeplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */
import React, { Component } from 'react';
/* import PropTypes from 'prop-types'; */


class LifeCycleExample extends Component {
    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: cuando se instancia el componente')
    }
    componentWillMount(){
        console.log('wILLMOUNT: Antes del montaje del commponente')
    }
    componentDidMount(){
        console.log('DIDMOUNT: justo al acabar del montaje del componente antes de pintarlo')
    }
    componentWillReceiveProps(nextProps){
        console.log('WillReciveProps: Si va a recibir nuevas props')
    }
    shouldComponentUpdate(nextProps, nextState){
        /**
         * Controlar si el componente debe o no actualizarse
         * Retorna TRUE O FALSE */
    }
    componentWillUpdate(nextProps, nextState){
        console.log('WillUpdate: justo antes de actualizarse')
        
    }
    componentDidUpdate(prevProps, prevState){
        console.log('WillUpdate: justo despues de actualizarse')
        
    }
    componentWillUnmount(){
        console.log('WillUUnmount: justo antes de desaparecer')

    }
    render() {
        return (
            <div>
                <h1>--todo el pedo--</h1>
            </div>
        );
    }
}


/* LifeCycleExample.propTypes = {

}; */


export default LifeCycleExample;

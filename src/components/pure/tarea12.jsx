import React, {useState} from 'react';

/* COMPONENTE TAREA (padre)*/
const Tarea12 = () => {
    /* LOS ESTILOS*/
    let red = 0;
    let green = 0;
    let blue = 0;
    const firstStyle = {
        backgroundColor: `rgb(${red},${green},${blue})`,
        width: '255px',
        height: '255px'
    };
    /* EL ESTATE */
    const [squareStyle, setSquareStyle] = useState(firstStyle);
    const [nIntervId, setNIntervId] = useState();
    /* FUNCIONES */
    const changeColor = ()=>{
        setNIntervId(setInterval(()=>{
        console.log(`Chaning color..${ Math.floor(Math.random() * (250 - 0) + 0)}`);
        let red = Math.floor(Math.random() * (250 - 0) + 0);
        let green = Math.floor(Math.random() * (250 - 0) + 0);
        let blue = Math.floor(Math.random() * (250 - 0) + 0);
        const newStyle = {
            backgroundColor: `rgb(${red},${green},${blue})`,
            width: '255px',
            height: '255px'
        }
        setSquareStyle(newStyle)}, 500))
    }

    const stopChanging = ()=>{
        console.log('STOPED')
        setSquareStyle(firstStyle)
        setNIntervId(()=>clearInterval(nIntervId))
    }
    
    
    /* EL RENDER */
    return (
        <div>
            <Square propStyles={squareStyle} 
                    changeColor={changeColor} 
                    stopChanging={stopChanging}>
            </Square>
        </div>
    );
}

/* COMPONENTE CUADRO(hijo) */
const Square = ({propStyles, changeColor, stopChanging})=>{
    return(
        <div    style={propStyles}
                onMouseEnter={changeColor}
                onMouseLeave={stopChanging}
                onDoubleClick={stopChanging}>Square Component</div>
    )
}

export default Tarea12;

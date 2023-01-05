import React, {useEffect} from 'react';

const AllCycles = () => {
    //useEfect solo uno por componente, el efecto que haga para todos los efectos del componente
    useEffect(() => {
        console.log('componente creado')
        const intervalID = setInterval(()=>{
            document.title = `${new Date()}`
            console.log('Acutalizacion del componente')
        }, 1000)
        return () => {
            console.log('Comonente va a desaparecer')
            document.title = 'tiempo detenido'
            clearInterval(intervalID);
        };
    }, []);
    return (
        <div>
            
        </div>
    );
}

export default AllCycles;

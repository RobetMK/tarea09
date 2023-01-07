import React, {useRef} from 'react';

const Child = ({name, send, update}) => {
    const messageRef = useRef('')
    const nameRef = useRef('')
    function pressButton(){
        const text = messageRef.current.value;
        alert(`Text in Imput: ${text}`)
    }
    function pressButtonParams(text){
        alert(`Text: ${text}`)
    }
    function submitName(e){
        e.preventDefault();
        update(nameRef.current.value)
    }
    return (
        <div style={{background:'cyan', padding:'3px'}}>
            <p onMouseOver={()=>{console.log('onmauseover')}}>Hello, -{name}</p>
            <button onClick={()=>{ console.log('Boton1 pulsado') }}>
                Boton1
            </button>
            <button onClick={pressButton}>
                Boton2
            </button>
            <button onClick={()=>{pressButtonParams('hello')}}>
            {/* <button onClick={pressButtonParams('hello')}>  
            esto no se puede ser así, si no dentro de una arrowfunction*/}
                Boton3
            </button>
            <input 
                placeholder='Send a texto to your Father'
                onFocus={ ()=>console.log('inputFocus') }
                onChange={ (e)=>console.log('INput change:', e.target.value)}
                onCopy={( )=>console.log('TextCopied') }
                ref={messageRef}
            />
            <button onClick={()=>send(messageRef.current.value)}>
                Send Message
            </button>
            <div style={{marginTop:'20px', border:'1px solid black'}}>
                <form onSubmit={submitName}>
                    <input ref={nameRef} placeholder='New Name'/>
                    <button type='submit'>Update Name</button>
                </form>
            </div>
        </div>
    );
}

export default Child;

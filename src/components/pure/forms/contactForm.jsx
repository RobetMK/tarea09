import React, {useRef} from 'react';
import { PropTypes } from 'prop-types';
import { TYPES } from '../../../models/types.enum';
import { Contact } from '../../../models/contact.class';

const ContactForm = ({add}) => {
    const nameRef = useRef('')
    const surnameRef = useRef('')
    const numberRef = useRef('')
    const typeRef = useRef(TYPES.PERSONAL)

    function addContact(e){
        e.preventDefault()
        const newContact = new Contact(
            nameRef.current.value,
            surnameRef.current.value,
            numberRef.current.value,
            false,
            true,
            typeRef.current.value
        )
        add(newContact)
    }
    return (
        <form onSubmit={addContact} className='d-flex justify-content align-items-center mb-4'>
            <div className='form-outline flex-fill'>
                <input  ref={nameRef} 
                        id='inputName' 
                        type='text' 
                        className='form-control form-control-lg' 
                        required
                        placeholder='Name'
                />
                <input  ref={surnameRef} 
                        id='inputSurname' 
                        type='text' 
                        className='form-control form-control-lg' 
                        required
                        placeholder='Surname'
                />
                <input  ref={numberRef} 
                        id='inputNumber' 
                        type='text' 
                        className='form-control form-control-lg' 
                        required
                        placeholder='Number'
                />
                <label htmlFor='selectLevel' className='sr-only'>TYPE--</label>
                <select ref={typeRef} defaultValue={TYPES.PERSONAL} id='selectType'>
                    <option value={TYPES.BUSSINESS}>BUSSINESS</option>
                    <option value={TYPES.PERSONAL}>PERSONAL</option>
                    <option value={TYPES.WORK}>WORK</option>
                </select> 
                <button type='submit' className='btn btn-success btn-lg ms-3 py-0'>Add+</button>
            </div>
        </form>
    );
}

ContactForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default ContactForm;

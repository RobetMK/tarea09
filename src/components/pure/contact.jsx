import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';
import { TYPES } from '../../models/types.enum';
//importamos la hoja de estilos task.scss
import '../../styles/contact.scss';

const ContactComponent = ({contact, connect, remove, hide}) => {

    useEffect(() => {
        console.log('Child: Contact created first time')
        return () => {
            console.log(`Child: ${contact.name} is going to unmount`)
        };
    }, [contact]);
    /**
     * Function that returns a Badge
     * depending on the level of the task
     */
    function contactTypeBadge(){
        switch(contact.type){
            case TYPES.PERSONAL:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>
                )
            
            case TYPES.WORK:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-warning'>
                            {contact.type}
                        </span>
                    </h6>
                )
            case TYPES.BUSSINESS:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-danger'>
                            {contact.type}
                        </span>
                    </h6>
                )
            default: break;
        }
    }
    /**
     * Fuction that returns icon of completed task
     */
    function contactIconConected(){
        if(contact.conected){
            return ( <i onClick={()=>connect(contact)} className='bi-toggle-on contact-action' style={{color:'green', fontWeight:'bold'}}></i> )
        } else {
            return ( <i onClick={()=>connect(contact)} className='bi-toggle-off contact-action' style={{color:'grey'}}></i> )
        }
    }
    function contactIconHide(){
        if(contact.hidden){
            return ( 
                <i onClick={()=>hide(contact)} className="bi bi-eye-fill contact-hider"  style={{color:'blue', fontWeight:'bold'}}></i> 
            )
        } else {
            return ( 
                <i onClick={()=>hide(contact)} className="bi bi-eye-fill contact-hider"  style={{color:'red', fontWeight:'bold'}}></i> 
            )
        }
    }
    
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.hidden ? contact.name :'' }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.hidden ? contact.surname :'' }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.hidden ? contact.number :'' }</span>
            </td>
            <td className='align-middle'>
                <span>{ contact.hidden ? contactTypeBadge() :'' }</span>
            </td>
            <td className='align-middle'>
            { contact.hidden ? contactIconConected() :'' }
            </td>
            <td className='align-middle'>
                {contact.hidden ? <i  className='bi-trash contact-action' 
                    onClick={()=>remove(contact)}
                    style={{color:'tomato', fontSize:'20px'}}>
                </i>:''}
            </td>
            <td className='align-middle'>
                {contactIconHide()}
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
    hide: PropTypes.func.isRequired
};


export default ContactComponent;

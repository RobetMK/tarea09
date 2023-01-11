import React, {useState, useEffect} from 'react';
import { TYPES } from '../../models/types.enum';
import { Contact } from '../../models/contact.class';
import ContactForm from '../pure/forms/contactForm';
import ContactComponent from '../pure/contact';
/* import PropTypes from 'prop-types'; */


const ContactListComponent = () => {
    const defaultContact1 = new Contact('Robert', 'Smith','888455332', false, true, TYPES.PERSONAL)
    const defaultContact2 = new Contact('Sam', 'Mackenzie','888232335', true, true, TYPES.BUSSINESS)
    const defaultContact3 = new Contact('Ian', 'Godson','7353781754', false, true, TYPES.WORK)
    //Estado del componente
    const [contacts, setContacs] = useState([defaultContact1, defaultContact2, defaultContact3]);
    const [loading, setLoading] = useState(true);//not used OJOTE
    //Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Father: [Contact state has been modified')
        setLoading(false)
        return () => {
            console.log('Father: ....Contact...')
        };
    }, [contacts]);
    
    function conectContact(contact){
        console.log('Conected Contact::: ', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].conected = !tempContacts[index].conected
        //We update the state of the componente with the new list of task and it will update the
        //Iteration of the task in order to show the task updated
        setContacs(tempContacts)
    }

    function deleteContact(contact){
        console.log('Deleted Contact: ', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts.splice(index,1)
        setContacs(tempContacts)
    }
    function hideContact(contact){
        console.log('Hiden Contact: ', contact)
        const index = contacts.indexOf(contact)
        const tempContacts = [...contacts]
        tempContacts[index].hidden = !tempContacts[index].hidden
        setContacs(tempContacts)
    }

    function addContact(contact){
        console.log('Contact added: ', contact)
        const tempContacts = [...contacts]
        tempContacts.push(contact)
        setContacs(tempContacts)
    }

    return (
        <div>
            <ContactForm add = {addContact} ></ContactForm>
            <div className='col-12'>
                <div className='card'>
                    {/* Card header (title) */}
                    <div className='card-header p-3'>
                        <h5>Your Contacts:</h5>
                    </div>
                    {/* Card Body (content) */}
                    <div 
                        className='card-body p-3' 
                        style={{position:'relative', height:'400px'}}
                        data-mdb-perfect-scrollbar='true'
                    >
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name </th>
                                    <th scope='col'>Surname </th>
                                    <th scope='col'>Number </th>
                                    <th scope='col'>Type</th>
                                    <th scope='col'>Conected</th>
                                    <th scope='col'>Del</th>
                                    <th scope='col'>See</th>
                                </tr>
                            </thead>
                            <tbody>
                                { 
                                    contacts.map( (contact, index)=>{
                                        return(
                                            <ContactComponent 
                                                key = {index} 
                                                contact = {contact}
                                                connect = {conectContact}
                                                remove = {deleteContact}
                                                hide = {hideContact}
                                            ></ContactComponent>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};


/* ContactListComponent.propTypes = {

}; */


export default ContactListComponent;

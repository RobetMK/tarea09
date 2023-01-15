import React, {/* useRef */} from 'react';
import { PropTypes } from 'prop-types';
/* Models */
import { LEVELS } from '../../../models/levels.enum';
import { Task } from '../../../models/task.class';
/* Yup y Formik */
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

/* Component Form */
const TaskForm = ({add, length}) => {
    const initialTask = {
        name: '',
        description: '',
        completed: false,
        level: LEVELS.NORMAL
    }
    const taskSchema = Yup.object().shape(
        {
            name:Yup.string()
                        .min(6, 'Taskname Too Short!')
                        .max(20, 'Taskname Too Long!')
                        .required('Taskname Required'),
            description:Yup.string()
                        .required('Description is required')
                        .min(6, 'Description Too Short!')
                        .max(30, 'Description Too Long!'),
            level:    Yup.string()
                        .oneOf([LEVELS.NORMAL, LEVELS.URGENT, LEVELS.BLOCKING], 'You must select a Level: Normal / Urgent / Blocking')
                        .required('Level is required')
        }
    )
    /* const nameRef = useRef('')
    const descriptionRef = useRef('')
    const levelRef = useRef(LEVELS.NORMAL) */

    //SE EJECTUAVA EN EL ONSUBMIT
    /* function addTask(e, values){
        e.preventDefault()
        const newTask = new Task(
            values.name,
            values.description,
            false,
            values.level
        )
        add(newTask)
    } */
    return (
        <div style={{border: '1px solid black', padding: '5px'}}>
        <h5>Formulario con Formik y Yup:</h5>
        <Formik
                // *** Initial values that the form will take
                initialValues={initialTask}
                // *** Yup Validation Schema ***
                validationSchema = {taskSchema}
                // *** onSubmit Event 
                onSubmit = {async(values)=>{
                    await new Promise((r)=>setTimeout(r,2000));
                    alert(JSON.stringify(values, null, 2));
                    //we save data in the browser
                    //localStorage.setItem('credential', values)
                    const newTask = new Task(
                        values.name,
                        values.description,
                        false,
                        values.level
                    )
                    add(newTask)
                } }
        >
        {/* We obtain props from Formik */}
        {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
            <Form>
                <label htmlFor="name">Name</label>
                <Field id="name" name="name" placeholder="Your task" type="text" className='form-control form-control-lg'/>
                {/* name Errors */}
                {
                    errors.name && touched.name &&
                    (
                        <div>
                        <ErrorMessage name="name"></ErrorMessage>
                        </div>
                    )
                }

                <label htmlFor="description">Description</label>
                <Field id="description" name="description" placeholder="Description" type="text" className='form-control form-control-lg' />
                {/* description Errors */}
                {
                    errors.description && touched.description &&
                    (
                        <div>
                        <ErrorMessage name="description"></ErrorMessage>
                        </div>
                    )
                }

                <label htmlFor="selectLevel">Priority</label>
                <select id='selectLevel' className='form-control'>
                    <option value={LEVELS.NORMAL} style={{backgroundColor:'blue', color:'white'}}>NORMAL</option>
                    <option value={LEVELS.URGENT} style={{backgroundColor:'yellow'}}>URGENT</option>
                    <option value={LEVELS.BLOCKING} style={{backgroundColor:'red'}}>BLOCKING</option>
                </select>
                <button type='submit' className='btn btn-success btn-lg ms-2'>
                    {length > 0 ? 'Add new':'Create first'}
                </button>
                {isSubmitting ? (<p>Creating your task...</p>) : null}
            </Form>
        )}
        
        </Formik>
        </div>
    );
}

TaskForm.protoTypes = {
    add: PropTypes.func.isRequired
}

export default TaskForm;

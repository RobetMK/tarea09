import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
                .email('Invalid email format')
                .required('Email is required'),
        password: Yup.string()
                .required('Password is required')
    }
);

const LoginPage = () => {

    const navigate = useNavigate()

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <button onClick={ ()=>{ navigate('/') } }>Go Home</button>
            <h1>Login Page</h1>
            <Formik
                // *** Initial values that the form will take
                initialValues = {initialCredentials}
                // *** Yup Validation Schema ***
                validationSchema = {loginSchema}
                // *** onSubmit Event 
                onSubmit = {async(values)=>{
                    await new Promise((r)=>setTimeout(r,2000));
                    alert(JSON.stringify(values, null, 2));
                    //we save data in the browser
                    localStorage.setItem('credentialDos', JSON.stringify(values))
                } }
            >
                {/* We obtain props from Formik */}
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="email">Email</label>
                        <Field id="email" name="email" placeholder="example@email.com" type="email" />
                        {/* email Errors */}
                        {
                            errors.email && touched.email &&
                            (
                                <div>
                                <ErrorMessage name="email"></ErrorMessage>
                                </div>
                            )
                        }
                        <label htmlFor="password">password</label>
                        <Field
                            id="password"
                            name="password"
                            placeholder="password"
                            type="password"
                        />
                        {/* password Errors */}
                        {
                            errors.password && touched.password &&
                            (
                                <div>
                                <ErrorMessage name='password'></ErrorMessage>
                                </div>
                            )
                        }
                        <button type="submit">Entrar</button>
                        {isSubmitting ? (<p>Login your credential...</p>) : null}
                    </Form>
                )}      
            </Formik>
        </div>
    );
}

export default LoginPage;

import { Formik, Field, Form, ErrorMessage } from 'formik';
import React from 'react';
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

const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }

    return (
        <div>
            <h4>Login Formik</h4>
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
                    localStorage.setItem('credential', values)
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
                        <button type="submit">Login</button>
                        {isSubmitting ? (<p>Login your credential...</p>) : null}
                    </Form>
                )}                
            </Formik>
        </div>
    );
}

export default LoginFormik;

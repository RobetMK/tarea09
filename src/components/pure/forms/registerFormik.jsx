import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
//Models
import {User} from '../../../models/user.class';
import { ROLES } from '../../../models/roles.enum';

const RegisterFormik = () => {

    let user = new User()

    const initialValues = {
        username: '',
        email: '',
        password: '',
        confirm: '',
        role: ROLES.USER
    }
    const registerSchema = Yup.object().shape(
        {
            username:Yup.string()
                        .min(6, 'Username Too Short!')
                        .max(12, 'Username Too Long!')
                        .required('Username Required'),
            email:   Yup.string()
                        .email('Invalid email format')
                        .required('Email is required'),
            role:    Yup.string()
                        .oneOf([ROLES.USER, ROLES.ADMIN], 'You must select a Role: User / Admin')
                        .required('Role is required'),
            password:Yup.string()
                        .min(8, 'Password Too Short!')
                        .required('Password is required')
                        .matches(``),
            confirm: Yup.string()
                        .when("password",{
                            is: value => (value && value.length > 0 ? true : false),
                            then: Yup.string().oneOf(
                                [Yup.ref("password")],
                                '¡Passwords must match!'
                            )
                        }).required('You must confirm the password')
        }
    )
    const submit = (values)=>{
        alert('Register user')
    }
    return (
        <div>
            <h4>Register Formik</h4>
            <Formik
                // *** Initial values that the form will take
                initialValues={initialValues}
                // *** Yup Validation Schema ***
                validationSchema = {registerSchema}
                // *** onSubmit Event 
                onSubmit = {async(values)=>{
                    await new Promise((r)=>setTimeout(r,2000));
                    alert(JSON.stringify(values, null, 2));
                    //we save data in the browser
                    //localStorage.setItem('credential', values)
                } }
            >
            {/* We obtain props from Formik */}
                {({ values, errors, touched, isSubmitting, handleChange, handleBlur }) => (
                    <Form>
                        <label htmlFor="username">Username</label>
                        <Field id="username" name="username" placeholder="Your username" type="text" />
                        {/* username Errors */}
                        {
                            errors.username && touched.username &&
                            (
                                <div>
                                <ErrorMessage name="username"></ErrorMessage>
                                </div>
                            )
                        }

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

                        <label htmlFor="confirm">confirm</label>
                        <Field
                            id="confirm"
                            name="confirm"
                            placeholder="confirm password"
                            type="confirm"
                        />
                        {/* confirm Errors */}
                        {
                            errors.confirm && touched.confirm &&
                            (
                                <div>
                                <ErrorMessage name='confirm'></ErrorMessage>
                                </div>
                            )
                        }
                        <button type="submit">Register Acount</button>
                        {isSubmitting ? (<p>Sending your credential...</p>) : null}
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default RegisterFormik;

import React from 'react';


import { ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import './Login.css';

const Login = () => {
    const handleSubmit = values => console.log(values);
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })

  
        return(
            <>
                <h1>Uma Globo só sua.</h1>
                <p>Tudo em um só lugar e do seu jeito!</p>
                <Formik 
                    initialValues={{}} 
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className='Login'>
                        <div className='Login-Group'>
                            <Field 
                                className='Login-Field' 
                                name='email'
                            />
                            <ErrorMessage 
                                className='Login-Error' 
                                name='email' 
                                component='span'>
                            </ErrorMessage>
                        </div>
                        <div className='Login-Group'>
                            <Field 
                                className='Login-Field' 
                                name='password'
                            />
                            <ErrorMessage 
                                className='Login-Error' 
                                name='password' 
                                component='span'>
                            </ErrorMessage>
                        </div>
                        <button className='Login-Btn' type='submit'>ENTRAR</button>
                    </Form>
                </Formik>
            </>
        )
    }
export default Login;
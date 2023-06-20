import React from "react"

import {Formik, Form, Field} from "formik";

import * as Yup from "yup"
export default function Login(){
    const initialValues={
        fname:"",
        lname:"",
        password:""
    }
    const validationSchema= Yup.object().shape(
        {
            fname: Yup.string()
                .max(20)
                .min(10)
                .required(),
                lname:Yup.string()
                .max(10)
                .required(),
                password:Yup.string()
                .max(15)
                .min(8)
            
        }
    )
    const onSubmit = (values) =>{
        console.log(values);
    }
    return(
        <>
            <div className="w-full h-full">
                <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                    {(props)=>(
                        <Form className="w-5/12 m-auto bg-red-300 h-80 pt-6 rounded-md space-y-6 mt-24">
                            <div className="w-9/12 grid m-auto">
                            <span className="text-white font-medium">First Name</span>
                            <Field as="input" name="fname" type="text" className="focus:outline-none focus:ring focus:border-blue-30"/>
                           
                            </div>
                            <div className="w-9/12 grid m-auto">
                            <span className="text-white font-medium">Last Name</span>
                            <Field as="input" name="lname" type="text" className="focus:outline-none focus:ring focus:border-blue-30"/>
                            
                            </div>
                            <div className="w-9/12 grid m-auto">
                            <span className="text-white font-medium">Password</span>
                            <Field as="input" name="password" className="focus:outline-none focus:ring focus:border-blue-30"/>
                         
                            </div>
                            <div>
                                <button type="submit" className="bg-blue-900 ml-8 rounded-md text-white w-24 h-8">Log in</button>
                            </div>
                        </Form>
                    )

                    }
                </Formik>
            </div>
        </>
    )
}
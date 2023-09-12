import { useFormik } from 'formik'
import * as Yup from 'yup'
import { loginSchema } from '../utils/schema'
import { useState } from 'react'
import { Textbox } from '../components/Textbox'
import { registerConfig } from '../helpers/registerConfig'

export const Login =()=>{
const [login,setLogin] = useState({
    email:"",
    password:""
});
 const formik = useFormik({
    initialValues:login,
    validationSchema:loginSchema,
    onSubmit:(values)=>{
        console.log(values);
    }
 });


 return(
    <form className='container mt-5'>
      <Textbox textboxConfig={registerConfig.firstName} formik={formik}/>
      <Textbox textboxConfig={registerConfig.lastName} formik={formik}/>
      <Textbox textboxConfig={registerConfig.email} formik={formik}/>
      <Textbox textboxConfig={registerConfig.password} formik={formik}/>
        
        <button className='btn btn-success' onClick={formik.handleSubmit}>Login</button>
    </form>
 )
}
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
       <div class="row mb-3">
            <label for="email"
                class="col-sm-2 col-form-label">Email</label>
            <div class="col-sm-4">
                <input type="email"
                    class="form-control"
                    name="email"
                    value={formik.values.email}
                    id="email" 
                    placeholder="Enter Email"
                    onChange={formik.handleChange}
                    />
                    <small class="form-text text-danger">{formik.errors.email}</small>
                    
            </div>
        </div>
        <div class="row mb-3">
            <label for="email"
                class="col-sm-2 col-form-label">Password</label>
            <div class="col-sm-4">
                <input type="password"
                    class="form-control"
                    name="password"
                    value={formik.values.password}
                    id="password" 
                    placeholder="Enter Password"
                    onChange={formik.handleChange}
                    />
                    <small class="form-text text-danger">{formik.errors.password}</small>
                    
            </div>
        </div>
        <button className='btn btn-success' onClick={formik.handleSubmit}>Login</button>
    </form>
 )
}
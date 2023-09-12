import * as Yup from 'yup';
export const loginSchema = ()=>{
    return Yup.object().shape({
        firstName:Yup.string().required('First Name is required'),
        lastName:Yup.string().required('Last Name is required'),
        email:Yup.string()
        .required('Email is required')
        .email('Enter a valid email'),
        password:Yup.string().required('Password is required')
    })
};
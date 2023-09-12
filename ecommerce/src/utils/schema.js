import * as Yup from 'yup';
export const loginSchema = ()=>{
    return Yup.object().shape({
        email:Yup.string()
        .required('Email is required')
        .email('Enter a valid email'),
        password:Yup.string().required('Password is required')
    })
};
import { useState } from "react";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../helpers/registerConfig"

export const Register = () => {
    const [register, setProfile] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "",
        password: "",
        confirmPassword: ""
    });
    const handleChange = (e) => {
        console.log(register);
        const newProfile = register;
        console.log(e.target.name+"=>"+e.target.value);
        newProfile[e.target.name] = e.target.value
       
        setProfile({...newProfile});
    };

    return (
        <div className="container mt-5">
            <form >
                <Textbox textboxConfig={registerConfig.firstName} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.lastName} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.email} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.password} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.confirmPassword} handleChangeEvent={handleChange} />
            </form>
            {JSON.stringify(register)}
        </div>
    )
}
import { useEffect, useState } from "react";
import { Textbox } from "../components/Textbox"
import { registerConfig } from "../helpers/registerConfig"
import { Dropdown } from "../components/Dropdown";

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
        console.log(e.target.name + "=>" + e.target.value);
        newProfile[e.target.name] = e.target.value

        setProfile({ ...newProfile });
    };

    const employees = [
        { name: "kiran", salary: 30000 }
        , { name: "ravi", salary: 40000 }
        , { name: "john", salary: 50000 }];
    const buildEmployeeRows = () => {
        return employees.map((item, index) => {
            return (<tr>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.salary}</td>
                    </tr>)
        })
    };
    const [countryList,setCountryList] = useState([]);

    useEffect(()=>{
        fetch("https://restcountries.com/v2/all").then(x=>{
            return x.json()
        }).then(y=>{
            console.log(y);
            const mappedList = y.map(x=>{
                return {value:x.alpha2Code,name:x.name}
            });
            setCountryList(mappedList);
            registerConfig.country.list = mappedList;
        })

    },[])


    return (
        <div className="container mt-5">
            <form >
                <Textbox textboxConfig={registerConfig.firstName} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.lastName} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.email} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.password} handleChangeEvent={handleChange} />
                <Textbox textboxConfig={registerConfig.confirmPassword} handleChangeEvent={handleChange} />
                <Dropdown dropdownConfig={registerConfig.country} handleChangeEvent={handleChange} />
            </form>
         {JSON.stringify(register)}
        </div>
    )
}
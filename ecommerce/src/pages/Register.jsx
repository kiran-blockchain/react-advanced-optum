import { Textbox } from "../components/Textbox"
import { registerConfig } from "../helpers/registerConfig"

export const Register = () => {
    const handleChange = (e) => {
        console.log(e.target.name + "=>" + e.target.value)
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
        </div>
    )
}
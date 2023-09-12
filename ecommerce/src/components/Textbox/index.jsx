export const Textbox = ({ textboxConfig,formik }) => {
    return (
        <div class="row mb-3">
            <label for={textboxConfig.id}
                class="col-sm-2 col-form-label">{textboxConfig.label}</label>
            <div class="col-sm-4">
                <input type={textboxConfig.type}
                    class="form-control"
                    name={textboxConfig.name}
                    value={formik.values[textboxConfig.name]}
                    id={textboxConfig.id} 
                    placeholder={textboxConfig.placeHolder}
                    onChange={formik.handleChange}
                    />
                     <small class="form-text text-danger">{formik.errors[textboxConfig.name]}</small>
                    
            </div>
        </div>
    )
}
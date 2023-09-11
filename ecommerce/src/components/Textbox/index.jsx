export const Textbox = ({ textboxConfig,handleChangeEvent }) => {
    return (
        <div class="row mb-3">
            <label for={textboxConfig.id}
                class="col-sm-2 col-form-label">{textboxConfig.label}</label>
            <div class="col-sm-4">
                <input type={textboxConfig.type}
                    class="form-control"
                    name={textboxConfig.name}
                    value={textboxConfig.value}
                    id={textboxConfig.id} 
                    placeholder={textboxConfig.placeHolder}
                    onChange={e=>{
                        // console.log(e.target.name + "=>"+ e.target.value)
                        handleChangeEvent(e);
                    }}
                    />
                    
            </div>
        </div>
    )
}
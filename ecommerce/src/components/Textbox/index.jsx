export const Textbox = ({ textboxConfig }) => {
    return (
        <div class="row mb-3">
            <label for={textboxConfig.id}
                class="col-sm-2 col-form-label">{textboxConfig.label}</label>
            <div class="col-sm-4">
                <input type={textboxConfig.type}
                    class="form-control"
                    name={textboxConfig.name}
                    value={textboxConfig.value}
                    id={textboxConfig.id} />
            </div>
        </div>
    )
}
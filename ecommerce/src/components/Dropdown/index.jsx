export const Dropdown =({dropdownConfig})=>{
    const buildList =()=>{
       return dropdownConfig.list.map((item,index)=>{
        return (<option key={index} value={item.value}>{item.name}</option>)
       })
    }
    return(
        <div class="row mb-3">
        <label for={dropdownConfig.id}
            class="col-sm-2 col-form-label">{dropdownConfig.label}</label>
        <div class="col-sm-4">
            <select 
                class="form-control"
                name={dropdownConfig.name}
                value={dropdownConfig.value}
                id={dropdownConfig.id} 
                >
                    <option value="">{dropdownConfig.placeHolder}</option>
                     {buildList()}
                </select>
                
        </div>
    </div>
    )
}
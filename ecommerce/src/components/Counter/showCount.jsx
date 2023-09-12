import { useSelector } from "react-redux"

export const ShowCount = ()=>{
    const counter = useSelector(x=>x.counter);
    return(
        <label>count:{counter.counter}</label>
    )
}
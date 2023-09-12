import { useDispatch } from "react-redux"
import { increment } from "../../store/counterSlice";

export const Increment =()=>{
    const dispatch = useDispatch();
    return(
        <button className="btn btn-primary" onClick={e=>{
            dispatch(increment())
        }}>Increment</button>
    )
}
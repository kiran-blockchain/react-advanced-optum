import { useEffect, useState } from "react"
import { ProductList } from "../components/ProductList/Index"
import { getApi } from "../service/api";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";

export const Products = () => {
    //const [products, setProducts] = useState([])
    const data = useSelector(x => x.product)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProducts())
        // const fetchData = async () => {
        //     try {
        //         const result = await getApi('https://dummyjson.com/products');
        //         console.log(result);
        //         setProducts(result.products);
        //     }catch(ex){
        //         console.log(ex);
        //     }
        // }
        // fetchData();
        // fetch("https://dummyjson.com/products").then(x => {
        //     return x.json()
        // }).then(y => {
        //     console.log(y);
        //     setProducts(y.products);
        // })
    }, [dispatch]);
    const showLoading =()=>{
        return data.isLoading? <div>Loading.......</div>:null;
    }
    const showError =()=>{
        return data.error? <div>Error in fetching</div>:null;
    }
    return (
        // <div className="row">
        <div>
            {showLoading()}
            {showError()}
            <ProductList list={data.apiResponse.products} />
        </div>
    )
}



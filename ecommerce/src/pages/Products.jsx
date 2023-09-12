import { useEffect, useState } from "react"
import { ProductList } from "../components/ProductList/Index"
import { getApi } from "../service/api";

export const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const result = await getApi('https://dummyjson.com/products');
                console.log(result);
                setProducts(result.products);
            }catch(ex){
                console.log(ex);
            }
        }
        fetchData();
        // fetch("https://dummyjson.com/products").then(x => {
        //     return x.json()
        // }).then(y => {
        //     console.log(y);
        //     setProducts(y.products);
        // })
    }, []);
    return (
        <div className="row">
            <ProductList list={products} />
        </div>)
}
export const XYS =()=>{}


import { useEffect, useState } from "react"
import { ProductList } from "../components/ProductList/Index"

export const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://dummyjson.com/products").then(x => {
            return x.json()
        }).then(y => {
            console.log(y);
            setProducts(y.products);
        })
    }, []);
    return (
        <div className="row">
            <ProductList list={products} />
        </div>)
}
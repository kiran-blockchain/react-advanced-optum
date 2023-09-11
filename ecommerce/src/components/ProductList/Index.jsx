import { Product } from "../Product"

export const ProductList = ({ list }) => {
    const buildProductList = () => {
        return list.map((item, index) => {
            return (<div className="col-md-3 mt-5"> <Product key={index} product={item} /></div>)
        })
    }
    return (<div className="row">
        {buildProductList()}
    </div>)
}
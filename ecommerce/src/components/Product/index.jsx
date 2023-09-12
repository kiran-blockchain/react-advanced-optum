import { useContext } from "react"
import "./style.css"
import { CartContext } from "../../providers/cartProvider"
export const Product = ({ product }) => {
    //fetch the cart context
    const cartCtx = useContext(CartContext);
    return (
       
            <div class="card imageStyle mt-4 p-5" >
                <img src={product.images[0]} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">{product.price}</a>
                   
                    <button class="btn btn-primary mt-4" onClick={e=>{
                        cartCtx.addToCart(product);
                    }}>Add To Cart</button>
                </div>
            </div>
    )
}
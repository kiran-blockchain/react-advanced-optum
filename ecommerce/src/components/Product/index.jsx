import "./style.css"
export const Product = ({ product }) => {
    return (
       
            <div class="card imageStyle mt-4 p-5" >
                <img src={product.images[0]} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{product.title}</h5>
                    <p class="card-text">{product.description}</p>
                    <a href="#" class="btn btn-primary">{product.price}</a>
                </div>
            </div>
    )
}
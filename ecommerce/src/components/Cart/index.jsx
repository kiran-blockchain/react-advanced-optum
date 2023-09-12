import { useSelector } from "react-redux"

export const Cart =()=>{
    const cart = useSelector(x=>x.cart)
    // console.log(mystore.cart.cartItems);
    // console.log(mystore.counter.cartItems);
    const getTotal = ()=>{
        let total =0;
        cart.cartItems.forEach(x=>{
            total+=x.price;
        });
        return total;
    }
    return(
        <table class="table table-striped">
            <thead>
                <th>
                    S.No
                </th>
                <th>
                    Name
                </th>
                <th>
                    Price
                </th>
            </thead>
            <tbody>
                {cart.cartItems.map((item,index)=>{
                    return<tr>
                        <td>{index+1}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                    </tr>
                })}
                <tr>
                    <td></td>
                    <td><h6>Total</h6></td>
                    <td>{getTotal()}</td>
                </tr>
            </tbody>
        </table>
    )

}
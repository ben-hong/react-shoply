import { useContext } from "react";
import ShoplyContext from "./shoplyContext";

function ShoppingCart() {
    const { shoppingCart } = useContext(ShoplyContext);

    console.log(shoppingCart)

    return (<div> 
        item count: {shoppingCart.length}
    </div>)
}

export default ShoppingCart;
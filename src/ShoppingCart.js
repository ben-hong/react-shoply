import { useContext } from "react";
import ShoplyContext from "./shoplyContext";

function ShoppingCart() {
    const { shoppingCart } = useContext(ShoplyContext);

    return (<div> 
        item count: {shoppingCart.length}
    </div>)
}

export default ShoppingCart;
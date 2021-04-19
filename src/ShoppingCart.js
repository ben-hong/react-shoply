
import { useContext } from "react";
import ShoplyContext from "./shoplyContext";
import Item from "./Item";


function ShoppingCart() {
    const { shoppingCart } = useContext(ShoplyContext);

    const itemFreq = {};

    // put in helper function
    for (let item of shoppingCart) {
        itemFreq[item.name] ?
            itemFreq[item.name].count += 1 :
            itemFreq[item.name] = { count: 1, obj: item };
    }

    let itemNames = Object.keys(itemFreq);

    return (
        <div>
            {itemNames.map(name =>
                <p key={name}>
                    <img src={itemFreq[name].obj.image_url}></img>
                    <Item item={itemFreq[name].obj} />
                    count: {itemFreq[name].count}
                </p>)}
            item count: {shoppingCart.length}
        </div>)
}

export default ShoppingCart;

import Item from "./Item";
import { useContext } from "react";
import ShoplyContext from "./shoplyContext";
function ItemList() {
    const { products } = useContext(ShoplyContext);
    const productKeys = Object.keys(products);

    return (
        <ul>
            {productKeys
                .map(key => <Item key={key} item={products[key]} />)}
        </ul>
    )
}

export default ItemList;
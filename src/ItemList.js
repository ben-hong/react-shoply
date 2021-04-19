import products from "./data.json";
import Item from "./Item";

function ItemList() {
    const productKeys = Object.keys(products.products);

    return (
        <ul>
            {productKeys
                .map(key =>
                (<li>
                    <Item key ={key} id={key} item={products.products[key]} />
                </li>))}
        </ul>
    )
}

export default ItemList;
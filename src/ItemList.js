import Item from "./Item";
import { useContext } from "react";
import ShoplyContext from "./shoplyContext";
import { Link } from 'react-router-dom';
function ItemList() {
    const { products } = useContext(ShoplyContext);
    const productKeys = Object.keys(products);

    return (
        <div>
            <ul>
                {productKeys
                    .map(key => 
                            <li><Item key={key} item={products[key]}/></li>
                        )
                }
            </ul>

            <Link to='/cart'> Shopping Cart</Link>

        </div>

    )
}

export default ItemList;
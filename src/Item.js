import { useContext } from "react";
import DispatchContext from "./dispatchContext";
import { Link } from 'react-router-dom';

function Item({ item }) {

    const dispatch = useContext(DispatchContext);

    function addItem() {
        dispatch({ type: "addItem", item })
    }

    function removeItem() {
        dispatch({ type: "removeItem", name: item.name })
    }

    return (
        <div>
            <Link to={`/products/${item.name}`}> 
                {item.name}
             </Link>
            <button onClick={addItem}>Add to Shopping Cart</button>
            <button onClick={removeItem}>Remove from Shopping Cart</button>
        </div>
    );
}

export default Item;
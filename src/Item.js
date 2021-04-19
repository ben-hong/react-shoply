import { useContext } from "react";
import DispatchContext from "./dispatchContext";

function Item({ item }) {

    const dispatch = useContext(DispatchContext);

    function addItem() {
        dispatch({ type: "addItem", item })
    }

    function removeItem() {
        dispatch({ type: "removeItem", name: item.name })
    }

    return (
        <li>
            {item.name}
            <button onClick={addItem}>Add to Shopping Cart</button>
            <button onClick={removeItem}>Remove from Shopping Cart</button>
        </li>
    );
}

export default Item;
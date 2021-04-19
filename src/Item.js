import { useContext } from "react";
import DispatchContext from "./dispatchContext";

function Item({ item, id }) {

    const dispatch = useContext(DispatchContext);

    function addItem() {
        dispatch({ type: "addItem", item })
    }

    function removeItem() {
        dispatch({ type: "removeItem", id })
    }

    return (<div>
        {item.name}
        <button onClick={addItem}>Add</button>
        <button onClick={removeItem}>Remove</button>
    </div>);
}

export default Item;
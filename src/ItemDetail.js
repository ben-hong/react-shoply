import { useContext } from "react";
import DispatchContext from "./dispatchContext";
import { Link, useParams } from 'react-router-dom';
import ShoplyContext from './shoplyContext';

function ItemDetail() {

    const { name } = useParams()
    console.log(name)
    
    const dispatch = useContext(DispatchContext);

    const { products } = useContext(ShoplyContext);
    const productKeys = Object.keys(products);

    let productKey = productKeys
        .filter(key => 
               products[key].name === name
            )

    let item = products[productKey[0]]

    console.log("THIS ITEM IS", item)

    function addItem() {
        dispatch({ type: "addItem", item })
    }

    function removeItem() {
        dispatch({ type: "removeItem", name: item.name })
    }

    return (
        <div>
            <h1>{name}</h1>
            <div>
                Name of Item: {item.name},
                Price: {item.price},
                Description, {item.decsription}
            </div>
            Image: <img src={item.image_url} alt={item.name}></img>

            <button onClick={addItem}>Add to Shopping Cart</button>
            <button onClick={removeItem}>Remove from Shopping Cart</button>
        </div>
    );
}

export default ItemDetail;
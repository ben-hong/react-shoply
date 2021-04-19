import ItemList from "./ItemList";

function ItemReducer(state, action) {
    switch (action.type) {
        case 'addItem':
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, ...action.item]
            };
        case 'removeItem':
            return {
                ...state,
                shoppingCart: state.shoppingCart
                    .filter(item => item.id !== action.id)
            }
    }

}

export default ItemReducer;
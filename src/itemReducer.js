

function itemReducer(state, action) {

    switch (action.type) {
        case 'addItem':
            return {
                ...state,
                shoppingCart: [...state.shoppingCart, {...action.item}]
            };
        case 'removeItem':
            return {
                ...state,
                shoppingCart: state.shoppingCart
                    .filter(item => item.name !== action.name)
            }
    }

}

export default itemReducer;
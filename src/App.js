import React, { useReducer } from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import ShoppingCart from "./ShoppingCart";
import DispatchContext from "./dispatchContext";
import ShoppingCartContext from "./shoppingCartContext";
import ItemReducer from "./itemReducer";

function App() {
  const [state, dispatch] = useReducer(ItemReducer, { shoppingCart: [] });

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ShoppingCartContext.Provider value={state.shoppingCart}>
          <ItemList />
          <ShoppingCart />
        </ShoppingCartContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;

import React, { useReducer } from "react";
import products from "./data.json";
import ItemList from "./ItemList";
import ShoppingCart from "./ShoppingCart";
import DispatchContext from "./dispatchContext";
import ShoplyContext from "./shoplyContext";
import itemReducer from "./itemReducer";

function App() {
  const [state, dispatch] = useReducer(itemReducer, { shoppingCart: [], products: products.products });

  return (
    <div className="App">
      <DispatchContext.Provider value={dispatch}>
        <ShoplyContext.Provider value={state}>
          <ItemList />
          <ShoppingCart />
        </ShoplyContext.Provider>
      </DispatchContext.Provider>
    </div>
  );
}

export default App;

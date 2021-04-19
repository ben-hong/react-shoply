import React, { useReducer } from "react";
import products from "./data.json";
import ItemList from "./ItemList";
import ShoppingCart from "./ShoppingCart";
import DispatchContext from "./dispatchContext";
import ShoplyContext from "./shoplyContext";
import itemReducer from "./itemReducer";
import { BrowserRouter, Link } from "react-router-dom";
import Routes from './routes';


function App() {
  const [state, dispatch] = useReducer(itemReducer, { shoppingCart: [], products: products.products });

  console.log(state)

  return (
    <div className="App">
        <DispatchContext.Provider value={dispatch}>
          <ShoplyContext.Provider value={state}>
            <BrowserRouter >
                  <Link to='/'> GO HOME YO!</Link>
                  <Routes />
            </BrowserRouter>
          </ShoplyContext.Provider>
        </DispatchContext.Provider>
    </div>
  );
}

export default App;

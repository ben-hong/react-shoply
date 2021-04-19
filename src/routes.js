import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import ItemList from './ItemList';
import ItemDetail from './ItemDetail'

function Routes() {

    return (
        <Switch>
            <Route exact path="/"> <ItemList />  </Route>
            <Route exact path="/products/:name"> <ItemDetail />  </Route>
            <Route exact path="/cart"> <ShoppingCart />  </Route>
            <Redirect to="/" />
        </Switch>
    )
}

export default Routes;
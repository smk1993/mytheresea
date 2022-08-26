import React from 'react'
import {BrowserRouter,Switch , Route} from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import WishList from './components/WishList';

const Routes = () => {
    return (
    <BrowserRouter>
    <Switch>
        <Route exact path = "/" exact component = {Home} />
        <Route exact path = "/details"  component = {Details} />
        <Route exact path = "/wishlist"  component = {WishList} />
    </Switch>
    </BrowserRouter>
    )
}
export default Routes
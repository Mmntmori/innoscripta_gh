import Header from "../Header/Header";
import ShopPage from "../ShopPage/ShopPage";
import React from "react";
import {Switch, Route} from "react-router-dom";

const Routing = () => {
  return (
    <>
      <Header/>
      <Switch>
        <Route path={'/shop'}>
          <ShopPage/>
        </Route>
      </Switch>
    </>
  )
}

export default Routing

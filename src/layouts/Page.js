import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import ErrorPage from "../pages/ErrorPage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import SingleProductPage from "../pages/SingleProductPage";
const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/products/:id" component={SingleProductPage} />
        <Route path="/products" component={ProductsPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/UserPage" component={UserPage} />
        <Route path="/Login" component={LoginPage} />
        <Route component={ErrorPage} />
      </Switch>
    </>
  );
};

export default Page;

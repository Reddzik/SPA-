import React from "react";
import Product from "../components/Product";
import { Link } from "react-router-dom";
const SingleProductPage = ({ match }) => {
  return (
    <div className="single_product">
      <Product type={match.params.id} />
      <Link to="/products">Powrót do listy produktów</Link>
    </div>
  );
};

export default SingleProductPage;

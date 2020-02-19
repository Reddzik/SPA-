import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductsPage.css";
const product = [
  {
    id: 1,
    name: "Samochody"
  },
  {
    id: 2,
    name: "Rowery"
  },
  { id: 3, name: "Motocykle" }
];
const ProductsPage = () => {
  const list = product.map(item => (
    <li key={item.id}>
      <Link to={`/products/${item.name}`}>{item.name}</Link>
    </li>
  ));

  return (
    <div className="products">
      <h3>Lista produktów</h3>
      <ul>{list}</ul>
    </div>
  );
};

export default ProductsPage;

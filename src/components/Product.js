import React from "react";

const Product = props => {
  return (
    <article className="product">
      <h1>{props.type}</h1>
    </article>
  );
};

export default Product;

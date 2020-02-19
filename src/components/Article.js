import React from "react";

const Article = props => {
  return (
    <li key={props.id}>
      <h2>{props.title}</h2>
      <h3>{props.author}</h3>
      <p>{props.content}</p>
    </li>
  );
};

export default Article;

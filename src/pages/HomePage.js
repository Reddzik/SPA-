import React from "react";
import Article from "../components/Article";
const articles = [
  {
    id: 1,
    title: "Dokąd nocą tupta jeż?",
    author: "Mateusz Redzik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat sed veritatis rem vero obcaecati quas tempora cum, dolor vel quae, quasi explicabo, ipsam impedit voluptatibus aliquam laudantium itaque quam."
  },
  {
    id: 2,
    title: "Teoria strun, jak działa?",
    author: "Mateusz Redzik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat sed veritatis rem vero obcaecati quas tempora cum, dolor vel quae, quasi explicabo, ipsam impedit voluptatibus aliquam laudantium itaque quam."
  },
  {
    id: 3,
    title: "Początki ML",
    author: "Mateusz Redzik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat sed veritatis rem vero obcaecati quas tempora cum, dolor vel quae, quasi explicabo, ipsam impedit voluptatibus aliquam laudantium itaque quam."
  },
  {
    id: 4,
    title: "Przecenyyy",
    author: "Mateusz Redzik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat sed veritatis rem vero obcaecati quas tempora cum, dolor vel quae, quasi explicabo, ipsam impedit voluptatibus aliquam laudantium itaque quam."
  },
  {
    id: 5,
    title: "Co kupić?",
    author: "Mateusz Redzik",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et fugiat sed veritatis rem vero obcaecati quas tempora cum, dolor vel quae, quasi explicabo, ipsam impedit voluptatibus aliquam laudantium itaque quam."
  }
];
const HomePage = () => {
  const artList = articles.map(item => (
    <Article
      key={item.id}
      title={item.title}
      author={item.author}
      content={item.content}
    />
  ));
  return <ul>{artList}</ul>;
};

export default HomePage;

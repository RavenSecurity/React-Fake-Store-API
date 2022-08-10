import React from "react";
import { ArticleType } from "../types";

type ArticlesProps = {
  articles: ArticleType[];
  changeCart: (article: ArticleType) => void;
};

export const Articles = ({ articles, changeCart }: ArticlesProps) => {
  return (
    <div className="Product">
      <ul className="flex flex-wrap justify-center p-5">
        {articles.map((article) => (
          <li className="p-3 flex" key={article.id}>
            <img src={article.image} alt={article.title}></img>
            <h1 className="w-64 ml-2">{article.title} </h1>
            <h3>{article.price}$</h3>
            <button
              className="Add flex bg-orange-300 h-9 w-30 rounded-xl p-3 text-center align-middle"
              onClick={() => {
                changeCart(article);
              }}
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

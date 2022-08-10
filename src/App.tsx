import React, { useState, useEffect, useCallback } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  ARTICLES_QUERY_KEY,
  CATEGORIES_QUERY_KEY,
  Category,
} from "./constants";
import { getArticles, getCateogries } from "./endpoints";
import { ArticleType, CategoryType } from "./types";
import { Articles, Filter, Total } from "./components";

// TO DO :
// ADD REACT ROUTER
// USE REACT MUI
// SORT BY PRICE

function App() {
  const [cart, setCart] = useState<ArticleType[]>([]);
  const [category, setCategory] = useState<CategoryType | undefined>();
  const [articles, setArticles] = useState<ArticleType[]>([]);

  // fetchers
  const { data: fetchedArticles = [], isLoading: isLoadingArticles } = useQuery(
    [ARTICLES_QUERY_KEY],
    getArticles
  );
  const { data: fetchedCategories = [], isLoading: isLoadingCategories } =
    useQuery([CATEGORIES_QUERY_KEY], getCateogries);

  // change a category
  const changeCategory = useCallback((category: CategoryType) => {
    setCategory(category);
  }, []);

  // change cart
  const changeCart = useCallback((article: ArticleType) => {
    setCart((previousCart) => [...previousCart, article]);
  }, []);

  // filter data based on category
  useEffect(() => {
    if (isLoadingArticles) {
      return;
    }
    if (!category) {
      return setArticles(fetchedArticles);
    }

    setArticles(
      fetchedArticles.filter((article) => article.category === category)
    );
  }, [category, fetchedArticles, isLoadingArticles]);

  // Attempt to display several categories at once

  //   useEffect(() => {
  //     if (category.length == 0) {
  //       axios.get('https://fakestoreapi.com/products')
  //       .then(res => {
  //           setPosts(res.data)
  //       })
  //       .catch(err => {
  //           console.log(err)
  //       });

  //   } else for (let index = 0; index < category.length; index++) {
  //     const element = category[index]; {
  //     axios.get('https://fakestoreapi.com/products/category/' + element)
  //   .then(res => {
  //       setPosts(res.data)
  //       console.log(posts)
  //   })
  //   .catch(err => {
  //       console.log(err)
  //   })}
  // }}, [category])

  return (
    <div className="App ">
      <header className="App-header bg-blue-200 flex justify-around">
        <p className="text-3xl font-bold text-center p-3"></p>
        <p className="text-3xl font-bold text-center p-3">Fake Store</p>

        <Link to="/cart">
          <Total cart={cart} />{" "}
        </Link>
      </header>

      <div className="flex">
        <Filter
          changeCategory={changeCategory}
          categories={fetchedCategories}
        />
        {!isLoadingArticles && !isLoadingCategories && (
          <Articles articles={articles} changeCart={changeCart} />
        )}
        <Outlet />
      </div>
    </div>
  );
}

export default App;

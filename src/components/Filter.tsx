import React from "react";
import { CategoryType } from "../types";

type FilterProps = {
  categories: CategoryType[];
  changeCategory: (category: CategoryType) => void;
};

export const Filter = ({ categories, changeCategory }: FilterProps) => {
  return (
    <div className="Filter p-10 pr-0">
      <p className="mb-3">Categories</p>
      <hr></hr>
      <ul>
        {categories.map((category) => (
          <li className="p-3 flex" key={category}>
            <input
              id={category}
              type="radio"
              name="choice"
              onChange={() => {
                changeCategory(category);
              }}
            ></input>
            <label htmlFor={category} className="ml-3">
              {category}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

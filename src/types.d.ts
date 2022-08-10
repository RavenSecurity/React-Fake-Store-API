export type CategoryType =
  | "electronics"
  | "jewelery"
  | "men's clothing"
  | "women's clothing";

export type ArticleType = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: CategoryType;
  rating: {
    rate: number;
    count: 120;
  };
};

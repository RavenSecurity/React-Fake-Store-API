import { ArticleType } from "./../types.d";
import axios, { AxiosResponse } from "axios";

export const getArticles = async () => {
  try {
    const query: AxiosResponse<ArticleType[]> = await axios.get(
      "https://fakestoreapi.com/products"
    );
    if (query.status !== 200) {
      return undefined;
    }
    return query.data;
  } catch {
    throw new Error("Error when fetching data");
  }
};

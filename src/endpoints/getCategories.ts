import { CategoryType } from "./../types.d";
import axios, { AxiosResponse } from "axios";

export const getCateogries = async () => {
  try {
    const query: AxiosResponse<CategoryType[]> = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    if (query.status !== 200) {
      return undefined;
    }
    return query.data;
  } catch {
    throw new Error("Error when fetching data");
  }
};

import { IProduct } from "../components/Product";
import { createContext } from "react";

interface IProductContext {
  products: IProduct[];
  loading: boolean;
  error: string;
  keyword: string | null;
  setKeyword: (keyword: string) => void;
  setSortBy: (sortBy: "name" | "stock" | null) => void;
}

export const ProductContext = createContext({} as IProductContext);

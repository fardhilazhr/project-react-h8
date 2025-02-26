import { IProduct } from "../components/Product";
import { createContext } from "react";

interface IProductContext {
  products: IProduct[];
  loading: boolean;
  error: string;
  keyword: string | null;
  setKeyword: (keyword: string) => void;
}

export const ProductContext = createContext({} as IProductContext);

import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
export default () => {
  return useContext(ProductContext);
};

import { ReactNode, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { IProduct } from "../components/Product";
import productData from "../stores/product.json";

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState<string | null>("");

  useEffect(() => {
    if (keyword === null) return;
    setLoading(true);
    try {
      const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );
      setProducts(filteredProducts);
      setError("");
    } catch (error) {
      setError((error as Error).message);
    }
    setLoading(false);
  }, [keyword]);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, keyword, setKeyword }}
    >
      {children}
    </ProductContext.Provider>
  );
}

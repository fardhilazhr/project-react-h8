import { ReactNode, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { IProduct } from "../components/Product";
import productData from "../stores/product.json";

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState<string | null>("");
  const [sortBy, setSortBy] = useState<"name" | "stock" | null>(null);

  useEffect(() => {
    if (keyword === null) return;
    setLoading(true);
    try {
      const filteredProducts = productData.filter((product) =>
        product.name.toLowerCase().includes(keyword.toLowerCase())
      );

      if (sortBy === "name") {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortBy === "stock") {
        filteredProducts.sort((a, b) => b.stock - a.stock);
      }

      setProducts(filteredProducts);
      setError("");
    } catch (error) {
      setError((error as Error).message);
    }
    setLoading(false);
  }, [keyword, sortBy]);

  return (
    <ProductContext.Provider
      value={{ products, loading, error, keyword, setKeyword, setSortBy }}
    >
      {children}
    </ProductContext.Provider>
  );
}

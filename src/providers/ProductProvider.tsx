import { ReactNode, useEffect, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { IProduct } from "../components/Product";
import productData from "../stores/product.json";
// import useCart from "../hooks/useCart";

export function ProductProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState("");
  const [keyword, setKeyword] = useState<string | null>("");
  const [sortBy, setSortBy] = useState<"name" | "stock" | null>(null);
  // const { cart } = useCart();

  useEffect(() => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    } else {
      localStorage.setItem("products", JSON.stringify(productData));
      setProducts(productData);
    }
    setLoading(false);
  }, []);

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

  function updateStock(productId: number, quantity: number, isAdding: boolean) {
    setProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === productId
          ? {
              ...product,
              stock: isAdding
                ? Math.max(product.stock - quantity, 0)
                : product.stock + quantity,
            }
          : product
      );

      localStorage.setItem("products", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        loading,
        error,
        keyword,
        setKeyword,
        setSortBy,
        updateStock,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

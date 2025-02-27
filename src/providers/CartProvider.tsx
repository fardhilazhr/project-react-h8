import { useState, useEffect, ReactNode } from "react";
import { IProduct } from "../components/Product";
import { CartContext } from "../context/CartContext";
import { ICartProduct } from "../components/CartDetail";

export function CartProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [cart, setCart] = useState<ICartProduct[]>(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  function addToCart(product: IProduct) {
    setCart((prevCart) => {
      const productExists = prevCart.find((item) => item.id === product.id);

      if (productExists) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });

    // setProducts((prevProducts) =>
    //   prevProducts.map((p) =>
    //     p.id === product.id && p.stock > 0 ? { ...p, stock: p.stock - 1 } : p
    //   )
    // );
  }

  function removeOneFromCart(productId: number) {
    setCart((prevCart) =>
      prevCart.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [] as ICartProduct[])
    );

    // setProducts((prevProducts) =>
    //   prevProducts.map((p) =>
    //     p.id === productId ? { ...p, stock: p.stock + 1 } : p
    //   )
    // );
  }

  function removeFromCart(productId: number) {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setProducts((prevProducts) =>
      prevProducts.map((p) => {
        const cartItem = cart.find((item) => item.id === p.id);
        return cartItem ? { ...p, stock: p.stock + cartItem.quantity } : p;
      })
    );
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeOneFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

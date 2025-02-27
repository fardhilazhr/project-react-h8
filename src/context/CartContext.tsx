import { createContext } from "react";
import { IProduct } from "../components/Product";
import { ICartProduct } from "../components/CartDetail";

interface ICartContext {
  cart: ICartProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext({} as ICartContext);

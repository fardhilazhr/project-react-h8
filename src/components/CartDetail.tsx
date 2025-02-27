import { IProduct } from "../components/Product";
import useCart from "../hooks/useCart";
import Button from "./UI/Button";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export default function CartDetail({ product }: { product: ICartProduct }) {
  const { addToCart, removeFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-20 h-20 rounded-2xl mr-4"
      />
      <div className="flex-1">
        <p className="font-bold">{product.name}</p>
        <p className="text-sm text-neutral-400">{product.price}</p>
        <div className="flex items-center gap-3 mt-2">
          <Button
            label="-"
            onClick={() => removeFromCart(product.id)}
            className="p-2 bg-gray-200 rounded-md"
          />
          <p className="text-md font-bold">{product.quantity}</p>
          <Button
            label="+"
            onClick={() => addToCart(product)}
            className="p-2 bg-gray-200 rounded-md"
          />
        </div>
      </div>
    </div>
  );
}

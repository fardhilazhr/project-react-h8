import { IProduct } from "../components/Product";
import useCart from "../hooks/useCart";
import Button from "./UI/Button";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export default function CartDetail({ product }: { product: ICartProduct }) {
  const { addToCart, removeFromCart, removeOneFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-200 px-6">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-20 h-20 rounded-2xl mr-4"
      />
      <div className="flex-1">
        <p className="font-bold text-xl mb-1">{product.name}</p>
        <p className="text-md text-neutral-400">{product.price}</p>
      </div>
      <div className="flex justify-between items-center gap-5 mt-2">
        <button
          onClick={() => removeOneFromCart(product.id)}
          className="bg-neutral-100 px-2 py-2 text-lg rounded-md cursor-pointer"
        >
          <img src="/assets/minus.svg" alt="minus" className="w-4 h-4" />
        </button>

        <p className="text-md font-bold">{product.quantity}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-neutral-100 px-2 py-2 text-lg rounded-md cursor-pointer"
        >
          <img src="/assets/plus.svg" alt="plus" className="w-4 h-4" />
        </button>

        <Button
          imageUrl="/assets/trash.svg"
          onClick={() => removeFromCart(product.id)}
          className="text-only"
        />
      </div>
    </div>
  );
}

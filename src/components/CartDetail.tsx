import { IProduct } from "../components/Product";
import useCart from "../hooks/useCart";
import Button from "./UI/Button";

export interface ICartProduct extends IProduct {
  quantity: number;
}

export default function CartDetail({ product }: { product: ICartProduct }) {
  const { addToCart, removeFromCart, removeOneFromCart } = useCart();

  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-200 px-2 md:px-4 text-sm md:text-base">
      <img
        src={product.imageUrl}
        alt={product.name}
        className="w-12 h-12 md:w-16 md:h-16 rounded-2xl"
      />
      <div className="flex-1 text-left px-2 md:px-4">
        <p className="font-bold text-sm md:text-lg mb-1">{product.name}</p>
        <p className="text-xs md:text-md text-neutral-400">{product.price}</p>
      </div>
      <div className="flex items-center gap-2 md:gap-4">
        <Button
          imageUrl="/assets/trash.svg"
          onClick={() => removeFromCart(product.id)}
          className="text-only"
        />
        <button
          onClick={() => removeOneFromCart(product.id)}
          className="bg-neutral-100 p-1 md:p-2 text-sm rounded-md cursor-pointer"
        >
          <img
            src="/assets/minus.svg"
            alt="minus"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </button>

        <p className="text-sm md:text-md font-bold">{product.quantity}</p>
        <button
          onClick={() => addToCart(product)}
          className="bg-neutral-100 p-1 md:p-2 text-sm rounded-md cursor-pointer"
        >
          <img
            src="/assets/plus.svg"
            alt="plus"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </button>
      </div>
    </div>
  );
}

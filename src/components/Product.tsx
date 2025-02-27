import { useNavigate } from "react-router";
import Button from "./UI/Button";
import useCart from "../hooks/useCart";
import useProduct from "../hooks/useProduct";

export interface IProduct {
  id: number;
  name: string;
  stock: number;
  price: string;
  desc_short: string;
  desc_long: string;
  imageUrl: string;
}

export default function Product({ product }: { product: IProduct }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { updateStock } = useProduct();

  return (
    <div className="w-[300px] h-auto bg-white py-6 px-6 shadow-lg border border-neutral-200 rounded-md grid justify-items-center">
      <div>
        <img
          src="https://dummyimage.com/500x350.png/dddddd/000000"
          alt="dummy"
          className="w-[250px] h-[250px] object-cover rounded-md mb-4 "
        />
        <h1 className="text-xl font-bold text-center">{product.name}</h1>
        <p className="text-sm mb-4 text-center">{product.desc_short}</p>
        <div className="flex justify-between items-center mb-4">
          <p className="text-xs">
            Stock: {product.stock > 0 ? product.stock : "Out of stock"}
          </p>
          <p className="text-md font-bold">{product.price}</p>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            label="Detail"
            className="outline mb-4 w-full"
            onClick={() => navigate(`/product/${product.id}`)}
          />

          <Button
            className="mb-4 w-full"
            imageUrl="/assets/cart.svg"
            onClick={() => {
              addToCart(product);
              updateStock(product.id, 1, true);
            }}
            disabled={product.stock === 0 ? true : false}
          />
        </div>
      </div>
    </div>
  );
}

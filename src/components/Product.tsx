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
    <div className="w-auto h-auto bg-white rounded-xl grid justify-items-center border border-neutral-200 cursor-pointer transition-all duration-100 active:shadow-md active:scale-102">
      <img
        src="https://dummyimage.com/500x350.png/dddddd/000000"
        alt="dummy"
        className="w-[150px] h-[100px] lg:w-[250px] lg:h-[200px] object-cover rounded-t-xl mb-2 "
        onClick={() => navigate(`/product/${product.id}`)}
      />
      <div
        className="lg-px-2"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <h1 className="text-md lg:text-xl font-bold text-center">
          {product.name}
        </h1>
        <p className="text-xs lg:text-sm mb-1 lg:mb-4 text-center hidden lg:block">
          {product.desc_short}
        </p>
        <div className="flex flex-col lg:justify-between items-center mb-2 ">
          <p className="text-[9px] lg:text-xs text-neutral-600 mb-2">
            Stock: {product.stock > 0 ? product.stock : "Out of stock"}
          </p>
          <p className="text-sm lg:text-lg font-bold">{product.price}</p>
        </div>
      </div>
      <div className="flex justify-center lg:gap-2">
        <div className="mb-4 lg:w-[100px]">
          <Button
            label="Detail"
            className="outline hidden lg:block w-full"
            onClick={() => navigate(`/product/${product.id}`)}
          />
        </div>
        <div className="mb-4 lg:w-[100px]">
          <Button
            className="lg:w-full"
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

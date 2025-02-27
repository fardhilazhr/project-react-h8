import { useNavigate, useParams } from "react-router";
import useProduct from "../hooks/useProduct";
import Button from "../components/UI/Button";
import useCart from "../hooks/useCart";

export default function Detail() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useProduct();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-20">
      <Button
        onClick={() => navigate(-1)}
        className="text-only text-black mb-6"
        label="Back to home"
        imageUrl="/assets/back-black.svg"
      />
      <div className="flex flex-wrap shadow-md shadow-gray-200 p-8 rounded-2xl">
        <div className="flex flex-wrap items-center gap-9">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-auto h-auto rounded-2xl"
          />

          <div className="flex flex-col flex-1">
            <h1 className="font-bold text-5xl mb-8">{product.name}</h1>
            <p className="text-lg mb-4">{product.desc_long}</p>
            <p className="text-sm mb-4 text-neutral-400">
              Stock: {product.stock}
            </p>

            <div className=" flex items-center gap-5">
              <p className="text-lg font-bold ">{product.price}</p>
              <Button
                label="Add to Cart"
                imageUrl="/assets/cart.svg"
                className="w-auto"
                onClick={() => {
                  addToCart(product);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

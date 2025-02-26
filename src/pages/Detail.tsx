import { useNavigate, useParams } from "react-router";
import useProduct from "../hooks/useProduct";
import Button from "../components/UI/Button";

export default function Detail() {
  const navigate = useNavigate();
  const { products } = useProduct();
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === parseInt(id as string));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="p-8">
      <button onClick={() => navigate(-1)} className="">
        Go back
      </button>
      <div className="flex flex-wrap w-[500px] shadow-md shadow-gray-200 p-8">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-1/3 rounded-2xl"
        />
        <div className="w-1/3 flex items-center">
          <div>
            <h1 className="font-bold text-5xl mb-4">{product.name}</h1>
            <p className="text-lg mb-4">{product.desc_long}</p>
            <p className="text-sm mb-4">Stock: {product.stock}</p>
            <div className="flex justify-between items-center">
              <p className="text-lg font-bold">{product.price}</p>
              <Button
                label="add to cart"
                imageUrl="./assets/cart.svg"
                className="w-1/3"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
import Button from "../components/UI/Button";
import useCart from "../hooks/useCart";
import CartDetail from "../components/CartDetail";

export default function Cart() {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <>
      <div className="px-20 pb-20 pt-8">
        {cart.length === 0 ? (
          <div className="flex flex-col">
            <p className="text-lg text-center mb-8">Your cart is empty</p>
            <div className="flex flex-wrap justify-center">
              <Button
                label="Start Shopping"
                onClick={() => navigate("/")}
                className="text-only text-black mb-8 bg-neutral-100 rounded-md py-3 px-6 active:bg-neutral-200"
                imageUrl="/assets/back-black.svg"
              />
            </div>
          </div>
        ) : (
          <div className="flex flex-col">
            <div>
              <Button
                label="Continue Shopping"
                onClick={() => navigate("/")}
                className="text-only text-black mb-8"
                imageUrl="/assets/back-black.svg"
              />
            </div>

            <div className="p-3 bg-white shadow-md rounded-xl">
              <div className="flex justify-end px-4 py-2">
                <Button
                  onClick={handleClearCart}
                  className="text-only text-red-500 "
                  label="Clear Cart"
                />
              </div>
              {cart.map((product) => (
                <CartDetail key={product.id} product={product} />
              ))}
            </div>
            <div className="flex justify-between items-center mt-8 bg-white shadow-md py-5 px-5 rounded-lg sticky bottom-0 border-t border-neutral-200">
              <p className="text-lg font-bold mr-4">
                Total: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
              </p>
              <Button
                onClick={handleCheckout}
                className="w-1/3"
                label="Checkout"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

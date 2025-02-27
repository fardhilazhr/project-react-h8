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
    <div className="p-20">
      <h1 className="text-5xl font-bold mb-8">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-lg">Your cart is empty</p>
      ) : (
        <div className="flex flex-col">
          {cart.map((product) => (
            <CartDetail key={product.id} product={product} />
          ))}
          <div className="flex justify-between items-center mt-8">
            <Button
              onClick={handleClearCart}
              className="text-only text-black"
              label="Clear Cart"
            />
            <Button
              onClick={handleCheckout}
              className="w-1/3"
              label="Checkout"
            />
          </div>
        </div>
      )}
      <Button
        label="Continue Shopping"
        onClick={() => navigate("/")}
        className="mt-8"
      />
    </div>
  );
}

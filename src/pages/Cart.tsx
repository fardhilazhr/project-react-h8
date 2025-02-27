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
            <div className="flex flex-col items-center">
              <img
                src="/assets/noItem.jpg"
                className="w-[500px] h-[500px]"
                alt="empty cart"
              />
              <p className="text-2xl text-center mb-8 font-bold text-red-400">
                Your cart is empty
              </p>
              <div className="flex flex-wrap justify-center">
                <Button
                  label="Start Shopping"
                  onClick={() => navigate("/")}
                  className="text-only text-black mb-8 bg-neutral-100 rounded-md py-3 px-6 active:bg-neutral-200"
                  imageUrl="/assets/back-black.svg"
                />
              </div>
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
              <div className="flex flex-col">
                <p className="text-md mr-4 text-neutral-400">
                  Total: {cart.reduce((acc, curr) => acc + curr.quantity, 0)}
                </p>

                <p className="text-lg font-bold mr-4 text-cyan-600">
                  {cart
                    .reduce(
                      (acc, curr) =>
                        acc +
                        curr.quantity *
                          parseFloat(
                            curr.price
                              .replace("Rp. ", "")
                              .replace(".", "")
                              .replace(",", ".")
                          ),
                      0
                    )
                    .toLocaleString("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    })}
                </p>
              </div>

              <Button
                onClick={handleCheckout}
                className="w-1/3 text-cyan-600"
                label="Checkout"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

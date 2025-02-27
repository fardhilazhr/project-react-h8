import { NavLink, useNavigate } from "react-router";
import Search from "./Search";
import Button from "./UI/Button";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Header() {
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <header className="bg-white border-b-2 border-cyan-600 py-4 px-4 lg:px-7 shadow-md sticky top-0 w-full">
      {window.location.pathname === "/cart" ? (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex flex-wrap gap-4 items-center">
            <NavLink to="/">
              <h1 className="text-xl md:text-2xl font-bold text-cyan-600">
                SyulitPharmacy
              </h1>
            </NavLink>
            <p className="hidden md:block text-cyan-600">|</p>
            <h1 className="text-xl md:text-2xl font-bold text-cyan-600">
              Cart
            </h1>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div className="relative">
              <Button imageUrl="/assets/cart2.svg" className="text-only" />
              {cart.length > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                  {cart.length}
                </span>
              )}
            </div>
            <a href="#" onClick={logout}>
              <Button imageUrl="/assets/logout.svg" className="text-only " />
            </a>
          </div>
        </div>
      ) : (
        <div className="flex  lg:flex-row justify-between items-center gap-4">
          <NavLink to="/">
            <h1 className="text-xl md:text-2xl font-bold text-cyan-600">
              SyulitPharmacy
            </h1>
          </NavLink>

          <div className="flex flex-row justify-between items-center gap-4">
            <Button
              imageUrl="/assets/search.svg"
              className="text-only lg:hidden"
              onClick={() => {
                const search = document.querySelector(".search");
                if (search) {
                  search.classList.toggle("hidden");
                  const header = document.querySelector("header");
                  if (header) {
                    header.append(search);
                  }
                }
              }}
            />
            <div className="search hidden  lg:block ">
              <Search />
            </div>

            <NavLink to="/cart" className="text-white">
              <div className="relative">
                <Button imageUrl="/assets/cart2.svg" className="text-only" />
                {cart.length > 0 && (
                  <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                    {cart.length}
                  </span>
                )}
              </div>
            </NavLink>

            <a href="#" onClick={logout}>
              <Button imageUrl="/assets/logout.svg" className="text-only" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

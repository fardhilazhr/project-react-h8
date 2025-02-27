import { NavLink, useNavigate } from "react-router";
import Search from "./Search";
import Button from "./UI/Button";

export default function Header() {
  const navigate = useNavigate();

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <header className="bg-white border-b-2 border-cyan-600 py-4 px-7 shadow-md  sticky top-0">
      {window.location.pathname === "/cart" ? (
        <div className="flex gap-4 items-center">
          <NavLink to="/">
            <h1 className="text-2xl font-bold text-cyan-600">SyulitPharmacy</h1>
          </NavLink>
          <p>|</p>
          <h1 className="text-2xl font-bold text-cyan-600">Cart</h1>
        </div>
      ) : (
        <div className="flex justify-between">
          <NavLink to="/">
            <h1 className="text-2xl font-bold text-cyan-600">SyulitPharmacy</h1>
          </NavLink>
          <div className="flex justify-between items-center gap-4">
            <Search />
            <NavLink to="/cart" className="text-white">
              <div className="relative">
                <Button imageUrl="/assets/cart2.svg" className="text-only" />
                <span className="absolute top-0 right-0 w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                  {JSON.parse(localStorage.getItem("cart") || "[]").length}
                </span>
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

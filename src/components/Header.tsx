import { NavLink, useNavigate } from "react-router";
import Search from "./Search";

export default function Header() {
  const navigate = useNavigate();

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <header className="bg-white border-b-2 border-cyan-600 py-4 px-7 flex justify-between">
      <h1 className="text-2xl font-bold text-cyan-600">Pharmacy</h1>
      <div className="flex justify-between items-center gap-4">
        <Search />
        <NavLink to="/cart" className="text-white">
          Cart
        </NavLink>

        <a href="#" onClick={logout}>
          Logout
        </a>
      </div>
    </header>
  );
}

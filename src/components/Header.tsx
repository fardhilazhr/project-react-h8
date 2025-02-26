import { useNavigate } from "react-router";
import Search from "./Search";

export default function Header() {
  const navigate = useNavigate();

  function logout(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    e.preventDefault();
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <header className="bg-cyan-500 py-4 px-7 flex justify-between">
      <h1 className="text-2xl font-bold text-white">Pharmacy</h1>
      <div className="flex justify-between items-center gap-4">
        <Search />
        <p>cart</p>
        <a href="#" onClick={logout}>
          Logout
        </a>
      </div>
    </header>
  );
}

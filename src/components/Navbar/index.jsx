import "bootstrap-icons/font/bootstrap-icons.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate()
  return (
    <header className="flex bg-green-500 justify-between h-15 align-middle items-center  font-extrabold p-2">
      <h1 onClick={() => navigate("/")} className="text-slate-100 text-3xl cursor-pointer">Online Store</h1>
      <nav className="flex gap-6 cursor-pointer text-2xl px-6">
        <i onClick={() => navigate("/wishlist")} className="bi bi-heart-fill"></i>
        <i onClick={() => navigate("/cart")} className="bi bi-cart"></i>
        <i className="bi bi-person-circle"></i>
      </nav>
    </header>
  );
};

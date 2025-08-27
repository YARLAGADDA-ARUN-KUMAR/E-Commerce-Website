import "bootstrap-icons/font/bootstrap-icons.css";

export const Navbar = () => {
  return (
    <header className="flex bg-green-500 justify-between h-15 align-middle items-center  font-extrabold p-2">
      <h1 className="text-slate-100 text-3xl">Online Store</h1>
      <nav className="flex gap-6 cursor-pointer text-2xl px-6">
        <i className="bi bi-heart-fill"></i>
        <i className="bi bi-cart"></i>
        <i className="bi bi-person-circle"></i>
      </nav>
    </header>
  );
};

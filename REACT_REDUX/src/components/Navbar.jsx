import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import { useSelector } from "react-redux";

const Navbar = () => {
  const selector = useSelector((state) => state.cart);

  return (
    <div className="shadow-xl shadow-slate-900 bg-tertiary text-2xl py-5 flex justify-between px-5 md:justify-between md:px-24 items-center font-mono">
      <Link to="/">
        <img
          src="./Logo.png"
          alt="Logo"
          className="w-[50px] mix-blend-normal"
        />
      </Link>

      <div className="flex items-center text-lg gap-x-4 md:gap-x-8">
        <Link
          className="text-secondary hover:text-secondaryhover text-inherit"
          to="/"
        >
          Home
        </Link>
        <Link
          to="/wishlist"
          className="flex justify-center items-center w-10 h-10 relative rounded-full bg-secondaryhover"
        >
          <FaHeart />
          <span className="absolute right-1 -top-2">{selector.length}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

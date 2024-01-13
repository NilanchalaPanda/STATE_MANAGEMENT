import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [wishListCount, setWishListCount] = useState(null);

  return (
    <div className="shadow-xl shadow-slate-900 bg-tertiary text-2xl py-5 flex justify-around items-center font-mono">
      <div>
        <p>LOGO</p>
      </div>

      <div className="flex items-center text-lg gap-x-2">
        <Link
          className="text-secondary hover:text-secondaryhover text-inherit"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-secondary hover:text-secondaryhover text-inherit"
          to="/cart"
        >
          Cart
        </Link>
        <span className="relative p-2 rounded-full bg-secondaryhover">
          <FaHeart />
          <span className="absolute -top-3 right-0">{wishListCount}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

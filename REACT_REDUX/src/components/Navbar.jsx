import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import {useSelector} from 'react-redux';

const Navbar = () => {
  const selector = useSelector((state) => state.cart);

  return (
    <div className="shadow-xl shadow-slate-900 bg-tertiary text-2xl py-5 flex justify-between px-5 md:justify-between md:px-24 items-center font-mono">
      <div>
        <img src="./Logo.png" alt="Logo" className="w-[50px] mix-blend-normal"/>
      </div>

      <div className="flex items-center text-lg gap-x-4 md:gap-x-8">
        <Link
          className="text-secondary hover:text-secondaryhover text-inherit"
          to="/"
        >
          Home
        </Link>
        <Link
          className="text-secondary hover:text-secondaryhover text-inherit"
          to="/wishlist"
        >
          WishList
        </Link>
        <span className="relative p-2 rounded-full bg-secondaryhover">
          <FaHeart />
          <span className="absolute -top-3 right-0">{selector.length}</span>
        </span>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import { cart, logoDark } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);

  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-10 flex items-center justify-between">
        <Link to="/">
          <div>
            <img className="w-28" src={logoDark} alt="logo dark" />
          </div>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-semibold">
              Home
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-semibold">
              Pages
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-semibold">
              Shop
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-semibold">
              Element
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300 font-semibold">
              Blog
            </li>
          </ul>

          <Link to="/cart">
            <div className="relative">
              <img src={cart} alt="cart" className="w-6" />
              <span className="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>

          <img
            src="https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="user logo"
            className="w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

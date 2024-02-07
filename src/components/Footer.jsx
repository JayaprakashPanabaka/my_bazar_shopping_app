import React from "react";
import { logoLight, paymentLogo } from "../assets/index";
import { ImGithub } from "react-icons/im";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsPersonFill, BsPaypal } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-serif">
      <div className="max-w-screen-xl mx-10 grid grid-cols-4">
        {/* =============== LogoIcon Start Here ========= */}
        <div className="flex flex-col gap-7">
          <img className="w-32" src={logoLight} alt="logo light" />
          <p className="text-white text-sm tracking-wide">© ReactBD.com</p>
          <img src={paymentLogo} alt="payment logo" className="w-56" />
          <div className="flex gap-5 text-lg text-gray-400">
            <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            <FaYoutube className="hover:text-white duration-300 cursor-pointer" />
            <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            <FaTwitter className="hover:text-white duration-300 cursor-pointer" />
            <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
        {/* =============== LogoIcon End Here ========= */}

        {/* =============== Locate Us Start Here ========= */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 font-sans">
            Locate Us
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p>XYZ, Near Dilshuknagar Metro, Hyd.</p>
            <p>Mobile: +91 8099099123</p>
            <p>Phone: +91 8099099234</p>
            <p>e-mail: bazar@gmail.com</p>
          </div>
        </div>
        {/* =============== Locate Us End Here ========= */}

        {/* =============== Profile Start Here ========= */}
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4 font-sans">
            Profile
          </h2>
          <div className="text-base flex flex-col gap-2">
            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPersonFill />
              </span>
              my account
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <BsPaypal />
              </span>
              checkout
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <FaHome />
              </span>
              order tracking
            </p>

            <p className="flex items-center gap-3 hover:text-white duration-300 cursor-pointer">
              <span className="text-lg">
                <MdLocationOn />
              </span>
              help & support
            </p>
          </div>
        </div>
        {/* =============== Profile End Here ========= */}

        {/* =============== Subscribe Start Here ========= */}
        <div className="flex flex-col justify-center">
          <input
            className="bg-transparent border px-4 py-2 text-sm"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm border text-white border-t-0 hover:bg-gray-900 active:bg-white active:text-black">
            Subscribe
          </button>
        </div>
        {/* =============== Subscribe End Here ========= */}
      </div>
    </div>
  );
};

export default Footer;

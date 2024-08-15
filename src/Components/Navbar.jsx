import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full bg-[#E7E0F5] fixed top-0 rounded-full py-4 px-5 flex items-center justify-between z-50 opacity-90">
      <div className="logo w-1/4">
        <img
          className="w-[50%] object-cover"
          src=".\src\assets\logo.svg"
          alt=""
        />
      </div>
      <div className="links">
        <ul className="flex gap-6 items-center">
          <li className="text-lg text-zinc-900 font-bold cursor-pointer hover:text-purple-800">Services</li>
          <li className="text-lg text-zinc-900 font-bold cursor-pointer hover:text-purple-800">Pricing</li>
          <li className="text-lg text-zinc-900 font-bold cursor-pointer hover:text-purple-800">Contact us</li>
          <li className="text-lg text-[#fff] bg-[#533298] border-2 rounded-full py-2 px-4 cursor-pointer">
            Book a Demo
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

"use client"
import React, { useState } from "react";
import { CgClose } from "react-icons/cg"; 
import { FiMenu, FiChevronDown, FiChevronUp } from "react-icons/fi";
import Image from "next/image";
import Button from "./ui/Button";
import Link from "next/link";
import NavLinks from "./NavLinks";
import MobileNavLinks from "./MobileNavLinks";
import { motion } from "framer-motion";
import { LightDarkSwitch } from "./collaborate/LightDarkSwitch";

type SubMenuState = {
  products: boolean;
  solutions: boolean;
  resources: boolean;
  pricing: boolean;
};

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState<SubMenuState>({
    products: false,
    solutions: false,
    resources: false,
    pricing: false,
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSubMenu = (menuItem: keyof SubMenuState) => {
    setSubMenuOpen((prevState) => {
      return {
        ...(Object.fromEntries(
          Object.keys(prevState).map((key) => [key, key === menuItem])
        ) as SubMenuState),
      };
    });
  };



  return (
    <nav className="bg-gray-100 border border-gray-300 mt-12 container rounded-full  fixed top-0 left-0 right-0 z-50">
      {/* Desktop Navigation */}
       <motion.div
  className="min-[1024px]:flex justify-between items-center w-[95%] mx-auto hidden py-2 flex-wrap"
  animate={{ opacity: 1, y: 0 }}
  initial={{ opacity: 0, y: -20 }}
  transition={{ duration: 0.3 }}
>
        <div className="flex items-center gap-1">
        <Link href="/">
              <Image
               src="/logo.svg"
                width={20}
                height={20}
                alt="dashboard"
              />
            </Link>
          <p className="text-gray-900 font-semibold text-xl">ClearLink</p>
        </div>
       
         <div className="min-[1024px]:flex text-gray-500 gap-8 items-center  cursor-pointer">
         <NavLinks />
         </div>
      
        <div className="min-[1024px]:flex  items-center gap-4">
          <LightDarkSwitch />
          <Button
            value="Talk to sales"
            styles="text-gray-900 bg-white border border-gray-400 hover:scale-110 transition duration-300"
            link=""
          />
          <Button
            value="Sign up for free"
            styles="text-white bg-[#175CD3] hover:scale-110 transition duration-300"
            link=""
          />
        </div>
      </motion.div>

    






    <div className="min-[1024px]:hidden flex justify-between">
  {/* Left Section */}
  <div className="flex items-center p-4">
    <div className="flex items-center gap-1">
      <Link href="/">
        <Image
          src="/logo.svg"
          width={20}
          height={20}
          alt="dashboard"
        />
      </Link>
      <p className="text-gray-900 font-semibold text-lg">ClearLink</p>
    </div>
  </div>

  {/* Right Section */}
 
  <div className="flex items-center p-4">
 <div className="mr-4">
 <LightDarkSwitch />
 </div>
    {isMobileMenuOpen ? (
      <CgClose
        onClick={toggleMobileMenu}
        className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
      />
    ) : (
      <FiMenu
        onClick={toggleMobileMenu}
        className="text-gray-700 text-2xl cursor-pointer transition-all duration-300 transform hover:scale-110"
      />
    )}
  </div>

  {/* Mobile Menu Overlay */}
  {isMobileMenuOpen && (
    <div className="min-[1024px]:hidden bg-gray-100 px-6 py-8 absolute top-20 left-0 right-0 z-50 w-full rounded-md ">
     
<MobileNavLinks />
      <div className="flex mr-2 gap-4  mt-4">
        <Button
          value="Talk to sales"
          styles="text-gray-900 bg-white mr-2 border border-gray-400 hover:scale-110 transition duration-300"
          link=""
        />
        <Button
          value="Sign up for free"
          styles="text-white bg-[#175CD3] hover:scale-110 transition duration-300"
          link=""
        />
      </div>
    </div>
  )}
</div>

    </nav>
  );
};

export default Navbar;
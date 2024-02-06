
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from "next/link";
import { links } from "./Mylinks";
import { motion, AnimatePresence } from "framer-motion";

const MobileNavLinks = () => {
  const [openMenu, setOpenMenu] = useState("");
  const [openSubMenu, setOpenSubMenu] = useState("");

  const handleMenuClick = (clickedMenu) => {
    setOpenMenu((prevMenu) => (prevMenu === clickedMenu ? "" : clickedMenu));
    setOpenSubMenu(""); // Close any open submenu when main menu is clicked
  };

  const handleSubMenuClick = (clickedSubMenu) => {
    setOpenSubMenu((prevSubMenu) => (prevSubMenu === clickedSubMenu ? "" : clickedSubMenu));
  };

  return (
    <AnimatePresence>
      <motion.div
        key="mobileNavLinks"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
      >
        {links.map((link) => (
          <div key={link.name} className={`min-[1024px]:hidden`}>
            <h1
              onClick={() => handleMenuClick(link.name)}
              className="py-8 pl-7 text-xl font-bold md:pr-0 pr-5 flex justify-between items-center dark:text-black"
            >
              {link.name}
              <span className="text-xl min-[1024px]:mt-1 min-[1024px]:ml-2 inline">
                {openMenu === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h1>
            <AnimatePresence>
              {openMenu === link.name && (
                <motion.div
                  key="submenu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="ml-5"
                >
                  {link.sublinks.map((slinks) => (
                    <div key={slinks.Head}>
                      <h1
                        onClick={() => handleSubMenuClick(slinks.Head)}
                        className="py-4 pl-7 dark:text-black text-lg font-semibold md:pr-0 pr-5 flex justify-between items-center"
                      >
                        {slinks.Head}
                        <span className="text-xl min-[1024px]:mt-1 min-[1024px]:ml-2 inline">
                          {openSubMenu === slinks.Head ? <FaChevronUp /> : <FaChevronDown />}
                        </span>
                      </h1>
                      <AnimatePresence>
                        {openSubMenu === slinks.Head && (
                          <motion.div
                            key="sublinks"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="ml-5"
                          >
                            {slinks.sublink.map((slink) => (
                              <li className="py-3 pl-14 dark:text-black" key={slink.name}>
                                <Link href={slink.link}>{slink.name}</Link>
                              </li>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default MobileNavLinks;

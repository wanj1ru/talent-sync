// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Replace with the icons you need
// import Link from "next/link";
// import { links } from "./Mylinks";

// const NavLinks = () => {
//   const [heading, setHeading] = useState("");
//   const [subHeading, setSubHeading] = useState("");

//   return (
//     <>
//       {links.map((link) => (
//         <div key={link.name}>
//           <div className="  md:cursor-pointer group">
//             <h1
//               className=" flex justify-between items-center font-semibold md:pr-0 pr-5 group"
//               onClick={() => {
//                 heading !== link.name ? setHeading(link.name) : setHeading("");
//                 setSubHeading("");
//               }}
//             >
//               {link.name}
//               <span className="text-lg md:hidden inline">
//                 {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
//               </span>
//               <span className="text-lg md:mt-1 md:ml-2  md:block hidden group-hover:rotate-180 group-hover:-mt-2">
//                 <FaChevronDown />
//               </span>
//             </h1>
//             {link.submenu && (
//               <div>
//                 <div className="absolute top-20 hidden group-hover:md:block hover:md:block">
//                   <div className="py-3">
//                     <div
//                       className="w-4 h-4 left-3 absolute 
//                     mt-1 bg-gray-100 rotate-45"
//                     ></div>
//                   </div>
//                   <div className="bg-gray-100   p-5 grid grid-cols-2 gap-10">
//                     {link.sublinks.map((mysublinks) => (
//                       <div key={mysublinks.Head}>
//                         <h1 className="text-lg font-semibold">
//                           {mysublinks.Head}
//                         </h1>
//                         {mysublinks.sublink.map((slink) => (
//                           <li className="text-sm text-gray-600 my-2.5" key={slink.name}>
//                             <Link href={slink.link}>
//                               <span className="hover:text-primary">{slink.name}</span>
//                             </Link>
//                           </li>
//                         ))}
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           {/* Mobile menus */}
//           <div
//             className={`
//             ${heading === link.name ? "md:hidden" : "hidden"}
//           `}
//           >
//             {/* sublinks */}
//             {link.sublinks.map((slinks) => (
//               <div key={slinks.Head}>
//                 <div>
//                   <h1
//                     onClick={() =>
//                       subHeading !== slinks.Head
//                         ? setSubHeading(slinks.Head)
//                         : setSubHeading("")
//                     }
//                     className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center md:pr-0 pr-5"
//                   >
//                     {slinks.Head}
//                     <span className="text-xl md:mt-1 md:ml-2 inline">
//                       {subHeading === slinks.Head ? <FaChevronUp /> : <FaChevronDown />}
//                     </span>
//                   </h1>
//                   <div
//                     className={`${
//                       subHeading === slinks.Head ? "md:hidden" : "hidden"
//                     }`}
//                   >
//                     {slinks.sublink.map((slink) => (
//                       <li className="py-3 pl-14" key={slink.name}>
//                         <Link href={slink.link}>{slink.name}</Link>
//                       </li>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default NavLinks;


import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from "next/link";
import { links } from "./Mylinks";
import { motion } from "framer-motion";

const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const handleHeadingClick = (clickedHeading) => {
    setHeading((prevHeading) => (prevHeading === clickedHeading ? "" : clickedHeading));
    setSubHeading("");
  };

  const handleSubHeadingClick = (clickedSubHeading) => {
    setSubHeading((prevSubHeading) => (prevSubHeading === clickedSubHeading ? "" : clickedSubHeading));
  };

  return (
    <>
      {links.map((link) => (
        <div key={link.name} className="relative">
           <motion.div
            className="md:cursor-pointer group"
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <h1
              className="flex justify-between items-center font-semibold md:pr-0 pr-5"
              onClick={() => handleHeadingClick(link.name)}
            >
              {link.name}
              <span className="text-lg md:hidden inline">
                {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
              <span className="text-lg md:mt-1 md:ml-2 inline">
                {heading === link.name ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </h1>
            {link.submenu && (
                  <motion.div
                  className={`absolute top-10 ${heading === link.name ? "block" : "hidden"}`}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                <div className="py-3">
                  <div className="w-4 h-4 left-3 absolute mt-1 bg-gray-100 rotate-45"></div>
                </div>
                <div className="bg-gray-100 w-[270px] p-2 grid grid-cols-2 gap-10 rounded-tr-lg rounded-b-lg">
                  {link.sublinks.map((mysublinks) => (
                    <div key={mysublinks.Head}>
                      <h1 className="text-lg font-semibold">
                        {mysublinks.Head}
                      </h1>
                      {mysublinks.sublink.map((slink) => (
                        <li className="text-sm text-gray-600 my-2.5" key={slink.name}>
                          <Link href={slink.link}>
                            <span className="hover:text-primary">{slink.name}</span>
                          </Link>
                        </li>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>



          {/* Mobile menus */}
          <div className={`${heading === link.name ? "min-[1024px]:hidden" : "hidden"}`}>
            {link.sublinks.map((slinks) => (
              <div key={slinks.Head}>
                <div>
                  <h1
                    onClick={() => handleSubHeadingClick(slinks.Head)}
                    className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                  >
                    {slinks.Head}
                    <span className="text-xl min-[1024px]:mt-1 min-[1024px]:ml-2 inline">
                      {subHeading === slinks.Head ? <FaChevronUp /> : <FaChevronDown />}
                    </span>
                  </h1>
                  <div className={`${subHeading === slinks.Head ? "block" : "hidden"}`}>
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14" key={slink.name}>
                        <Link href={slink.link}>{slink.name}</Link>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;

"use client";
// import slides from "./data/slides";
// import { useEffect, useState } from "react";
// import group from "../public/group.png";
// import right from "../public/left.png"
// import left from "../public/right.png"
// import React from "react";
// import Image from "next/image";

// const Testimonial = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSlides = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };
//   useEffect(() => {
//     const interval = setInterval(
//       () =>
//         setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
//       4000
//     );
//     return () => clearInterval(interval);
//   }, []);
//   return (
//     <section className="bg-gray-50 my-28">
//       <div className="flex flex-col md:flex-row justify-between items-center container py-8 gap-40">
//         <main className="flex flex-col gap-8">
//           <Image src={slides[currentSlide].image} alt="" />
//           <span className="text-[#FDB022] text-xl">★★★★★</span>
//           <h1 className="text-3xl font-semibold text-gray-900 md:text-4xl ">
//             {slides[currentSlide].testimony}
//           </h1>
//           <div className="flex gap-8 sm:justify-between sm:items-center flex-col sm:flex-row">
//             <div className="flex items-center gap-4">
//               <Image src={slides[currentSlide].avatar} alt="" />
//               <div className="flex flex-col ">
//                 <h4 className="text-gray-900 font-semibold text-lg">{slides[currentSlide].name}</h4>
//                 <p className="text-gray-600">{slides[currentSlide].role}</p>
//               </div>
//             </div>
//             <div className="flex items-center justify-between sm:justify-start sm:gap-4">
//               <Image
//                 src={left}
//                 alt=""
//                 className="w-10 h-10 cursor-pointer"
//                 onClick={handleSlides}
//               />

//               <Image
//                 src={right}
//                 alt=""
//                 className="w-10 h-10 cursor-pointer"
//                 onClick={handleSlides}
//               />
//             </div>
//           </div>
//         </main>
//         <Image
//           src={group}
//           alt="group"
//           className="hidden md:block object-contain h-[400px]"
//         />
//       </div>
//     </section>
//   );
// };

// export default Testimonial;



import { motion } from "framer-motion";
import slides from "./data/slides";
import { useEffect, useState } from "react";
import group from "../public/group.png";
import right from "../public/left.png";
import left from "../public/right.png";
import React from "react";
import Image from "next/image";

const Testimonial = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlides = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      className="light:bg-gray-50 my-28"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col lg:flex-row justify-between items-center container py-8 gap-20">
        <main className="flex flex-col  gap-8 dark:text-slate-100">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image src={slides[currentSlide].image} alt="" className="dark:bg-slate-100 dark:p-4 dark:rounded-lg"/>
          </motion.div>
          <span className="text-[#FDB022] text-xl">★★★★★</span>
          <h1 className="text-2xl font-semibold dark:text-slate-100 text-gray-900 md:text-4xl ">
            {slides[currentSlide].testimony}
          </h1>
          <div className="flex gap-8 sm:justify-between sm:items-center flex-col sm:flex-row">
            <div className="flex items-center gap-4">
              <Image src={slides[currentSlide].avatar} width={70} height={70} alt="" />
              <div className="flex flex-col ">
                <h4 className="text-gray-900 font-semibold text-lg dark:text-slate-100">
                  {slides[currentSlide].name}
                </h4>
                <p className="text-gray-600 dark:text-slate-100">{slides[currentSlide].role}</p>
              </div>
            </div>
            <div className="flex items-center justify-between sm:justify-start sm:gap-4">
              <Image
                src={left}
                alt=""
                className="w-10 h-10 cursor-pointer"
                onClick={handleSlides}
              />

              <Image
                src={right}
                alt=""
                className="w-10 h-10 cursor-pointer"
                onClick={handleSlides}
              />
            </div>
          </div>
        </main>
        <Image
          src={group}
          alt="group"
          className=" object-contain h-[400px]"
        />
      </div>
    </motion.section>
  );
};

export default Testimonial;

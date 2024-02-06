"use client";
import React, { useEffect } from "react";

import "aos/dist/aos.css";

import Image from "next/image";
import people from "../public/people.png";
import arrow from "../public/arrow.png";
import advantages from "./data/advantage";

const Advantage = () => {
 

  console.log(advantages);
  console.log("Advantage component rendered")
  return (
    <section className="container ">
     
     <div className="flex flex-col gap-4  ">
        <span className="font-semibold text-[#175CD3] ">The ClearLink Advantage</span>
        <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#1D2939] dark:text-white ">
          Why choose ClearLink?
        </h2>
        <p className="text-gray-500  max-w-lg dark:text-slate-200">
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between gap-20 mt-16 md:mt-12">
        <main className="grid max-[560px]:w-full max-[560px]:grid-cols-1 max-[768px]:grid-cols-2  md:grid-cols-2 gap-14 min-[1024px]:w-4/6">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="flex flex-col gap-4"
              
            >
              <div className=" bg-gray-50 border  border-gray-200 p-2 rounded-full w-10 h-10">
                <Image
                  src={advantage.img}
                  width={40}
                  height={40}
                  alt={advantage.title}
                  className="z-50"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {advantage.title}
              </h3>
              <p className="text-gray-600 w-[260px] dark:text-slate-200">{advantage.desc}</p>
            </div>
          ))}
        </main>



        <aside className="hidden lg:block w-2/6 relative mt-12">
          <Image
            src={arrow}
            alt="arrow"
            className="absolute -top-32 w-48 left-[13%]"
          />
          <Image src={people} alt="people" className="" />
        </aside>
      </div>
    </section>
  );
};

export default Advantage;
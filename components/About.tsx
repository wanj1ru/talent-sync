"use client";
import faqs from "./data/faq";
import React, { useEffect, useState } from "react";
import FAQ from "./ui/FAQ";
import Faq from "./Faq";

const About = () => {

  return (
    <section className="container  flex flex-col max-[1284px]:gap-2 min-[1285px]:flex-row gap-20 justify-between items-center">
      <div className="flex flex-col  max-[768px]:mb-0 min-[1285px]:mb-24 gap-4 md:w-3/6">
        <span className="font-bold text-[#175CD3] text-[13px] mb-4 hduration-300 transition cursor-pointer">Support</span>
        <h2 className="font-bold dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-gray-800">
          FAQs
        </h2>
        <p className="text-gray-500 dark:text-slate-300 font-medium  max-w-md text-lg">
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please
          <span className="underline ml-1"> chat to our friendly team</span>.
        </p>
      </div>
      <div className="md:w-4/6 max-[1284px]:mt-[-80px]" >
       <Faq />
      </div>
    </section>
  );
};

export default About;

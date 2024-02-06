import React from "react";
import tick from "../public/tick.png";
import Image from "next/image";
import screen from "../public/screen.png"
import Button from "./ui/Button";
const BeforeFooter = () => {
  return (
    <section className="flex  flex-col md:flex-row justify-between mx-0 overflow-x-hidden mt-28 mb-2 md:mb-20 min-[1400px]:mt-36">
      <div className="ml-[5%]">
        <h1 className="text-gray-900 dark:text-slate-100 text-2xl sm:text-3xl md:text-4xl font-semibold  mb-6">
          Ready to clear the path to perfect communication?
        </h1>
        <ul className="flex gap-6 flex-col">
          <li className="flex gap-3 items-center ">
            <Image src={tick} alt="" />
            <span className="text-gray-600 text-lg dark:text-slate-100">30 days free trial</span>
          </li>
          <li className="flex gap-3 items-center ">
            <Image src={tick} alt="" />
            <span className="text-gray-600 text-lg dark:text-slate-100">Cancel at any time</span>
          </li>
          <li className="flex gap-3 items-center ">
            <Image src={tick} alt="" />
            <span className="text-gray-600 text-lg dark:text-slate-100">
              Access to all features
            </span>
          </li>
          <li className="flex gap-3 items-center ">
            <Image src={tick} alt="" />
            <span className="text-gray-600 text-lg dark:text-slate-100">
              Peronalized onboarding
            </span>
          </li>
        </ul>
        <div className="flex  flex-wrap sm:items-center gap-4 mt-8 ">
          <Button
            value="Talk to sales"
            styles="text-gray-900 bg-white border border-gray-400 w-full hover:scale-110 transition duration-300"
            link=""
          />
          <Button
            value="Start your free trial"
            styles="text-white bg-[#175CD3] hover:scale-110 transition duration-300"
            link=""
          />
        </div>
      </div>
      <Image
        src={screen}
        alt="screen"
        className="h-[400px] max-[480px]:mt-0 max-[768px]:mt-12  max-[768px]:mr-0 object-contain -mr-14 overflow-x-hidden"
      />
    </section>
  );
};

export default BeforeFooter;

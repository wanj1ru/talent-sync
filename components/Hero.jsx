import Image from "next/image";
import React from "react";
 import hero from "../public/frame.png";
import Button from "./ui/Button";
import Link from "next/link";

const Hero = () => {


  return (
    <header className="container flex flex-col min-[960px]:flex-row items-center justify-between gap-8 max-[768px]:mt-32 md:mt-32 max-[960px]:dark:bg-black/35 max-[1280px]:dark:bg-black/15">

      <main className="lg:w-4/6 flex flex-col max-[768px]:items-center gap-8 text-center md:mb-12 md:text-start">
        <h1 className="max-[358px]:text-[27px] max-[500px]:text-[32px] max-[960px]:text-6xl max-[960px]:mt-8 max-[1024px]:text-[24px] max-[1024px]:mt-20 min-[1025px]:text-[35px] min-[1025px]:mt-24 min-[1280px]:text-[40px] min-[1280px]:mt-16  min-[1370px]:text-7xl font-bold text-[#1D2939] dark:text-white">
          Uniting the world,
          <br />
          one video call at a time
        </h1>
        <p className="text-gray-500 max-[358px]:text-[11px]  font-medium max-[768px]:flex max-[768px]:justify-center max-[768px]:w-full max-[960px]:text-[12px] max-[1370px]:text-lg min-[960px]:text-[12px] leading-7 lg:mt-2 max-w-md dark:text-white">
          Experience the future of communication with ClearLink – <br /> where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex flex-col max-[1040px]:mt-8 min-[1280px]:mt-16 min-[500px]:flex-row gap-6 items-center">
          <Button
            value="Start your free trial"
            link=""
            styles="bg-blue-500 text-white hover:scale-110 transition duration-300"
          />
          <Link href="" className="flex items-center font-semibold dark:text-white gap-4 text-[#175CD3] hover:scale-110 transition duration-300">
            <Image src="/bot.svg" width={20} height={20} alt="bot" />
            Discover AI assistant
          </Link>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 ">
          <Image src="/avatars.png" width={70} height={70} alt="avatars" />
          <div className="flex flex-col ">
            <div className="flex gap-1 items-center">
              <Image src="/star.png" width={15} height={15} alt="star" />
              <Image src="/star.png" width={15} height={15} alt="star" />
              <Image src="/star.png" width={15} height={15} alt="star" />
              <Image src="/star.png" width={15} height={15} alt="star" />
              <Image src="/star.png" width={15} height={15} alt="star" />
              5.0
            </div>
            <p>from 3,000+ reviews</p>
          </div>
        </div>
      </main>
      <Image src={hero} alt="hero" className="w-full min-[960px]:w-3/6 min-[960px]:mt-24 " />
    </header>
  );
};

export default Hero;

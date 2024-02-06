
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Advantage from "@/components/Advantage";
import Testimonial from "@/components/Testimonial";
import About from "@/components/About";
import BeforeFooter from "@/components/BeforeFooter";
import Footer from "@/components/Footer";


export default function Home() {
  console.log("Home component rendered");
  return (
    <div>
      <div className="background-container">
        <Navbar />
        <Hero />
      </div>
      <Partners />
      <Advantage />
      <Testimonial />
      <About />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

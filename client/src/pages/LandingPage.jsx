import React from "react";
import SoftAurora from "@/components/ui/SoftAurora";
import Navbar2 from "@/components/landing/Navbar2";
import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black">
      <Navbar2 />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
};

export default LandingPage;

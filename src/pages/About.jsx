import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
    <section className="h-screen overlay-bg font-[Poppins] md:bg-top bg-center">
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h1 className="t-84 font-bold text-2xl">ABOUT PAGE</h1>
        <div className="text-xl">
        </div>
      </div>
    </section>
    <Footer />
  </>
  )
}

export default About
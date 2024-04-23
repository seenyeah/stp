import React from 'react'
import Button from "../components/Button";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import "./Presentation.css"

const Presentation = () => {
  return (
    <>
      <section className="h-screen overlay-bg font-[Poppins] md:bg-top bg-center">
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h1 className="t-84 font-bold text-2xl">Dedan Kimathi University of Technology : Science and Technology Park</h1>
          <div>
            <p>Established with a mandate to intensify application of science, technology and innovation through interplay among the Government, the Industry, the Academia and the Society.</p>
          </div>
          <div className="text-xl">
            <Button />
          </div>
        </div>
      </section>
      <Stats />
      <Footer />
    </>

  )
}

export default Presentation
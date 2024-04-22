import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import './App.css';

const App = () => {
  return (
    <section
      className="h-screen overlay-bg
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="justify-center text-center items-center h-3/4">
        <h1 className="t-84 relative mx-auto max-w-[1098px] pt-28 text-center font-heading will-change-transform  md:pt-28 3xl:pt-[16rem]">Dedan Kimathi University of Technology : Science and Technology Park</h1>
        <div className="container relative mt-6 text-center will-change-transform md:mt-[18px] ">
          <div className="mx-auto w-full max-w-[812px] text-center">
            <p>DeST-Park is established with a mandate to intensify application of science, technology and innovation through interplay among the Government, the Industry, the Academia and the Society.</p>
          </div>
          <Button />
        </div>
        <div className="text-xl">
        </div>
      </div>
    </section>
  );
};

export default App;

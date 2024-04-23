import React from 'react';
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer";
import { Unity, useUnityContext } from "react-unity-webgl";


const ICTHub = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/public.loader.js",
    dataUrl: "/public.data.unityweb",
    frameworkUrl: "/public.framework.js.unityweb",
    codeUrl: "/public.wasm.unityweb",
  });

  return (
    <>
      <section className="h-screen overlay-bg font-[Poppins] md:bg-top bg-center">
        <Navbar />
        <div className="flex flex-col justify-center text-center items-center h-3/4">
          <h1 className="t-84 font-bold text-2xl">ICT PAGE</h1>
          <div className="text-xl">
          </div>
        </div>
      </section>
      <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}> {/* Outermost div */}
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }}>
          <h1 className="text-3xl font-bold text-center">2D Traffic Racer Game</h1>
          {unityProvider && (
            <Unity unityProvider={unityProvider} style={{ width: 800, height: 600 }} />
          )}
        </div>
      </div>
      <Footer />
    </>


  )
}

export default ICTHub
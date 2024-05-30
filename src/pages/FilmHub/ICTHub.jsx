import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Unity, useUnityContext } from "react-unity-webgl";
import { Link } from 'react-router-dom';
import { sector1,sector2,sector3,sector4,script,badge1,badge2,badge3,twoDimage,threeDdesign, gaming } from '../../assets';
import { height } from '@fortawesome/free-brands-svg-icons/fa42Group';
import Carousel from 'react-multi-carousel';

import  "./filmhub.css"
const ICTHub = () => {
  const { unityProvider } = useUnityContext({
    loaderUrl: "/public.loader.js",
    dataUrl: "/public.data.unityweb",
    frameworkUrl: "/public.framework.js.unityweb",
    codeUrl: "/public.wasm.unityweb",
  });
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <>
      
      <section className="h-screen overlay-bg font-[Poppins] md:bg-top bg-center">
        <Navbar />
     <div style={{ backgroundColor: '#f0f0f0', padding: '20px' }} height="300">
      <h1 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', marginBottom: '20px' }}>Film Hub</h1>
      {unityProvider && (
        <Unity key="game1" unityProvider={unityProvider} style={{ width: '100%', height: '400px', borderRadius: '8px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }} />
      )}
  

  {/* Game 2 */}
 

  {/* Add more games as needed */}
  {/* ... */}
</div>


      </section>
      <h2 className="text-3xl font-bold text-center mb-8 mt-8">Contents</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8">
  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"> <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={sector1}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Section 1 Item 1</h2>
                <p className="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
              </div>
              <Link to="/login">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={sector1}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Section 1 Item 1</h2>
                <p className="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
              </div>
              <Link href="/contact">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={sector1}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Section 1 Item 1</h2>
                <p className="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
              </div>
              <Link href="/contact">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={sector1}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Section 1 Item 1</h2>
                <p className="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
              </div>
              <Link href="/contact">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
            {/* Add the other div elements for section 1 here */}
        </div>
        <h2 className="text-3xl font-bold text-center mb-8 mt-8">Awards</h2>
        <div className="awards">
<Carousel responsive={responsive}>
 
<div className="award rounded-full overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
    <div className="relative w-full h-full">
      <img className="w-20 h-20 object-fit rounded-full" src={badge2} alt="Award Icon" />
      <span className="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-xs font-bold text-white">Award</span>
    </div>
    <div className="mt-4 text-center">
      <h3 className="text-lg font-medium text-gray-900 mb-1">KFC 2021</h3>
      <p className="text-gray-700 leading-relaxed">KFC 2021</p>
      <Link to="/contact" className="flex items-center text-indigo-500 mt-2">
        <span className="mr-1">Learn More</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
<div class="award rounded-full overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center p-4">
  <div class="relative w-full h-full">
    <img class="w-20 h-20 object-fit rounded-full" src={badge1} alt="Award Icon" />
    <span class="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-xs font-bold text-white">Award</span>
  </div>
  <div class="mt-4 text-center"> <h3 class="text-lg font-medium text-gray-900 mb-1">KFC 2021</h3>
    <p class="text-gray-700 leading-relaxed">KFC 2021</p>
    <Link to="/contact" class="flex items-center text-indigo-500 mt-2"> <span class="mr-1">Learn More</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div><div class="award rounded-full overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center p-4">
  <div class="relative w-full h-full">
    <img class="w-20 h-20 object-fit rounded-full" src={badge3} alt="Award Icon" />
    <span class="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-xs font-bold text-white">Award</span>
  </div>
  <div class="mt-4 text-center"> <h3 class="text-lg font-medium text-gray-900 mb-1">Section 1 Item 1</h3>
    <p class="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
    <Link to="/contact" class="flex items-center text-indigo-500 mt-2"> <span class="mr-1">Learn More</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div><div class="award rounded-full overflow-hidden shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center p-4">
  <div class="relative w-full h-full">
    <img class="w-20 h-20 object-fit rounded-full" src={sector1} alt="Award Icon" />
    <span class="absolute top-0 right-0 p-1 bg-red-500 rounded-full text-xs font-bold text-white">Award</span>
  </div>
  <div class="mt-4 text-center"> <h3 class="text-lg font-medium text-gray-900 mb-1">Section 1 Item 1</h3>
    <p class="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
    <Link to="/contact" class="flex items-center text-indigo-500 mt-2"> <span class="mr-1">Learn More</span>
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  </div>
</div>
  {/* Repeat the above div for other content items */}
  </Carousel>
  </div>
 
<h2 className="text-3xl font-bold text-center mb-8 mt-8">Courses</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-grey gap-8 mb-8">
  
  <div className="p-6 bg-blue rounded-lg shadow-md hover:shadow-lg transition duration-300"> <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={twoDimage}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">2D Animation</h2>
                <p className="text-gray-700 leading-relaxed">Offer 2D Animation Course</p>
              </div>
              <Link href="/contact">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={threeDdesign}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">3D Design</h2>
                <p className="text-gray-700 leading-relaxed">Offer 3D Graphic Design</p>
              </div>
              <Link href="/contact">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={script}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Script Writting Course</h2>
                <p className="text-gray-700 leading-relaxed">Offer Script Writting Course</p>
              </div>
              <Link href="/signup">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div>  <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img
                className="w-full h-48 object-cover object-center mb-4 rounded-md"
                src={gaming}
                alt="Section 1 img 1"
              />
              <div className="mb-4">
                <h3 className="text-xs font-medium text-gray-500 uppercase tracking-widest mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-lg font-medium text-gray-900 mb-2">Software Development and Gaming</h2>
                <p className="text-gray-700 leading-relaxed">Description for Section 1 Item 1</p>
              </div>
              <Link href="/signup">
                <button className="text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </Link>
            </div></div>

      
      <Footer />
    </>


  )
}

export default ICTHub
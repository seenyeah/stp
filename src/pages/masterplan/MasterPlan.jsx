"use client";
import { skyBg, homePark, partner1,partner2,partner3,partner4 ,sector1,sector2,sector3,sector4} from "../../assets";
 
import React, { useState } from 'react';


export default function MasterPlan() {
 const [currentSlide, setCurrentSlide] = useState(0);
 const slides = [sector1, sector2, sector3];

 const handlePrevSlide = () => {
   setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
 };

 const handleNextSlide = () => {
   setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
 };

 return (
   <div>
     <h1>Master Plan</h1>
     {/* First Section: Slider */}
     <section>
       <div style={{ display: 'flex' }}>
         <div style={{ flex: 1, position: 'relative' }}>
           <Image src={slides[currentSlide]} alt="Slider" style={{ maxWidth: '100%' }} />
           <button style={{ position: 'absolute', top: '50%', left: '10px' }} onClick={handlePrevSlide}>
             Prev
           </button>
           <button style={{ position: 'absolute', top: '50%', right: '10px' }} onClick={handleNextSlide}>
             Next
           </button>
         </div>
       </div>
     </section>

     {/* Second Section: Picture and Description */}
     <section>
       <div style={{ display: 'flex' }}>
         <div style={{ flex: 1 }}>
           <Image src={sector1} alt="Description of the image" style={{ maxWidth: '100%' }} />
         </div>
         <div style={{ flex: 1, marginLeft: '20px' }}>
           <h2>Section Title</h2>
           <p>
             This is the description of the section. You can add more details and information here.
           </p>
           <button>Read More</button>
         </div>
       </div>
     </section>

     {/* Third Section: Three Pictures with Descriptions */}
     <section>
       <div style={{ display: 'flex', flexWrap: 'wrap' }}>
         <div style={{ flex: 1, padding: '10px' }}>
           <Image src={sector1} alt="Description of image 1" style={{ maxWidth: '100%' }} />
           <h3>Image 1 Title</h3>
           <p>Description of image 1</p>
           <button>Read More</button>
         </div>
         <div style={{ flex: 1, padding: '10px' }}>
           <Image src={sector3} alt="Description of image 2" style={{ maxWidth: '100%' }} />
           <h3>Image 2 Title</h3>
           <p>Description of image 2</p>
           <button>Read More</button>
         </div>
         <div style={{ flex: 1, padding: '10px' }}>
           <Image src={sector4} alt="Description of image 3" style={{ maxWidth: '100%' }} />
           <h3>Image 3 Title</h3>
           <p>Description of image 3</p>
           <button>Read More</button>
         </div>
       </div>
     </section>
   </div>
 );
}
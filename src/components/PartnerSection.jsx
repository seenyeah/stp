import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { partner1, partner2, partner3, partner4 } from '../assets';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PartnersSection = () => {
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
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
            Our Partners
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Companies and Organizations
          </p>
        </div>
        <div className="mt-10">
          <Carousel responsive={responsive}>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-75">
              <img src={partner1} alt="Partner Logo 1" width={150} height={150} className="mb-2" />
              <span className="text-sm font-semibold">Partner 1</span>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-75">
              <img src={partner4} alt="Partner Logo 4" width={150} height={150} className="mb-2" />
              <span className="text-sm font-semibold">Partner 4</span>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-75">
              <img src={partner2} alt="Partner Logo 2" width={150} height={150} className="mb-2" />
              <span className="text-sm font-semibold">Partner 2</span>
            </div>
            <div className="flex flex-col justify-center items-center cursor-pointer hover:opacity-75">
              <img src={partner3} alt="Partner Logo 3" width={150} height={150} className="mb-2" />
              <span className="text-sm font-semibold">Partner 3</span>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;

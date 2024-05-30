import React from "react";
import { stats } from "../constants";
import styles from "../styles";
import { partner1, partner2, partner3, partner4, sector1, sector2, sector3, sector4 } from "../assets";
import { Link } from "react-router-dom";
import PartnersSection from "./PartnerSection";

const Stats = () => (
  <div>
    <>
      <div className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            <div className={`${styles.sector} p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
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
            <div className={`${styles.sector} p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
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
            </div>  <div className={`${styles.sector} p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
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
            </div>  <div className={`${styles.sector} p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300`}>
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
        </div>
      </div>

      <PartnersSection/>

      {/* Subscribe to News Section */}
      <div className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
              Stay Updated
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Subscribe to Our Newsletter
            </p>
          </div>
          <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
            <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <form action="#" method="POST" className="sm:flex">
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  type="email"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  required
                  className="w-full px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md border-white/20"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="mt-3 w-full px-5 py-3 border border-transparent rounded-md shadow bg-blue-400 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:flex-shrink-0 sm:inline-flex sm:items-center sm:w-auto"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  </div>
);

export default Stats;
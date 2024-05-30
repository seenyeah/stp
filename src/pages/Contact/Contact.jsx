import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram ,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  return (
    <div className="bg-gray-100">
      <section className="min-h-screen overlay-bg font-[Poppins] md:bg-top bg-center">
        <Navbar />
        <div className="container mx-auto py-16 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg shadow-lg p-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                <form>
                  <div className="mb-4">
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  <div className="mb-4">
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
              <div className="bg-gray-100 rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Location</h2>
                <div className="mb-4">
                  <p className="text-lg">Dedan Kimathi University of Technology</p>
                  <p className="text-lg">Private Bag – 10143, Dedan Kimathi</p>
                </div>
                <div className="mb-4">
                  <p className="text-lg">Phone: +254 702 333 068</p>
                  <p className="text-lg">Email: stpark@dkut.ac.ke</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-500 hover:text-green-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-green-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="#" className="text-orange-700 hover:text-green-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    <a href="#" className="text-blue-500 hover:text-green-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                    <a href="#" className="text-red-500 hover:text-green-600 transition-colors duration-300">
                      <FontAwesomeIcon icon={faYoutube} size="2x" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

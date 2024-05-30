import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Accordion from '../../pages/accordion/Accordion/';
import './about.css';
import image2 from '../../assets/dstpc.png';
import Objectves from '../../assets/Objectives.gif';
import Learning from "../../assets/learning.gif"
import Startups from "../../assets/startup.gif"

const About = () => {
  return (
    <div className="about-page">
      <Navbar />
      <header
        className="bg-center bg-cover h-64 md:h-96 lg:h-128"
        style={{
          backgroundImage: `url(${image2})`,
        }}
      >
        <div className="container mx-auto text-center">
          {/* <h1 className="text-4xl font-bold text-white">About DeKUT Science and Technology Park</h1> */}
        </div>
      </header>
      <div className="mx-auto px-4">
        <div className="about flex flex-col md:flex-row">
          <div className="accordion-container w-full md:w-1/2 p-4">
            <Accordion />
          </div>
          <div className="details-container w-full md:w-1/2 p-4">
            <div className="flex flex-wrap -mx-4">
              <div className="card bg-white rounded-lg shadow-md p-6 mb-8">
                <section id="background" className="section">
                  <h2 className="text-3xl font-bold mb-4">Background</h2>
                  <p className="mb-4">The International Association of Science Parks has defined an STP as a property-based initiative which has operational links with Universities, Research Centres and other Institutions of Higher Education; is designed to encourage the formation and growth of knowledge-based industries or high value-added tertiary firms, normally resident on site; or has a steady management team actively engaged in fostering the transfer of technology and business to tenant organizations.</p>
                  {/* Add more content for background section */}
                  <p className="mb-4">The International Association of Science Parks has defined an STP as a property-based initiative which has operational links with Universities, Research Centres and other Institutions of Higher Education; is designed to encourage the formation and growth of knowledge-based industries or high value-added tertiary firms, normally resident on site; or has a steady management team actively engaged in fostering the transfer of technology and business to tenant organizations.</p>
                </section>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="card bg-white rounded-lg p-6 mb-8 flex flex-col md:flex-row">
            <section id="objectives" className="section flex-1">
              <h2 className="text-3xl font-bold mb-4">Objectives</h2>
              <ul className="list-disc pl-8">
                <li>Provide a business-oriented framework ensuring sustainability of the park and incubators.</li>
                <li>Provide a framework that optimizes comparative and legal advantages and better potentials of the park in becoming a major regional centre for economic, research, and scientific activities.</li>
                {/* Add more objectives */}
              </ul>
            </section>
            <img
              src={Objectves}
              alt="gif_description"
              className="mx-auto md:ml-auto mt-4 md:mt-0"
              style={{ width: '200px' }}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="card bg-white rounded-lg p-6 mb-8 flex flex-col md:flex-row">
            <section id="objectives" className="section flex-1">
              <h2 className="text-3xl font-bold mb-4">DeST-Park Activities</h2>
              <p className="mb-4">Dedan Kimathi University of Technology (DeKUT), Karatina University and Chuka University in collaboration with Saarland University- Germany engaged in capacity building initiatives for the DeST-Park ecosystem through advancement of entrepreneurial orientation and providing an international benchmark.</p>
            </section>
            <img
              src={Learning}
              alt="gif_description"
              className="mx-auto md:ml-auto mt-4 md:mt-0"
              style={{ width: '200px' }}
            />
          </div>
        </div>
        <div className="w-full">
          <div className="card bg-white rounded-lg p-6 mb-8 flex flex-col md:flex-row">
            <section id="objectives" className="section flex-1">
              <h2 className="text-3xl font-bold mb-4">Startup Weekends</h2>
              <p className="mb-4">Dedan Kimathi University of Technology (DeKUT), Karatina University and Chuka University in collaboration with Saarland University- Germany engaged in capacity building initiatives for the DeST-Park ecosystem through advancement of entrepreneurial orientation and providing an international benchmark.</p>
            </section>
            <img
              src={Startups}
              alt="gif_description"
              className="mx-auto md:ml-auto mt-4 md:mt-0"
              style={{ width: '200px' }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
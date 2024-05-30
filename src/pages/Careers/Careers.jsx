import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

const Careers = () => {
  const [showModal, setShowModal] = useState(false);
  const [unavailableJob, setUnavailableJob] = useState(null);

  const jobListings = [
    { title: 'Front-end Developer', description: 'We are seeking an experienced Front-end Developer to join our team...', available: true },
    { title: 'Back-end Developer', description: 'We are looking for a talented Back-end Developer to work on our cutting-edge products...', available: false },
    { title: 'Full-stack Developer', description: 'An exciting opportunity for a Full-stack Developer to work on our innovative web applications...', available: true },
  ];

  const handleApplyClick = (job) => {
    setUnavailableJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setUnavailableJob(null);
  };

  return (
    <>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Join Our Team</h2>
        {jobListings.map((job, index) => (
          <div key={index} style={{ border: '1px solid #ccc', borderRadius: '4px', padding: '1rem', marginBottom: '1rem' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{job.title}</h3>
            <p style={{ marginBottom: '0.5rem' }}>{job.description}</p>
            <button
              style={{
                backgroundColor: '#09c2e3',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={() => handleApplyClick(job)}
              disabled={!job.available}
            >
              {job.available ? 'Apply Now' : 'Not Available'}
            </button>
          </div>
        ))}
      </div>
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <div
            style={{
              backgroundColor: '#fff',
              padding: '2rem',
              borderRadius: '4px',
              boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h3>{unavailableJob?.available ? 'Apply for Role' : 'Role Unavailable'}</h3>
            <p>
              {unavailableJob?.available
                ? `You are applying for the role "${unavailableJob?.title}".`
                : `The role "${unavailableJob?.title}" is no longer available.`}
            </p>
            <button
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Careers;
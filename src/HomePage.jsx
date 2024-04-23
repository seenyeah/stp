import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Presentation from "./pages/Presentation";
import ICTHub from "./pages/ICTHub";
import About from './pages/About';

const HomePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/ict-hub" element={<ICTHub />} />
      <Route path='/about' element={ <About /> }/>
    </Routes>
  );
};

export default HomePage;
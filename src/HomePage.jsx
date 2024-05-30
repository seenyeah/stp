import React from 'react';
import { Routes, Route, Router } from 'react-router-dom';
import Presentation from "./pages/Presentation";
import ICTHub from './pages/FilmHub/ICTHub';
import About from './pages/About/About';
import Contact from "./pages/Contact/Contact"
import Careers from './pages/Careers/Careers'
import SignUpPage from './pages/Signup/SignUp';
import LoginPage from './pages/Login/Login';
import { ToastContainer } from 'react-toastify';
import Courses from './pages/Courses/Courses';
// import MasterPlan from "./pages/masterplan/index"
const HomePage = () => {
  return (
<>
<Routes>
      <Route path="/" element={<Presentation />} />
      <Route path="/ict-hub" element={<ICTHub />} />
      <Route path='/about' element={ <About /> }/>
      <Route path='/contact' element={ <Contact /> }/>
      <Route path='/careers' element={ <Careers /> }/>
      <Route path='/signup' element={ <SignUpPage /> }/>

      <Route path='/login' element={ <LoginPage /> }/>
      <Route path='/courses' element={ <Courses /> }/>


      
       
      {/* <Route path='/MasterPlan' element={ <MasterPlan/> }/> */}

    </Routes>
    </>

  );
};

export default HomePage;
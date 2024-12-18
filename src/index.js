import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Aboutus from './components/Aboutus';
import Donate from './components/Donate';
import Chitrakoot from './components/Chitrakoot';
import Service from './components/Service';
import Events from './components/Events';
import Gallery from './components/Gallery';
import Login from './components/Login';
import Contact from './components/Contact';
import Layout from './components/Layout';
import Navbar from './components/Navbar';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import VadicCourses from "./components/VadicCourses"
import Iskon from './components/Iskon';
import Prabhupad from './components/Prabhupad';
import Enquiry from './components/Enquiry';
import Developer from './components/Developer';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
     <BrowserRouter>
     <Navbar/>
      <Routes>
          <Route path='/' element={<Layout/>} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/service" element={<Service />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/event" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/login" element={<Login />} />
          <Route path='course' element={<VadicCourses/>}/>
          <Route path='developer' element={<Developer/>}/>
          <Route path='chitrakoot' element={<Chitrakoot/>}/>
          <Route path='prabhu' element={<Prabhupad/>}/>
          <Route path='iscon' element={<Iskon/>}/>
        
        
      </Routes>
      <Footer/>
    </BrowserRouter>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

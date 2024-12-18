
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import logo2 from '../Assects/iskonlogo.png'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isVideoCourseOpen, setIsVideoCourseOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);

  const menuRef = useRef(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 sticky top-0 z-50 text-white shadow-lg">
      <div className="container mx-auto flex items-center text-center justify-between p-4">
        <div className="text-2xl font-bold flex items-center">
          <img
            src={logo2}
            alt=""
            className="h-10" style={{height:'60px',borderRadius:'75px',width:'65px'}}
            
            
          />
          <span className="ml-2">Chitrakoot</span>
        </div>

      
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>

      
        <div
          ref={menuRef}
          className={`lg:flex lg:items-center lg:space-x-8 absolute lg:relative bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 lg:bg-transparent w-full lg:w-auto z-50 top-[68px] left-0 lg:top-auto lg:left-auto transition-all duration-300 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:items-center text-center space-y-4 lg:space-y-0 lg:space-x-8">
            <li>
              <Link
                to='/'
                className="block text-gray-300 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}
              >
                Home
              </Link>
            </li>

          
            <li
              className="relative group flex items-center justify-center"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <button className="block px-4 py-2 text-center hover:text-gray-200 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}>
                About
              </button>
              <ul
                className={`absolute top-full left-[45%] mx-6 items-center justify-center bg-white text-gray-800 rounded-lg shadow-lg mt-2 space-y-2 p-2 transform transition-all duration-300 ${
                  isAboutOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <li>
                  <a
                    href="/iscon"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                   Iskon
                  </a>
                </li>
                <li>
                  <a
                    href="/prabhu"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                     Shrila phrabhupaad
                  </a>
                </li>
                <li>
                  <a
                    href="/chitrakoot"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Chitrakoot
                  </a>
                </li>

                <li>
                  <a
                    href="/service"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                     Services
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="/contact"
                className="block text-gray-300 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/donate"
                className="block text-gray-300 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}
              >
                Donate
              </a>
            </li>
            <li>
              <a
                href="/gallery"
              className="block text-gray-300 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}
              >
                Gallery
              </a>
            </li>

           

          
            <li
              className="relative group text-center"
              onMouseEnter={() => setIsVideoCourseOpen(true)}
              onMouseLeave={() => setIsVideoCourseOpen(false)}
            >
              <button className="   px-4 py-2 hover:text-gray-200 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}>
                Vedic Course
              </button>
              <ul
                className={`absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-lg mt-2 space-y-2 p-2 transform transition-all duration-300 ${
                  isVideoCourseOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <li>
                  <a
                    href="/course"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Vedic Course
                  </a>
                </li>
                <li>
                  <a
                    href="event"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Events
                  </a>
                </li>
              </ul>
            </li>

            <li
              className="relative group text-center"
              onMouseEnter={() => setIsUserOpen(true)}
              onMouseLeave={() => setIsUserOpen(false)}
            >
              <button className="   px-4 py-2 hover:text-gray-200 lg:inline lg:py-0" style={{textDecoration:'none',fontWeight:'bold',color:'white',fontSize:'20px'}}>
                User
              </button>
              <ul
                className={`absolute top-full left-0 bg-white text-gray-800 rounded-lg shadow-lg mt-2 space-y-2 p-2 transform transition-all duration-300 ${
                  isUserOpen
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
              >
                <li>
                  <a
                    href="/enquiry"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Enquiry
                  </a>
                </li>
                <li>
                  <a
                    href="/feedback"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    href="login"
                    className="block px-4 py-2 hover:bg-gray-100 rounded" style={{textDecoration:'none',color:'black',fontSize:'20px'}}
                  >
                    Login
                  </a>
                </li>
              </ul>
              </li>
           
          </ul>
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;

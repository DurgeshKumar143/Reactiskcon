import React from "react";

const Footer = () => {
  return (
    <div>
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5">
        {/* Column 1 */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">ISCON Chitrakoot</h2>
          <p className="mt-4 text-sm text-gray-300">
            Welcome to ISCON Chitrakoot! A place to explore spirituality and devotion.
          </p>
          <div className="mt-4">
            <a
              href="#"
              className="inline-block p-3 bg-yellow-400 rounded-full hover:bg-yellow-500 transition"
              aria-label="Icon Link"
            >
              {/* Add your icon here, e.g., FontAwesome */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 10.5l4.5 4.5-4.5 4.5M3 12h16.5"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h2 className="text-lg font-semibold">Contact Us</h2>
          <p className="mt-2 text-sm text-gray-300">
            <strong>Address:</strong> Chitrakoot, India
          </p>
          <p className="mt-2 text-sm text-gray-300">
            <strong>Phone:</strong> +91-1234567890
          </p>
          <p className="mt-2 text-sm text-gray-300">
            <strong>Email:</strong> info@isconchitrakoot.com
          </p>
        </div>

        {/* Column 3 */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-gray-300">
            <li>
              <a href="#home" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-yellow-400 transition">
                Services
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <p className="mt-4 text-sm text-gray-300">
            Stay updated with our latest news and offers.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-gray-700 text-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <button
              type="submit"
              className="mt-2 w-full p-2 bg-yellow-400 rounded-md text-gray-800 font-semibold hover:bg-yellow-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      </footer>

  
<div className=" row text-center p-3" style={{backgroundColor: 'gray'}}>
<div className="col-sm-6">
© 2024 Copyright:&nbsp;
  <a className="text-light" href="iskon@Chitrakoot.com">iskon@chitrakoot.com</a>
</div>
 
  <div className="col-sm-6">
  <span>Developed By:&nbsp;<a href="/developer" style={{color:'white'}}>KSS Team</a></span>
  </div>
  

</div>
</div>
    
  );
};

export default Footer;

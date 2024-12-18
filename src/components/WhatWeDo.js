import React from "react";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-50 to-blue-50 py-12 px-6">
      {/* Top Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-800 shadow-md inline-block pb-2 px-6 rounded-lg">
          What We Do
        </h1>
        <h4 className="mt-4 text-lg text-gray-700 font-medium">
          Learn More What We Do And Get Involved
        </h4>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
        {/* Example Card 1 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-blue-500 overflow-hidden animate-pulse">
              <img
                src="http://www.iskconchitrakoot.com/img/service/service1.jpeg"
                alt="Community Service"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-blue-800 text-center mt-4">
          Bhakti Vriksha
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-center mt-2">
          Understanding Bhagwad Gita and apply its teachings in our daily lives.
          </p>
          {/* Button */}
          <div className="text-center mt-4">
            <a
              href="/community-service"
              className="inline-flex items-center bg-blue-700 text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-blue-800 transform hover:scale-105 transition duration-300"
            >
              Learn More{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L19.5 12m0 0L13.5 19.5M19.5 12H4.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Example Card 2 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-green-500 overflow-hidden animate-pulse">
              <img
                src="http://www.iskconchitrakoot.com/img/service/service2.webp"
                alt="Education Program"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-green-800 text-center mt-4">
          Annadana Seva
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-center mt-2">
          Anna Daan is a way to please Lord Krishna. Anna daan is maha daan.
          </p>
          {/* Button */}
          <div className="text-center mt-4">
            <a
              href="/education-program"
              className="inline-flex items-center bg-green-700 text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-green-800 transform hover:scale-105 transition duration-300"
            >
              Learn More{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L19.5 12m0 0L13.5 19.5M19.5 12H4.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>

        {/* Example Card 3 */}
        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300">
          {/* Image */}
          <div className="flex justify-center">
            <div className="w-40 h-40 rounded-full border-4 border-purple-500 overflow-hidden animate-pulse">
              <img
                src="http://www.iskconchitrakoot.com/img/service/service3.webp"
                alt="Spiritual Guidance"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          {/* Title */}
          <h3 className="text-xl font-semibold text-purple-800 text-center mt-4">
          Book Distribution
          </h3>
          {/* Description */}
          <p className="text-gray-600 text-center mt-2">
          Distribute Vedic literature and books written or translated by Prabhupada.
          </p>
          {/* Button */}
          <div className="text-center mt-4">
            <a
              href="/spiritual-guidance"
              className="inline-flex items-center bg-purple-700 text-white font-medium py-2 px-4 rounded-full shadow-lg hover:bg-purple-800 transform hover:scale-105 transition duration-300"
            >
              Learn More{" "}
              <span className="ml-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L19.5 12m0 0L13.5 19.5M19.5 12H4.5"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;

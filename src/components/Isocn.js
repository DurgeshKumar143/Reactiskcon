import React from 'react';

const Iskcon = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-50 to-teal-50 px-6 py-6">
            <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden max-w-4xl w-full">
                {/* Content Section */}
                <div className="p-8 bg-gradient-to-b from-white to-purple-50">
                    <h1 className="text-4xl font-extrabold text-purple-700 text-center mb-6">
                        About the ISKCON
                    </h1>
                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        <span className="font-semibold text-purple-600">ISKCON</span> is part
                        of the 5000-year-old Hare Krishna Movement that was introduced to the
                        Western world by His Divine Grace A. C. Bhaktivedanta Swami Srila
                        Prabhupada. The International Society for Krishna Consciousness
                        (ISKCON) was incorporated in New York in 1966. Since then, ISKCON has
                        spread across{" "}
                        <span className="font-semibold text-purple-600">100+ countries</span>, 
                        distributing spiritual knowledge and helping millions globally.
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        Over the past 50 years, ISKCON has distributed{" "}
                        <span className="font-semibold text-purple-600">600 million spiritual books</span>, 
                        served food to{" "}
                        <span className="font-semibold text-purple-600">2 million people daily</span>, 
                        and transformed countless lives worldwide.
                    </p>
                    <div className="text-center">
                        <a
                            href="/history-of-chitrakoot"
                            className="bg-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-purple-800 transition duration-300 transform hover:scale-105"
                        >
                            Learn More About Chitrakoot
                        </a>
                    </div>
                </div>
                {/* Decorative Elements */}
                <div className="bg-gradient-to-r from-purple-200 to-teal-200 h-2 rounded-t-2xl"></div>
            </div>
        </div>
    );
};

export default Iskcon;

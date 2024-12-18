import React from "react";

const FounderAcharya = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-teal-50 py-12 px-6 flex items-center justify-center">
      <div className="max-w-7xl w-full bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Heading Section */}
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-purple-700">
            FOUNDER ACHARYA OF ISKCON
          </h1>
          <h4 className="mt-4 text-lg text-gray-700 font-semibold">
            His Divine Grace Abhay Charanaravinda Bhaktivedanta Swami Prabhupada
            Is The Founder Acharya Of The International Society For Krishna
            Consciousness (ISKCON).
          </h4>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
          {/* Left Column: Text */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed">
              His Divine Grace A. C. Bhaktivedanta Swami Prabhupada was born in
              1896 in Calcutta, India. He first met his spiritual master, Srila
              Bhaktisiddhanta Sarasvati Gosvami, in Calcutta in 1922.
              Bhaktisiddhanta Sarasvati, a prominent devotional scholar and the
              founder of sixty-four branches of Gaudiya Mathas (Vedic
              institutes), liked this educated young man and convinced him to
              dedicate his life to teaching Vedic knowledge in the Western
              world. Srila Prabhupada became his student, and eleven years
              later (1933) at Allahabad, he became his formally initiated
              disciple.
            </p>
          </div>

          {/* Right Column: Video Card */}
          <div className="flex items-center justify-center">
            <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/example-video-id"
                title="Srila Prabhupada"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Animated Button */}
        <div className="text-center pb-8">
          <a
            href="/srila-prabhupada"
            className="inline-block bg-purple-700 text-white font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-purple-800 transform hover:scale-105 transition duration-300"
          >
            Know More About Srila Prabhupada
          </a>
        </div>
      </div>
    </div>
  );
};

export default FounderAcharya;

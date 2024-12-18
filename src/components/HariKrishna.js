import React from "react";

const cards = [
  {
    id: 1,
    image: "https://iskconahmedabad.com/wp-content/uploads/2022/01/04-e1642091534929-400x219.jpg",
    title: "Daily Darshan",
    description:
      "Our own endeavors can only take us to a certain level but ultimate goal will be attained only by the mercy of Vaishnavas and mercy of Krishna.",
  },
  {
    id: 2,
    image: "https://iskconahmedabad.com/wp-content/uploads/2022/04/3-400x213.png",
    title: "Hare Krishna Temple",
    description:
      "What really impresses the hearts of people is not miraculous feats but genuine humility, integrity and a true sense of love achieved through service.",
  },
  {
    id: 3,
    image: "https://iskconahmedabad.com/wp-content/uploads/2022/04/1-400x213.png",
    title: "Sunday Feast",
    description:
      "In every center of our institution, ISKCON, we have arranged for a love feast every Sunday, and when we actually see people come to our center, chant, dance, take prasādam.",
  },
];

const HareKrishnaExperience = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-teal-50 py-12 px-6">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-blue-600">
          THE HARE KRISHNA EXPERIENCE!
        </h1>
        {/* Animated Underline */}
        <div className="relative mt-2">
          <div className="h-1 w-20 bg-teal-400 mx-auto"></div>
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-1 w-20 bg-teal-600 animate-pulse"></div>
        </div>
        <p className="text-lg text-blue-400 mt-4">
          Embark on a journey of spirituality, devotion, and eternal joy.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 duration-300"
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-indigo-600 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HareKrishnaExperience;

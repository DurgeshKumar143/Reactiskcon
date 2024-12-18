import {React, useEffect} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle"
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min.js";

const Slider = () => {
    useEffect(() => {
        const carouselElement = document.querySelector("#carouselExample");
        new bootstrap.Carousel(carouselElement, {
          interval: 3000, // Auto-slide every 3 seconds
          ride: "carousel",
        });
      }, []);
      
    const slides = [
        {
          id: 1,
          title: "Explore Amazing Places",
          description: "Discover hidden gems around the world.",
          image: "http://getwallpapers.com/wallpaper/full/9/6/1/634117.jpg",
          button: "Learn More",
        },
        {
          id: 2,
          title: "Experience Adventure",
          description: "Unleash your adventurous spirit today.",
          image: "https://cdn.wallpapersafari.com/71/15/8d3oe6.jpg",
          button: "Get Started",
        },
        {
          id: 3,
          title: "Capture Beautiful Moments",
          description: "Create memories that last forever.",
          image: "https://wallpapers.com/images/hd/radha-krishna-3d-festive-altar-kfwhrc9cq9cnv2qh.jpg",
          button: "View Gallery",
        },
      ];
      

  return (
    <div
      id="carouselExample"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "100vh",
            }}
          >
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center text-white">
              <h1 className="display-4 fw-bold mb-3 animated fadeInDown">
                {slide.title}
              </h1>
              <p className="lead mb-4 animated fadeInUp">{slide.description}</p>
              <a
                href="#!"
                className="btn btn-primary btn-lg animated zoomIn"
                style={{
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                  borderRadius: "25px",
                }}
              >
                {slide.button}
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Slider;

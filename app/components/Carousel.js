"use client";
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const images = [
    {
      src: "https://img.lovepik.com/background/20211020/medium/lovepik-global-information-technology-background-image_400060087.jpg",
      alt: "01"
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "02"
    },
    {
      src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "03"
    }
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <style jsx global>{`
        body, html {
          margin: 0;
          padding: 0;
          background: linear-gradient(135deg, #1a0000 0%, #330000 50%, #000000 100%);
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
        }

        .carousel-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: opacity 0.8s ease-in-out;
        }

        .carousel-slide.active {
          opacity: 1;
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.8) contrast(1.1);
        }

        .carousel-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            45deg,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(139, 0, 0, 0.2) 50%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
        }

        /* Custom Navigation Buttons */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(139, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.9) 100%);
          border-radius: 50%;
          border: 2px solid rgba(220, 20, 60, 0.6);
          box-shadow: 
            0 0 20px rgba(220, 20, 60, 0.4),
            0 0 40px rgba(139, 0, 0, 0.3),
            inset 0 0 20px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          animation: glow 3s ease-in-out infinite;
        }

        .nav-button:hover {
          background: linear-gradient(135deg, rgba(220, 20, 60, 0.9) 0%, rgba(139, 0, 0, 1) 100%);
          border-color: rgba(255, 69, 0, 0.8);
          box-shadow: 
            0 0 30px rgba(255, 69, 0, 0.6),
            0 0 60px rgba(220, 20, 60, 0.4),
            inset 0 0 25px rgba(0, 0, 0, 0.2);
          transform: translateY(-50%) scale(1.1);
          color: #fff;
        }

        .nav-button.prev {
          left: 30px;
        }

        .nav-button.next {
          right: 30px;
        }

        /* Custom Indicators */
        .custom-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 16px;
          z-index: 10;
        }

        .indicator {
          width: 15px;
          height: 15px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          border: 2px solid rgba(220, 20, 60, 0.5);
          box-shadow: 
            0 0 15px rgba(0, 0, 0, 0.5),
            inset 0 0 10px rgba(139, 0, 0, 0.3);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .indicator.active {
          background: linear-gradient(135deg, rgba(220, 20, 60, 1) 0%, rgba(255, 69, 0, 0.8) 100%);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 0 20px rgba(220, 20, 60, 0.8),
            0 0 40px rgba(255, 69, 0, 0.4),
            inset 0 0 10px rgba(0, 0, 0, 0.2);
          transform: scale(1.2);
        }

        .indicator:hover:not(.active) {
          background: rgba(220, 20, 60, 0.6);
          border-color: rgba(255, 69, 0, 0.7);
          box-shadow: 
            0 0 15px rgba(220, 20, 60, 0.6),
            inset 0 0 8px rgba(139, 0, 0, 0.4);
          transform: scale(1.1);
        }

        /* Glowing Effect */
        @keyframes glow {
          0% {
            box-shadow: 
              0 0 20px rgba(220, 20, 60, 0.4),
              0 0 40px rgba(139, 0, 0, 0.3),
              inset 0 0 20px rgba(0, 0, 0, 0.3);
          }
          50% {
            box-shadow: 
              0 0 30px rgba(220, 20, 60, 0.6),
              0 0 60px rgba(139, 0, 0, 0.4),
              inset 0 0 25px rgba(0, 0, 0, 0.2);
          }
          100% {
            box-shadow: 
              0 0 20px rgba(220, 20, 60, 0.4),
              0 0 40px rgba(139, 0, 0, 0.3),
              inset 0 0 20px rgba(0, 0, 0, 0.3);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-button {
            width: 60px;
            height: 60px;
            font-size: 18px;
          }

          .nav-button.prev {
            left: 15px;
          }

          .nav-button.next {
            right: 15px;
          }

          .indicator {
            width: 12px;
            height: 12px;
          }

          .custom-indicators {
            gap: 10px;
          }
        }
      `}</style>

      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Carousel Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
          </div>
        ))}

        {/* Navigation Buttons */}
        <button 
          className="nav-button prev"
          onClick={goToPrevSlide}
          aria-label="Previous slide"
        >
          &#8249;
        </button>
        
        <button 
          className="nav-button next"
          onClick={goToNextSlide}
          aria-label="Next slide"
        >
          &#8250;
        </button>

        {/* Custom Indicators */}
        <div className="custom-indicators">
          {images.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
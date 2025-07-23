'use client';
import { useEffect, useState, useRef } from "react";

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);
  
  const slides = [
    { src: "/images/slider/itcmtc.jpg", alt: "Slide 1" },
    { src: "/images/slider/itcmtc 1.jpg", alt: "Slide 2" },
    { src: "/images/slider/itcmtc 2.png", alt: "Slide 3" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    // Auto-advance slides every 5 seconds
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  // Import Bootstrap after component mounts
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <>
      {/* Custom CSS for enhanced effects */}
      <style jsx>{`
        .carousel-container {
          position: relative;
          height: 100vh;
          padding-top: 4rem;
          overflow: hidden;
        }
        
        .carousel-item {
          transition: transform 1s ease-in-out, opacity 1s ease-in-out;
        }
        
        .carousel-item img {
          height: 100vh;
          object-fit: cover;
          filter: brightness(0.8);
        }
        
        .gradient-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(147, 51, 234, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%);
          z-index: 1;
          pointer-events: none;
        }
        
        .slide-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.3) 0%, transparent 50%, transparent 100%);
          z-index: 2;
          pointer-events: none;
        }
        
        .animated-particles {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          pointer-events: none;
        }
        
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: float 3s ease-in-out infinite;
        }
        
        .particle:nth-child(1) { top: 25%; left: 25%; animation-delay: 0s; }
        .particle:nth-child(2) { top: 33%; right: 25%; animation-delay: 1s; }
        .particle:nth-child(3) { bottom: 25%; left: 33%; animation-delay: 2s; }
        .particle:nth-child(4) { bottom: 33%; right: 33%; animation-delay: 0.5s; }
        .particle:nth-child(5) { top: 50%; left: 50%; animation-delay: 1.5s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); opacity: 0.3; }
          50% { transform: translateY(-20px); opacity: 1; }
        }
        
        .carousel-control-prev,
        .carousel-control-next {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 60px;
          height: 60px;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 10;
        }
        
        .carousel:hover .carousel-control-prev,
        .carousel:hover .carousel-control-next {
          opacity: 1;
        }
        
        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1);
        }
        
        .carousel-indicators {
          bottom: 30px;
          z-index: 10;
        }
        
        .carousel-indicators button {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.5);
          border: none;
          margin: 0 8px;
          transition: all 0.3s ease;
        }
        
        .carousel-indicators button.active {
          background: white;
          transform: scale(1.3);
          box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }
        
        .progress-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(255, 255, 255, 0.2);
          z-index: 10;
        }
        
        .progress-fill {
          height: 100%;
          transition: width 0.3s ease;
        }
        
        .slide-counter {
          position: absolute;
          top: 30px;
          right: 30px;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          color: white;
          padding: 10px 20px;
          border-radius: 25px;
          font-family: monospace;
          font-size: 14px;
          z-index: 10;
        }
        
        .animated-border {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 3;
          pointer-events: none;
        }
        
        .border-line {
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
        }
        
        .border-top {
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          animation: shimmer 2s linear infinite;
        }
        
        .border-bottom {
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          animation: shimmer 2s linear infinite reverse;
          animation-delay: 1s;
        }
        
        .border-left {
          top: 0;
          left: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer-vertical 2s linear infinite;
          animation-delay: 0.5s;
        }
        
        .border-right {
          top: 0;
          right: 0;
          bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shimmer-vertical 2s linear infinite reverse;
          animation-delay: 1.5s;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmer-vertical {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .glow-corner {
          position: absolute;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
          filter: blur(20px);
          z-index: 3;
          pointer-events: none;
          animation: pulse 3s ease-in-out infinite;
        }
        
        .glow-tl { top: -60px; left: -60px; }
        .glow-tr { top: -60px; right: -60px; animation-delay: 1s; }
        .glow-bl { bottom: -60px; left: -60px; animation-delay: 2s; }
        .glow-br { bottom: -60px; right: -60px; animation-delay: 3s; }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.1); }
        }
      `}</style>

      <div className="carousel-container">
        <div id="carouselExample" className="carousel slide" data-bs-ride="false" ref={carouselRef}>
          {/* Gradient Overlay */}
          <div className="gradient-overlay"></div>
          
          {/* Animated Particles */}
          <div className="animated-particles">
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
            <div className="particle"></div>
          </div>
          
          {/* Animated Border */}
          <div className="animated-border">
            <div className="border-line border-top"></div>
            <div className="border-line border-bottom"></div>
            <div className="border-line border-left"></div>
            <div className="border-line border-right"></div>
          </div>
          
          {/* Glowing Corners */}
          <div className="glow-corner glow-tl"></div>
          <div className="glow-corner glow-tr"></div>
          <div className="glow-corner glow-bl"></div>
          <div className="glow-corner glow-br"></div>
          
          {/* Slide Counter */}
          <div className="slide-counter">
            {currentSlide + 1} / {slides.length}
          </div>
          
          {/* Carousel Inner */}
          <div className="carousel-inner">
            {slides.map((slide, index) => (
              <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                <div className="slide-overlay"></div>
                <img 
                  src={slide.src} 
                  className="d-block w-100" 
                  alt={slide.alt}
                />
              </div>
            ))}
          </div>
          
          {/* Controls */}
          <button 
            className="carousel-control-prev" 
            type="button" 
            onClick={prevSlide}
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          
          <button 
            className="carousel-control-next" 
            type="button" 
            onClick={nextSlide}
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
          
          {/* Custom Indicators */}
          <div className="carousel-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                className={index === currentSlide ? 'active' : ''}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

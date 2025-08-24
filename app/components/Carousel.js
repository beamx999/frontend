"use client";
import { useState, useEffect } from 'react';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // 🌸 Japanese/Sakura themed images
  const images = [
    {
      src: "https://as2.ftcdn.net/v2/jpg/14/06/43/57/1000_F_1406435706_eat3rjfyhGnmiSGFRHd1gJPCYXDqdSXi.jpg",
      alt: "🌸 Beautiful Sakura Blossoms",
      title: "伝統的な寺院"
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/14/64/69/96/1000_F_1464699632_gerJww4AXPi5XkKiMNUnTlI3aqJfkxKJ.jpg",
      alt: "🏯 Traditional Japanese Temple",
      title: "美しい桜の花"
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/12/90/20/98/1000_F_1290209869_T0Gb4k8j1hfvX3DpH66saHF1dyt5T4gR.jpg",
      alt: "🗾 Mount Fuji Landscape",
      title: "富士山の風景"
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/10/13/41/96/1000_F_1013419666_D5aeSOZL5pQIaXmR95fa7JvB2eJIAZDQ.jpg",
      alt: "🏮 Traditional Japanese Street",
      title: "伝統的な日本の街"
    },
    {
      src: "https://as1.ftcdn.net/v2/jpg/06/39/16/68/1000_F_639166865_WlooSQrFG5Xx3P0T9fr6rxZMHxIvEfc5.jpg",
      alt: "🌸 Sakura Garden Path",
      title: "桜の庭園小道"
    }
  ];

  // Auto-slide every 4 seconds
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

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
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 30%, #2d1b1b 70%, #3d2f2f 100%);
          font-family: 'Georgia', serif;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* 🌸 Sakura Background Effects */
        body::before {
          content: '';
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: 
            /* Subtle sakura petals pattern */
            radial-gradient(circle at 10% 20%, rgba(255, 182, 193, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 30%, rgba(255, 192, 203, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 40% 70%, rgba(255, 182, 193, 0.06) 0%, transparent 50%),
            radial-gradient(circle at 90% 80%, rgba(255, 192, 203, 0.05) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .carousel-container {
          position: relative;
          width: 100vw;
          height: 100vh;
          overflow: hidden;
          z-index: 1;
        }

        .carousel-slide {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          opacity: 0;
          transition: all 1.2s ease-in-out;
          transform: scale(1.05);
        }

        .carousel-slide.active {
          opacity: 1;
          transform: scale(1);
        }

        .carousel-slide img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: brightness(0.85) contrast(1.15) saturate(1.1);
        }

        /* 🌸 Sakura-themed overlay */
        .carousel-slide::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(233, 30, 99, 0.15) 0%,
            rgba(0, 0, 0, 0.3) 30%,
            rgba(255, 182, 193, 0.1) 70%,
            rgba(0, 0, 0, 0.4) 100%
          );
          z-index: 1;
        }

        /* 🌸 Image Title Overlay */
        .slide-title {
          position: absolute;
          bottom: 80px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 5;
          background: rgba(0, 0, 0, 0.7);
          border: 2px solid #e91e63;
          border-radius: 15px;
          padding: 15px 25px;
          color: #e91e63;
          font-family: 'Georgia', serif;
          font-weight: bold;
          font-size: 18px;
          text-align: center;
          box-shadow: 
            0 0 20px rgba(233, 30, 99, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          animation: titleGlow 3s ease-in-out infinite alternate;
        }

        @keyframes titleGlow {
          0% {
            box-shadow: 
              0 0 20px rgba(233, 30, 99, 0.4),
              inset 0 1px 0 rgba(255, 255, 255, 0.1);
            text-shadow: 0 0 10px rgba(233, 30, 99, 0.6);
          }
          100% {
            box-shadow: 
              0 0 30px rgba(233, 30, 99, 0.6),
              inset 0 1px 0 rgba(255, 255, 255, 0.15);
            text-shadow: 0 0 20px rgba(233, 30, 99, 0.8);
          }
        }

        /* 🌸 Custom Navigation Buttons - Sakura Style */
        .nav-button {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, rgba(233, 30, 99, 0.8) 0%, rgba(173, 20, 87, 0.9) 100%);
          border-radius: 50%;
          border: 3px solid rgba(233, 30, 99, 0.6);
          box-shadow: 
            0 0 25px rgba(233, 30, 99, 0.5),
            0 0 50px rgba(233, 30, 99, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transition: all 0.4s ease;
          z-index: 10;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
          font-weight: bold;
          animation: sakuraGlow 4s ease-in-out infinite;
          backdrop-filter: blur(10px);
        }

        .nav-button:hover {
          background: linear-gradient(135deg, rgba(233, 30, 99, 1) 0%, rgba(240, 98, 146, 0.95) 100%);
          border-color: rgba(240, 98, 146, 0.8);
          box-shadow: 
            0 0 40px rgba(240, 98, 146, 0.7),
            0 0 80px rgba(233, 30, 99, 0.5),
            inset 0 2px 0 rgba(255, 255, 255, 0.3);
          transform: translateY(-50%) scale(1.15);
          color: #fff;
        }

        .nav-button.prev {
          left: 40px;
        }

        .nav-button.next {
          right: 40px;
        }

        /* 🌸 Sakura Petal Decoration in Buttons */
        .nav-button::before {
          content: '🌸';
          position: absolute;
          top: -10px;
          right: -10px;
          font-size: 16px;
          opacity: 0.8;
          animation: petalFloat 6s ease-in-out infinite;
        }

        @keyframes petalFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0.8; }
          50% { transform: translateY(-8px) rotate(180deg); opacity: 1; }
        }

        /* 🌸 Custom Indicators - Sakura Style */
        .custom-indicators {
          position: absolute;
          bottom: 30px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 20px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.3);
          padding: 15px 25px;
          border-radius: 25px;
          backdrop-filter: blur(15px);
          border: 2px solid rgba(233, 30, 99, 0.3);
        }

        .indicator {
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          border: 2px solid rgba(233, 30, 99, 0.4);
          box-shadow: 
            0 0 15px rgba(0, 0, 0, 0.5),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
        }

        .indicator::before {
          content: '🌸';
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 10px;
          opacity: 0;
          transition: all 0.3s ease;
        }

        .indicator.active {
          background: linear-gradient(135deg, rgba(233, 30, 99, 1) 0%, rgba(240, 98, 146, 0.9) 100%);
          border-color: rgba(255, 255, 255, 0.8);
          box-shadow: 
            0 0 25px rgba(233, 30, 99, 0.8),
            0 0 50px rgba(240, 98, 146, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.3);
          transform: scale(1.3);
        }

        .indicator.active::before {
          opacity: 1;
          font-size: 12px;
        }

        .indicator:hover:not(.active) {
          background: rgba(233, 30, 99, 0.6);
          border-color: rgba(240, 98, 146, 0.7);
          box-shadow: 
            0 0 20px rgba(233, 30, 99, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          transform: scale(1.15);
        }

        .indicator:hover:not(.active)::before {
          opacity: 0.7;
          font-size: 11px;
        }

        /* 🌸 Sakura Glowing Effect */
        @keyframes sakuraGlow {
          0% {
            box-shadow: 
              0 0 25px rgba(233, 30, 99, 0.5),
              0 0 50px rgba(233, 30, 99, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
          50% {
            box-shadow: 
              0 0 35px rgba(233, 30, 99, 0.7),
              0 0 70px rgba(233, 30, 99, 0.4),
              inset 0 2px 0 rgba(255, 255, 255, 0.25);
          }
          100% {
            box-shadow: 
              0 0 25px rgba(233, 30, 99, 0.5),
              0 0 50px rgba(233, 30, 99, 0.3),
              inset 0 1px 0 rgba(255, 255, 255, 0.2);
          }
        }

        /* 🌸 Floating Sakura Petals Animation */
        .sakura-petals {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 3;
          overflow: hidden;
        }

        .floating-petal {
          position: absolute;
          color: rgba(255, 182, 193, 0.7);
          font-size: 20px;
          animation: floatDown 15s linear infinite;
          opacity: 0.8;
        }

        .floating-petal:nth-child(1) { left: 10%; animation-delay: 0s; animation-duration: 12s; }
        .floating-petal:nth-child(2) { left: 20%; animation-delay: 2s; animation-duration: 14s; }
        .floating-petal:nth-child(3) { left: 30%; animation-delay: 4s; animation-duration: 16s; }
        .floating-petal:nth-child(4) { left: 40%; animation-delay: 1s; animation-duration: 13s; }
        .floating-petal:nth-child(5) { left: 50%; animation-delay: 3s; animation-duration: 15s; }
        .floating-petal:nth-child(6) { left: 60%; animation-delay: 5s; animation-duration: 11s; }
        .floating-petal:nth-child(7) { left: 70%; animation-delay: 2.5s; animation-duration: 17s; }
        .floating-petal:nth-child(8) { left: 80%; animation-delay: 4.5s; animation-duration: 12.5s; }
        .floating-petal:nth-child(9) { left: 90%; animation-delay: 1.5s; animation-duration: 14.5s; }
        .floating-petal:nth-child(10) { left: 5%; animation-delay: 6s; animation-duration: 13.5s; }

        @keyframes floatDown {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) rotate(360deg);
            opacity: 0;
          }
        }

        /* 📱 Responsive Design */
        @media (max-width: 768px) {
          .nav-button {
            width: 60px;
            height: 60px;
            font-size: 22px;
          }

          .nav-button.prev {
            left: 20px;
          }

          .nav-button.next {
            right: 20px;
          }

          .indicator {
            width: 15px;
            height: 15px;
          }

          .custom-indicators {
            gap: 15px;
            padding: 12px 20px;
          }

          .slide-title {
            font-size: 16px;
            padding: 12px 20px;
            bottom: 70px;
          }

          .floating-petal {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .nav-button {
            width: 50px;
            height: 50px;
            font-size: 18px;
          }

          .nav-button.prev {
            left: 15px;
          }

          .nav-button.next {
            right: 15px;
          }

          .slide-title {
            font-size: 14px;
            padding: 10px 15px;
            bottom: 60px;
          }

          .custom-indicators {
            gap: 12px;
            padding: 10px 15px;
          }

          .floating-petal {
            font-size: 14px;
          }
        }
      `}</style>

      <div 
        className="carousel-container"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* 🌸 Floating Sakura Petals */}
        <div className="sakura-petals">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="floating-petal">🌸</div>
          ))}
        </div>

        {/* Carousel Slides */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image.src} alt={image.alt} />
            <div className="slide-title">
              {image.title}
              <br />
              <small style={{fontSize: '14px', opacity: '0.8'}}>{image.alt}</small>
            </div>
          </div>
        ))}

        {/* 🌸 Navigation Buttons */}
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

        {/* 🌸 Custom Indicators */}
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
"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [tokenState, setTokenState] = useState(null);

  // โหลด token จาก sessionStorage
  useEffect(() => {
    const sync = () => {
      const token = sessionStorage.getItem("token");
      setTokenState(token);
    };
    sync();

    // ✅ sessionStorage ไม่ยิง event → ใช้ poll
    const interval = setInterval(sync, 1000);
    return () => clearInterval(interval);
  }, []);

  // ฟังก์ชัน logout
  const handleSignOut = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
    setTokenState(null);
    window.location.href = "/Login";
  };

  // ให้เรียกอัปเดต token ได้ทันที
  useEffect(() => {
    window.updateNavbarToken = () => {
      const token = sessionStorage.getItem("token");
      setTokenState(token);
    };
    return () => delete window.updateNavbarToken;
  }, []);

  // scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Bootstrap CSS */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />

      {/* Japanese Sakura Theme Styles */}
      <style dangerouslySetInnerHTML={{
        __html: `
          /* Japanese Sakura Navbar Theme 🌸 */
          .navbar-custom {
            background: linear-gradient(135deg, 
              #2c1810 0%, 
              #4a2c20 15%, 
              #8b4a6b 35%, 
              #d4a5a5 50%, 
              #8b4a6b 65%, 
              #4a2c20 85%, 
              #2c1810 100%
            ) !important;
            backdrop-filter: blur(25px);
            border-bottom: 4px solid #ff69b4 !important;
            box-shadow: 
              0 15px 50px rgba(255, 105, 180, 0.4), 
              0 0 0 2px rgba(255, 182, 193, 0.3) inset,
              0 5px 25px rgba(139, 69, 19, 0.3) !important;
            transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1) !important;
            border-radius: 0 0 25px 25px !important;
            position: relative;
            animation: sakuraGlow 4s ease-in-out infinite alternate;
          }

          .navbar-custom::before {
            content: '🌸';
            position: absolute;
            font-size: 2rem;
            color: #ffb6c1;
            opacity: 0.3;
            animation: sakuraFloat 6s ease-in-out infinite;
            left: 10%;
            top: 50%;
            transform: translateY(-50%);
          }

          .navbar-custom::after {
            content: '🌸';
            position: absolute;
            font-size: 1.5rem;
            color: #ff69b4;
            opacity: 0.4;
            animation: sakuraFloat 8s ease-in-out infinite reverse;
            right: 15%;
            top: 30%;
          }

          .navbar-custom.scrolled {
            background: linear-gradient(135deg, 
              rgba(44, 24, 16, 0.98) 0%, 
              rgba(74, 44, 32, 0.98) 15%, 
              rgba(139, 74, 107, 0.98) 35%, 
              rgba(212, 165, 165, 0.98) 50%, 
              rgba(139, 74, 107, 0.98) 65%, 
              rgba(74, 44, 32, 0.98) 85%, 
              rgba(44, 24, 16, 0.98) 100%
            ) !important;
            box-shadow: 
              0 25px 70px rgba(255, 105, 180, 0.6), 
              0 0 0 3px rgba(255, 182, 193, 0.4) inset,
              0 8px 40px rgba(139, 69, 19, 0.4) !important;
            border-bottom: 5px solid #ff1493 !important;
            transform: translateY(-4px);
          }

          /* Logo Styles */
          .navbar-brand-custom {
            font-weight: 900 !important;
            font-size: 1.8rem !important;
            transition: all 0.6s ease !important;
            position: relative;
            color: #ffb6c1 !important;
          }

          .navbar-brand-custom::before {
            content: '⛩️';
            margin-right: 10px;
            font-size: 1.5rem;
            animation: torii 3s ease-in-out infinite;
          }

          .navbar-brand-custom:hover {
            transform: scale(1.15) rotateY(10deg);
            filter: drop-shadow(0 0 30px rgba(255, 105, 180, 0.9));
            color: #ff69b4 !important;
          }

          .logo-img {
            height: 60px;
            width: auto;
            max-width: 250px;
            transition: all 0.6s ease;
            filter: 
              drop-shadow(0 0 25px rgba(255, 105, 180, 0.6)) 
              drop-shadow(0 0 10px rgba(255, 182, 193, 0.4));
            border-radius: 15px;
            border: 2px solid rgba(255, 182, 193, 0.3);
          }

          .navbar-brand-custom:hover .logo-img {
            filter: 
              drop-shadow(0 0 40px rgba(255, 105, 180, 1)) 
              drop-shadow(0 0 20px rgba(255, 182, 193, 0.7));
            transform: rotateX(10deg) rotateZ(2deg);
            border-color: rgba(255, 105, 180, 0.6);
          }

          /* Japanese Style Navigation Links */
          .nav-link-custom {
            color: #ffb6c1 !important;
            font-weight: 700 !important;
            font-size: 1.1rem !important;
            position: relative;
            padding: 1.2rem 2rem !important;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1) !important;
            text-decoration: none !important;
            border-radius: 40px !important;
            margin: 0 0.5rem !important;
            overflow: hidden;
            background: linear-gradient(135deg, 
              rgba(255, 182, 193, 0.15), 
              rgba(255, 105, 180, 0.1),
              rgba(139, 69, 19, 0.05)
            ) !important;
            border: 2px solid rgba(255, 182, 193, 0.4) !important;
            backdrop-filter: blur(20px);
            box-shadow: 
              0 6px 25px rgba(255, 182, 193, 0.3), 
              0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            font-family: 'Arial', sans-serif;
            text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
          }

          .nav-link-custom::before {
            content: "🌸";
            position: absolute;
            bottom: 10px;
            left: 50%;
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
            transform: translateX(-50%) translateY(10px);
          }

          .nav-link-custom::after {
            content: "";
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(
              90deg,
              transparent,
              rgba(255, 182, 193, 0.3),
              rgba(255, 105, 180, 0.2),
              transparent
            );
            transition: all 0.8s ease;
          }

          .nav-link-custom:hover {
            color: #ff1493 !important;
            transform: translateY(-8px) scale(1.1);
            text-shadow: 
              0 0 25px rgba(255, 20, 147, 0.9),
              0 0 35px rgba(255, 182, 193, 0.6);
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.3), 
              rgba(255, 182, 193, 0.2),
              rgba(255, 20, 147, 0.15)
            ) !important;
            border: 2px solid rgba(255, 105, 180, 0.7) !important;
            box-shadow: 
              0 15px 40px rgba(255, 105, 180, 0.6),
              0 0 40px rgba(255, 182, 193, 0.5),
              0 0 0 4px rgba(255, 105, 180, 0.3) inset,
              0 0 0 5px rgba(255, 255, 255, 0.15) inset !important;
          }

          .nav-link-custom:hover::before {
            font-size: 1.2rem;
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }

          .nav-link-custom:hover::after {
            left: 100%;
          }

          .nav-link-custom.active {
            color: #ff1493 !important;
            font-weight: 800 !important;
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.4), 
              rgba(255, 182, 193, 0.3),
              rgba(255, 20, 147, 0.2)
            ) !important;
            border: 3px solid rgba(255, 105, 180, 0.8) !important;
            box-shadow: 
              0 10px 30px rgba(255, 105, 180, 0.5),
              0 0 30px rgba(255, 105, 180, 0.4),
              0 0 0 4px rgba(255, 105, 180, 0.5) inset,
              0 0 0 6px rgba(255, 255, 255, 0.2) inset !important;
            transform: translateY(-4px);
            text-shadow: 
              0 0 20px rgba(255, 20, 147, 0.9),
              0 0 30px rgba(255, 182, 193, 0.5);
          }

          .nav-link-custom.active::before {
            font-size: 1.5rem;
            opacity: 1;
            color: #ff1493;
            animation: sakuraSpin 2s linear infinite;
          }

          /* Japanese Style Toggler */
          .navbar-toggler-custom {
            border: 3px solid rgba(255, 105, 180, 0.5) !important;
            padding: 12px 18px !important;
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.2), 
              rgba(255, 182, 193, 0.15),
              rgba(139, 69, 19, 0.1)
            ) !important;
            border-radius: 20px !important;
            transition: all 0.6s ease !important;
            position: relative;
            overflow: hidden;
          }

          .navbar-toggler-custom::before {
            content: '🌸';
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
          }

          .navbar-toggler-custom:hover {
            background: linear-gradient(135deg, 
              rgba(255, 105, 180, 0.4), 
              rgba(255, 182, 193, 0.3),
              rgba(255, 20, 147, 0.2)
            ) !important;
            transform: scale(1.2) rotateZ(10deg);
            border-color: rgba(255, 105, 180, 0.8) !important;
            box-shadow: 
              0 0 30px rgba(255, 105, 180, 0.6),
              0 0 0 5px rgba(255, 105, 180, 0.3) !important;
          }

          .navbar-toggler-custom:hover::before {
            font-size: 1rem;
            opacity: 1;
          }

          .navbar-toggler-custom:focus {
            box-shadow: 0 0 0 0.5rem rgba(255, 105, 180, 0.6) !important;
          }

          .hamburger-line {
            width: 36px;
            height: 4px;
            background: linear-gradient(90deg, #ff69b4, #ffb6c1, #ff1493);
            margin: 6px 0;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
            border-radius: 5px;
            box-shadow: 0 0 10px rgba(255, 105, 180, 0.5);
          }

          .hamburger-line.open:nth-child(1) {
            transform: rotate(-45deg) translate(-8px, 9px);
            background: linear-gradient(90deg, #ff1493, #ffb6c1);
          }
          .hamburger-line.open:nth-child(2) {
            opacity: 0;
            transform: scale(0) rotateZ(180deg);
          }
          .hamburger-line.open:nth-child(3) {
            transform: rotate(45deg) translate(-8px, -9px);
            background: linear-gradient(90deg, #ff1493, #ffb6c1);
          }

          /* Japanese Mobile Menu */
          .navbar-collapse.show {
            background: linear-gradient(135deg, 
              rgba(44, 24, 16, 0.98) 0%, 
              rgba(74, 44, 32, 0.98) 25%, 
              rgba(139, 74, 107, 0.98) 50%, 
              rgba(74, 44, 32, 0.98) 75%, 
              rgba(44, 24, 16, 0.98) 100%
            ) !important;
            border-radius: 25px !important;
            margin-top: 2.5rem !important;
            padding: 2.5rem !important;
            box-shadow: 
              0 25px 60px rgba(255, 105, 180, 0.5),
              0 0 0 2px rgba(255, 105, 180, 0.4) inset,
              0 0 0 4px rgba(255, 255, 255, 0.1) inset !important;
            border: 4px solid rgba(255, 105, 180, 0.5) !important;
            backdrop-filter: blur(30px);
            position: relative;
          }

          .navbar-collapse.show::before {
            content: '🌸 和 🌸';
            position: absolute;
            top: 10px;
            left: 50%;
            transform: translateX(-50%);
            color: #ffb6c1;
            font-size: 1.2rem;
            opacity: 0.7;
          }

          /* Japanese Style Buttons */
          .btn-cta,
          .btn-logout {
            background: linear-gradient(135deg, 
              #ff69b4, 
              #ff1493, 
              #ff69b4
            ) !important;
            border: 3px solid rgba(255, 182, 193, 0.5) !important;
            color: #ffffff !important;
            font-weight: 800 !important;
            padding: 1rem 3rem !important;
            border-radius: 40px !important;
            transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1) !important;
            box-shadow: 
              0 10px 30px rgba(255, 105, 180, 0.6),
              0 0 0 2px rgba(255, 255, 255, 0.2) inset !important;
            position: relative;
            overflow: hidden;
            text-transform: uppercase;
            letter-spacing: 2px;
            font-size: 1.1rem !important;
            text-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
          }

          .btn-cta::before,
          .btn-logout::before {
            content: '🌸';
            position: absolute;
            top: 50%;
            left: 10px;
            transform: translateY(-50%);
            font-size: 0;
            opacity: 0;
            transition: all 0.6s ease;
          }

          .btn-cta::after,
          .btn-logout::after {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, 
              transparent, 
              rgba(255, 255, 255, 0.3), 
              transparent
            );
            transition: all 0.8s ease;
          }

          .btn-cta:hover,
          .btn-logout:hover {
            background: linear-gradient(135deg, 
              #ffb6c1, 
              #ff69b4, 
              #ffb6c1
            ) !important;
            transform: translateY(-6px) scale(1.1);
            box-shadow: 
              0 20px 50px rgba(255, 105, 180, 0.8),
              0 0 30px rgba(255, 182, 193, 0.6),
              0 0 0 4px rgba(255, 255, 255, 0.4) inset !important;
            color: #8b0045 !important;
            border-color: rgba(255, 105, 180, 0.7) !important;
            text-shadow: 0 0 20px rgba(139, 0, 69, 0.8);
          }

          .btn-cta:hover::before,
          .btn-logout:hover::before {
            font-size: 1.2rem;
            opacity: 1;
            animation: sakuraSpin 1s linear infinite;
          }

          .btn-cta:hover::after,
          .btn-logout:hover::after {
            left: 100%;
          }

          .btn-cta:active,
          .btn-logout:active {
            transform: translateY(-4px) scale(1.08) !important;
            transition: all 0.2s ease !important;
          }

          /* Floating Sakura Animation */
          @keyframes sakuraFloat {
            0%, 100% { 
              transform: translateY(-50%) rotate(0deg); 
              opacity: 0.3; 
            }
            25% { 
              transform: translateY(-70%) rotate(90deg); 
              opacity: 0.6; 
            }
            50% { 
              transform: translateY(-40%) rotate(180deg); 
              opacity: 0.4; 
            }
            75% { 
              transform: translateY(-60%) rotate(270deg); 
              opacity: 0.7; 
            }
          }

          @keyframes sakuraSpin {
            0% { transform: translateX(-50%) translateY(-50%) rotate(0deg); }
            100% { transform: translateX(-50%) translateY(-50%) rotate(360deg); }
          }

          @keyframes sakuraGlow {
            0% { 
              box-shadow: 
                0 15px 50px rgba(255, 105, 180, 0.4), 
                0 0 0 2px rgba(255, 182, 193, 0.3) inset,
                0 5px 25px rgba(139, 69, 19, 0.3);
            }
            100% { 
              box-shadow: 
                0 20px 60px rgba(255, 105, 180, 0.6), 
                0 0 0 3px rgba(255, 182, 193, 0.5) inset,
                0 8px 35px rgba(139, 69, 19, 0.4);
            }
          }

          @keyframes torii {
            0%, 100% { transform: scale(1) rotateZ(0deg); }
            50% { transform: scale(1.1) rotateZ(5deg); }
          }

          /* Responsive Design */
          @media (min-width: 992px) {
            .navbar-collapse.show {
              background: none !important;
              margin-top: 0 !important;
              padding: 0 !important;
              box-shadow: none !important;
              border: none !important;
              backdrop-filter: none !important;
            }
            
            .navbar-collapse.show::before {
              display: none;
            }
          }

          /* Additional Japanese Elements */
          .nav-item:nth-child(2n) .nav-link-custom::before {
            content: "🌺";
          }
          
          .nav-item:nth-child(3n) .nav-link-custom::before {
            content: "🌸";
          }
        `
      }} />

      <nav
        className={`navbar navbar-expand-lg navbar-custom fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <Link className="navbar-brand navbar-brand-custom d-flex align-items-center" href="/">
            <img
              src="/image/LOGO_TSX_WHITE.png"
              alt="Company Logo"
              className="logo-img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div className="logo-placeholder d-none fw-bold">
              和ロゴ
            </div>
          </Link>

          <button
            className="navbar-toggler navbar-toggler-custom"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="navbarNav"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
            <div className={`hamburger-line ${isMenuOpen ? "open" : ""}`}></div>
          </button>

          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarNav"
          >
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link nav-link-custom active" href="/">
                  หน้าแรก
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/About">
                  เกี่ยวกับ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/Services">
                  บริการ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/Contact">
                  ติดต่อ
                </Link>
              </li>
              <li className="nav-item ms-3">
                {tokenState ? (
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="btn btn-logout"
                  >
                    🚪 Logout
                  </button>
                ) : (
                  <Link className="nav-link p-0" href="/Login">
                    <button className="btn btn-cta">🔐 Login</button>
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Bootstrap JS */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"
        defer
      ></script>
    </>
  );
};

export default Navbar;
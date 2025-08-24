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

      {/* Custom Styles (คงเดิมทั้งหมด) */}
      <style jsx>{`
        .navbar-custom {
          background: linear-gradient(
            135deg,
            #1a1a1a 0%,
            #2d1b1b 50%,
            #1a1a1a 100%
          );
          backdrop-filter: blur(10px);
          border-bottom: 2px solid #dc2626;
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        .navbar-custom.scrolled {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 26, 0.95) 0%,
            rgba(45, 27, 27, 0.95) 50%,
            rgba(26, 26, 26, 0.95) 100%
          );
          box-shadow: 0 12px 40px rgba(220, 38, 38, 0.4);
          border-bottom: 2px solid #ef4444;
        }

        .navbar-brand-custom {
          display: flex;
          align-items: center;
          font-weight: 800;
          font-size: 1.5rem;
          transition: 0.3s;
          padding: 0.375rem 0;
        }
        .navbar-brand-custom:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.7));
        }

        .logo-img {
          height: 48px;
          width: auto;
          max-width: 200px;
          transition: 0.3s;
          filter: drop-shadow(0 0 10px rgba(220, 38, 38, 0.3));
        }
        .navbar-brand-custom:hover .logo-img {
          filter: drop-shadow(0 0 15px rgba(220, 38, 38, 0.6));
        }

        .nav-link-custom {
          color: #e5e5e5 !important;
          font-weight: 500;
          position: relative;
          padding: 0.75rem 1rem !important;
          transition: 0.3s;
          text-decoration: none;
        }
        .nav-link-custom::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #dc2626, #ef4444);
          transition: 0.3s;
          transform: translateX(-50%);
        }
        .nav-link-custom:hover {
          color: #f87171 !important;
          transform: translateY(-2px);
          text-shadow: 0 0 10px rgba(248, 113, 113, 0.5);
        }
        .nav-link-custom:hover::before {
          width: 80%;
        }
        .nav-link-custom.active {
          color: #dc2626 !important;
          font-weight: 600;
        }
        .nav-link-custom.active::before {
          width: 100%;
        }

        .navbar-toggler-custom {
          border: none;
          padding: 4px 8px;
          background: rgba(220, 38, 38, 0.1);
          border-radius: 8px;
          transition: 0.3s;
        }
        .navbar-toggler-custom:hover {
          background: rgba(220, 38, 38, 0.2);
          transform: scale(1.05);
        }
        .navbar-toggler-custom:focus {
          box-shadow: 0 0 0 0.25rem rgba(220, 38, 38, 0.25);
        }

        .hamburger-line {
          width: 25px;
          height: 3px;
          background: #dc2626;
          margin: 3px 0;
          transition: 0.3s;
          border-radius: 2px;
        }
        .hamburger-line.open:nth-child(1) {
          transform: rotate(-45deg) translate(-5px, 6px);
        }
        .hamburger-line.open:nth-child(2) {
          opacity: 0;
        }
        .hamburger-line.open:nth-child(3) {
          transform: rotate(45deg) translate(-5px, -6px);
        }

        /* เมนูพับสไตล์กลาสบนมือถือ */
        .navbar-collapse {
          background: rgba(26, 26, 26, 0.98);
          border-radius: 12px;
          margin-top: 1rem;
          padding: 1rem;
          box-shadow: 0 8px 32px rgba(220, 38, 38, 0.2);
          border: 1px solid rgba(220, 38, 38, 0.3);
        }
        @media (min-width: 992px) {
          .navbar-collapse {
            background: none;
            margin-top: 0;
            padding: 0;
            box-shadow: none;
            border: none;
          }
        }

        /* ปุ่ม CTA/Logout */
        .btn-cta,
        .btn-logout {
          background: linear-gradient(135deg, #dc2626, #b91c1c);
          border: none;
          color: #fff;
          font-weight: 600;
          padding: 0.5rem 1.5rem;
          border-radius: 25px;
          transition: 0.3s;
          box-shadow: 0 4px 15px rgba(220, 38, 38, 0.4);
        }
        .btn-cta:hover,
        .btn-logout:hover {
          background: linear-gradient(135deg, #b91c1c, #991b1b);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(220, 38, 38, 0.6);
          color: #fff;
        }
      `}</style>

      <nav
        className={`navbar navbar-expand-lg navbar-custom ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container">
          <Link className="navbar-brand navbar-brand-custom" href="/">
            <img
              src="/image/LOGO_TSX_WHITE.png"
              alt="Company Logo"
              className="logo-img"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <div className="logo-placeholder" style={{ display: "none" }}>
              LOGO
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
                <Link className="nav-link nav-link-custom" href="/about">
                  เกี่ยวกับ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/services">
                  บริการ
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/portfolio">
                  ผลงาน
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link nav-link-custom" href="/contact">
                  ติดต่อ
                </Link>
              </li>
              <li className="nav-item ms-2">
                {tokenState ? (
                  <button
                    type="button"
                    onClick={handleSignOut}
                    className="btn btn-logout"
                  >
                    🚪 Logout
                  </button>
                ) : (
                  <Link className="nav-link nav-link-custom" href="/Login">
                    <button className="btn btn-cta">🗝️ Login</button>
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

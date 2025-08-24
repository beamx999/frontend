"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/Contact") {
    return null;
  }

  return (
    <>
      {/* FontAwesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        rel="stylesheet"
      />

      {/* Custom CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        :root {
          --primary-gradient: linear-gradient(135deg, #310019ff 0%, #530623b9 30%, #ff4ba5a9 100%);
          --secondary-gradient: linear-gradient(135deg, #fa3f65ff 0%, #ff0077ff 100%);
          --accent-color: #ffffffff;
          --text-dark: #2d3436;
          --text-light: #637264ff;
          --shadow-red: rgba(255, 58, 133, 0.56);
          --glow-red: rgba(220, 20, 60, 0.6);
        }

        * {
          font-family: 'Inter', sans-serif;
        }

        body {
          overflow-x: hidden;
        }

        /* Hero Section */
        .hero-section {
          background: var(--primary-gradient);
          min-height: 60vh;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="none"><path d="M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z" fill="rgba(255,255,255,0.1)"/></svg>') no-repeat center bottom;
          background-size: cover;
        }

        /* Section Title */
        .section-title {
          position: relative;
          margin-bottom: 3rem;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 60px;
          height: 4px;
          background: var(--accent-color);
          border-radius: 2px;
        }

        /* Card */
        .card-modern {
          border: none;
          border-radius: 20px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
          overflow: hidden;
          background: white;
        }
        .card-modern:hover {
          transform: translateY(-10px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.15);
        }

        /* Stats */
        .stats-card {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          padding: 2rem;
          border-radius: 20px;
          margin-bottom: 2rem;
        }
        .stats-number {
          font-size: 3rem;
          font-weight: 700;
          display: block;
        }

        /* Team */
        .team-card { text-align: center; padding: 2rem; }
        .team-avatar {
          width: 120px; height: 120px; border-radius: 50%;
          background: var(--secondary-gradient);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          font-size: 3rem; color: white;
        }

        /* Values */
        .values-icon {
          width: 80px; height: 80px; border-radius: 50%;
          background: var(--primary-gradient);
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 1rem;
          font-size: 2rem; color: white;
        }

        /* Floating shapes */
        .floating-shapes { position: absolute; width: 100%; height: 100%; overflow: hidden; z-index: 1; }
        .shape { position: absolute; opacity: 0.1; animation: float 6s ease-in-out infinite; }
        .shape-1 { top: 20%; left: 10%; animation-delay: 0s; }
        .shape-2 { top: 60%; right: 10%; animation-delay: 2s; }
        .shape-3 { bottom: 20%; left: 20%; animation-delay: 4s; }
        @keyframes float { 0%,100%{ transform:translateY(0) rotate(0)} 50%{transform:translateY(-20px) rotate(10deg)} }

        /* Button */
        .btn-modern {
          background: var(--primary-gradient);
          border: none;
          border-radius: 50px;
          padding: 12px 30px;
          color: white;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .btn-modern:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(102,126,234,0.3);
          color: white;
        }

        /* Timeline */
        .timeline { position: relative; padding: 2rem 0; }
        .timeline::before {
          content: ''; position: absolute; top: 0; left: 50%;
          width: 4px; height: 100%; background: var(--accent-color);
          transform: translateX(-50%);
        }
        .timeline-item { position: relative; margin-bottom: 3rem; }
        .timeline-content {
          background: white; padding: 2rem; border-radius: 15px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
          width: 45%;
        }
        .timeline-item:nth-child(odd) .timeline-content { margin-left: auto; }
        .timeline-dot {
          position: absolute; top: 50%; left: 50%;
          width: 20px; height: 20px;
          background: var(--accent-color);
          border-radius: 50%;
          transform: translate(-50%, -50%);
          border: 4px solid white;
          box-shadow: 0 0 0 4px var(--accent-color);
        }
        @media (max-width:768px) {
          .timeline::before { left: 20px; }
          .timeline-content { width: calc(100% - 60px); margin-left: 60px!important; }
          .timeline-dot { left: 20px; }
        }

        /* Footer */
        .footer-dark-red { background: var(--primary-gradient); position: relative; overflow: hidden; }
        .footer-dark-red::before {
          content:''; position:absolute; top:0; left:0; right:0; bottom:0;
          background: radial-gradient(ellipse at center, rgba(220,20,60,0.1) 0%, rgba(139,0,0,0.05) 50%, rgba(0,0,0,0.1) 100%);
          animation: pulse-bg 4s ease-in-out infinite;
        }
        .footer-content { position: relative; z-index: 2; }
        .footer-brand {
          color: rgba(255, 77, 187, 1); font-weight: 700; font-size: 1.5rem;
          text-shadow: 0 0 10px var(--glow-red), 0 0 20px var(--shadow-red), 0 0 30px rgba(255, 0, 51, 0.2);
          animation: glow-text 3s ease-in-out infinite alternate;
        }
        .footer-description { color: rgba(255,255,255,0.8); line-height: 1.6; text-shadow:0 1px 3px rgba(0,0,0,0.5); }
        .social-links-modern { display: flex; gap: 1rem; justify-content: flex-end; }

        /* Social links */
        .social-link-modern {
          display: inline-flex; align-items: center; justify-content: center;
          width: 50px; height: 50px; border-radius: 50%;
          background: linear-gradient(135deg, rgba(255, 0, 51, 0.53) 0%, rgba(255, 77, 137, 1) 100%);
          border: 2px solid rgba(121, 0, 46, 1);
          color: #fff; font-size: 1.2rem;
          transition: all 0.4s cubic-bezier(0.175,0.885,0.32,1.275);
          position: relative;
          box-shadow: 0 5px 15px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .social-link-modern::before {
          content:''; position:absolute; top:-2px; left:-2px; right:-2px; bottom:-2px;
          background: linear-gradient(45deg, transparent, var(--glow-red), transparent);
          border-radius: 50%; opacity:0; transition:opacity 0.3s ease;
          animation: rotate-glow 3s linear infinite;
        }
        .social-link-modern:hover::before { opacity:1; }
        .social-link-modern:hover {
          transform: translateY(-8px) scale(1.1); color:#fff;
          box-shadow: 0 15px 35px rgba(0,0,0,0.6), 0 0 25px var(--glow-red), inset 0 1px 0 rgba(255,255,255,0.2);
        }
        .social-link-modern.facebook:hover { border-color:#1877F2; background:linear-gradient(135deg,#1877F2 0%,rgba(0, 110, 255, 0.9) 100%); }
        .social-link-modern.line:hover { border-color:#1DA1F2; background:linear-gradient(135deg,#1DA1F2 0%,rgba(0, 255, 21, 0.9) 100%); }
        .social-link-modern.instagram:hover { border-color:#E4405F; background:linear-gradient(135deg,#feda75 20%,#fa7e1e 40%,#d62976 60%,#962fbf 80%,rgba(255, 0, 76, 0.9) 100%); }
        .social-link-modern.youtube:hover { border-color:#FF0000; background:linear-gradient(135deg,#FF0000 0%,rgba(0,0,0,0.9) 100%); }
        .social-link-modern.email:hover { border-color:#DC143C; background:linear-gradient(135deg,#DC143C 0%,rgba(255, 255, 255, 0.9) 100%); }

        /* Footer divider */
        .footer-divider {
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, #ff0000ff 50%, transparent 100%);
          margin: 2rem 0;
          box-shadow: 0 0 10px var(--glow-red);
          animation: glow-line 3s ease-in-out infinite;
        }
        .footer-copyright {
          color: rgba(255,255,255,0.7);
          font-size: 0.9rem;
          text-shadow: 0 1px 2px rgba(0,0,0,0.5);
        }

        /* Animations */
        @keyframes pulse-bg { 0%,100%{opacity:0.3} 50%{opacity:0.6} }
        @keyframes glow-text { from{ text-shadow:0 0 10px var(--glow-red)} to{ text-shadow:0 0 40px var(--glow-red)} }
        @keyframes glow-line { 0%,100%{box-shadow:0 0 10px var(--glow-red)} 50%{box-shadow:0 0 30px var(--shadow-red)} }
        @keyframes rotate-glow { from{transform:rotate(0)} to{transform:rotate(360deg)} }

        /* Responsive */
        @media (max-width:768px) {
          .social-links-modern { justify-content:center; margin:2rem 0; }
          .footer-brand { text-align:center; margin-bottom:1rem; }
          .footer-description { text-align:center; }
          .footer-copyright { text-align:center; margin-top:1rem; }
        }
        @media (max-width:576px) {
          .social-link-modern { width:45px; height:45px; font-size:1rem; }
          .social-links-modern { gap:0.8rem; }
        }
      `,
        }}
      />

      {/* Footer */}
      <footer className="footer-dark-red text-white py-5">
        <div className="container footer-content">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h5 className="footer-brand mb-3">บริษัท เทคโนโลยี จำกัด</h5>
              <p className="footer-description">
                สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก <br />
                ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ
              </p>
            </div>
            <div className="col-lg-6">
              <div className="social-links-modern">
                <a
                  href="https://facebook.com"
                  className="social-link-modern facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
                <a
                  href="https://line.me"
                  className="social-link-modern line"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Line"
                >
                  <i className="fab fa-line" />
                </a>
                <a
                  href="https://instagram.com"
                  className="social-link-modern instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram" />
                </a>
                <a
                  href="https://youtube.com"
                  className="social-link-modern youtube"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube" />
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="social-link-modern email"
                  aria-label="Email"
                >
                  <i className="fas fa-envelope" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>

          <div className="row">
            <div className="col-12">
              <p className="footer-copyright text-center mb-0">
                © 2025 All rights reserved. Made with ❤️
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

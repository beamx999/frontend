"use client";

import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname()

    if (pathname === '/Contact') {
        return null
    }
  return (
    <>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --primary-gradient: linear-gradient(135deg, #1a0000 0%, #330000 50%, #1a0000 100%);\n            --secondary-gradient: linear-gradient(135deg, #DC143C 0%, #8B0000 100%);\n            --accent-color: #DC143C;\n            --text-dark: #2d3436;\n            --text-light: #636e72;\n            --shadow-red: rgba(220, 20, 60, 0.3);\n            --glow-red: rgba(220, 20, 60, 0.6);\n        }\n\n        * {\n            font-family: 'Inter', sans-serif;\n        }\n\n        body {\n            overflow-x: hidden;\n        }\n\n        .hero-section {\n            background: var(--primary-gradient);\n            min-height: 60vh;\n            display: flex;\n            align-items: center;\n            position: relative;\n            color: white;\n        }\n\n        .hero-section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" fill=\"none\"><path d=\"M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z\" fill=\"rgba(255,255,255,0.1)\"/></svg>') no-repeat center bottom;\n            background-size: cover;\n        }\n\n        .hero-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .section-title {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .section-title::after {\n            content: '';\n            position: absolute;\n            bottom: -10px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 60px;\n            height: 4px;\n            background: var(--accent-color);\n            border-radius: 2px;\n        }\n\n        .card-modern {\n            border: none;\n            border-radius: 20px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            transition: all 0.3s ease;\n            overflow: hidden;\n            background: white;\n        }\n\n        .card-modern:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 30px 60px rgba(0,0,0,0.15);\n        }\n\n        .stats-card {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            color: white;\n            text-align: center;\n            padding: 2rem;\n            border-radius: 20px;\n            margin-bottom: 2rem;\n        }\n\n        .stats-number {\n            font-size: 3rem;\n            font-weight: 700;\n            display: block;\n        }\n\n        .team-card {\n            text-align: center;\n            padding: 2rem;\n        }\n\n        .team-avatar {\n            width: 120px;\n            height: 120px;\n            border-radius: 50%;\n            background: var(--secondary-gradient);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 3rem;\n            color: white;\n        }\n\n        .values-icon {\n            width: 80px;\n            height: 80px;\n            background: var(--primary-gradient);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n\n        .floating-shapes {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            z-index: 1;\n        }\n\n        .shape {\n            position: absolute;\n            opacity: 0.1;\n            animation: float 6s ease-in-out infinite;\n        }\n\n        .shape-1 {\n            top: 20%;\n            left: 10%;\n            animation-delay: 0s;\n        }\n\n        .shape-2 {\n            top: 60%;\n            right: 10%;\n            animation-delay: 2s;\n        }\n\n        .shape-3 {\n            bottom: 20%;\n            left: 20%;\n            animation-delay: 4s;\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translateY(0px) rotate(0deg); }\n            50% { transform: translateY(-20px) rotate(10deg); }\n        }\n\n        .btn-modern {\n            background: var(--primary-gradient);\n            border: none;\n            border-radius: 50px;\n            padding: 12px 30px;\n            color: white;\n            font-weight: 500;\n            transition: all 0.3s ease;\n        }\n\n        .btn-modern:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n            color: white;\n        }\n\n        .timeline {\n            position: relative;\n            padding: 2rem 0;\n        }\n\n        .timeline::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 50%;\n            width: 4px;\n            height: 100%;\n            background: var(--accent-color);\n            transform: translateX(-50%);\n        }\n\n        .timeline-item {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .timeline-content {\n            background: white;\n            padding: 2rem;\n            border-radius: 15px;\n            box-shadow: 0 15px 35px rgba(0,0,0,0.1);\n            width: 45%;\n        }\n\n        .timeline-item:nth-child(odd) .timeline-content {\n            margin-left: auto;\n        }\n\n        .timeline-dot {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 20px;\n            height: 20px;\n            background: var(--accent-color);\n            border-radius: 50%;\n            transform: translate(-50%, -50%);\n            border: 4px solid white;\n            box-shadow: 0 0 0 4px var(--accent-color);\n        }\n\n        @media (max-width: 768px) {\n            .timeline::before {\n                left: 20px;\n            }\n            \n            .timeline-content {\n                width: calc(100% - 60px);\n                margin-left: 60px !important;\n            }\n            \n            .timeline-dot {\n                left: 20px;\n            }\n        }\n\n        .section-padding {\n            padding: 80px 0;\n        }\n\n        /* Footer Dark Red Theme with Glow Effects */\n        .footer-dark-red {\n            background: var(--primary-gradient);\n            position: relative;\n            overflow: hidden;\n        }\n\n        .footer-dark-red::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: radial-gradient(\n                ellipse at center,\n                rgba(220, 20, 60, 0.1) 0%,\n                rgba(139, 0, 0, 0.05) 50%,\n                rgba(0, 0, 0, 0.1) 100%\n            );\n            animation: pulse-bg 4s ease-in-out infinite;\n        }\n\n        .footer-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .footer-brand {\n            color:rgb(0, 255, 170);\n            font-weight: 700;\n            font-size: 1.5rem;\n            text-shadow: \n                0 0 10px var(--glow-red),\n                0 0 20px var(--shadow-red),\n                0 0 30px rgba(220, 20, 60, 0.2);\n            animation: glow-text 3s ease-in-out infinite alternate;\n        }\n\n        .footer-description {\n            color: rgba(255, 255, 255, 0.8);\n            text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);\n            line-height: 1.6;\n        }\n\n        .social-links-modern {\n            display: flex;\n            gap: 1rem;\n            justify-content: flex-end;\n        }\n\n        .social-link-modern {\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n            width: 50px;\n            height: 50px;\n            border-radius: 50%;\n            background: linear-gradient(135deg, rgba(220, 20, 60, 0.2) 0%, rgba(0, 0, 0, 0.8) 100%);\n            border: 2px solid rgba(220, 20, 60, 0.3);\n            color: #fff;\n            text-decoration: none;\n            font-size: 1.2rem;\n            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n            position: relative;\n            box-shadow: \n                0 5px 15px rgba(0, 0, 0, 0.4),\n                inset 0 1px 0 rgba(255, 255, 255, 0.1);\n        }\n\n        .social-link-modern::before {\n            content: '';\n            position: absolute;\n            top: -2px;\n            left: -2px;\n            right: -2px;\n            bottom: -2px;\n            background: linear-gradient(45deg, transparent, var(--glow-red), transparent);\n            border-radius: 50%;\n            opacity: 0;\n            transition: opacity 0.3s ease;\n            animation: rotate-glow 3s linear infinite;\n        }\n\n        .social-link-modern:hover::before {\n            opacity: 1;\n        }\n\n        .social-link-modern:hover {\n            transform: translateY(-8px) scale(1.1);\n            color: #fff;\n            text-decoration: none;\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px var(--glow-red),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.facebook:hover {\n            border-color: #1877F2;\n            background: linear-gradient(135deg, #1877F2 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(24, 119, 242, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.twitter:hover {\n            border-color: #1DA1F2;\n            background: linear-gradient(135deg, #1DA1F2 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(29, 161, 242, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.instagram:hover {\n            border-color: #E4405F;\n            background: linear-gradient(135deg, #E4405F 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px rgba(228, 64, 95, 0.6),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .social-link-modern.email:hover {\n            border-color: #DC143C;\n            background: linear-gradient(135deg, #DC143C 0%, rgba(0, 0, 0, 0.9) 100%);\n            box-shadow: \n                0 15px 35px rgba(0, 0, 0, 0.6),\n                0 0 25px var(--glow-red),\n                inset 0 1px 0 rgba(255, 255, 255, 0.2);\n        }\n\n        .footer-divider {\n            height: 2px;\n            background: linear-gradient(90deg, transparent 0%, #DC143C 50%, transparent 100%);\n            margin: 2rem 0;\n            box-shadow: 0 0 10px var(--glow-red);\n            animation: glow-line 3s ease-in-out infinite;\n        }\n\n        .footer-copyright {\n            color: rgba(255, 255, 255, 0.7);\n            font-size: 0.9rem;\n            text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);\n        }\n\n        /* Animations */\n        @keyframes pulse-bg {\n            0%, 100% {\n                opacity: 0.3;\n            }\n            50% {\n                opacity: 0.6;\n            }\n        }\n\n        @keyframes glow-text {\n            from {\n                text-shadow: \n                    0 0 10px var(--glow-red),\n                    0 0 20px var(--shadow-red),\n                    0 0 30px rgba(220, 20, 60, 0.2);\n            }\n            to {\n                text-shadow: \n                    0 0 20px var(--glow-red),\n                    0 0 30px var(--shadow-red),\n                    0 0 40px rgba(220, 20, 60, 0.4);\n            }\n        }\n\n        @keyframes glow-line {\n            0%, 100% {\n                box-shadow: 0 0 10px var(--glow-red);\n            }\n            50% {\n                box-shadow: 0 0 20px var(--glow-red), 0 0 30px var(--shadow-red);\n            }\n        }\n\n        @keyframes rotate-glow {\n            from {\n                transform: rotate(0deg);\n            }\n            to {\n                transform: rotate(360deg);\n            }\n        }\n\n        /* Mobile Responsive */\n        @media (max-width: 768px) {\n            .social-links-modern {\n                justify-content: center;\n                margin: 2rem 0;\n            }\n\n            .footer-brand {\n                text-align: center;\n                margin-bottom: 1rem;\n            }\n\n            .footer-description {\n                text-align: center;\n            }\n\n            .footer-copyright {\n                text-align: center;\n                margin-top: 1rem;\n            }\n        }\n\n        @media (max-width: 576px) {\n            .social-link-modern {\n                width: 45px;\n                height: 45px;\n                font-size: 1rem;\n            }\n\n            .social-links-modern {\n                gap: 0.8rem;\n            }\n        }\n    " }} />
  <footer className="footer-dark-red text-white py-5">
    <div className="container footer-content">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <h5 className="footer-brand mb-3">บริษัท เทคโนโลยี จำกัด</h5>
          <p className="footer-description">
            สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก<br />
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
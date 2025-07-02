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
  <style dangerouslySetInnerHTML={{__html: "\n        :root {\n            --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            --secondary-gradient: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);\n            --accent-color: #6c5ce7;\n            --text-dark: #2d3436;\n            --text-light: #636e72;\n        }\n\n        * {\n            font-family: 'Inter', sans-serif;\n        }\n\n        body {\n            overflow-x: hidden;\n        }\n\n        .hero-section {\n            background: var(--primary-gradient);\n            min-height: 60vh;\n            display: flex;\n            align-items: center;\n            position: relative;\n            color: white;\n        }\n\n        .hero-section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" fill=\"none\"><path d=\"M0,0 C150,100 350,0 500,50 C650,100 850,0 1000,50 L1000,0 Z\" fill=\"rgba(255,255,255,0.1)\"/></svg>') no-repeat center bottom;\n            background-size: cover;\n        }\n\n        .hero-content {\n            position: relative;\n            z-index: 2;\n        }\n\n        .section-title {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .section-title::after {\n            content: '';\n            position: absolute;\n            bottom: -10px;\n            left: 50%;\n            transform: translateX(-50%);\n            width: 60px;\n            height: 4px;\n            background: var(--accent-color);\n            border-radius: 2px;\n        }\n\n        .card-modern {\n            border: none;\n            border-radius: 20px;\n            box-shadow: 0 20px 40px rgba(0,0,0,0.1);\n            transition: all 0.3s ease;\n            overflow: hidden;\n            background: white;\n        }\n\n        .card-modern:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 30px 60px rgba(0,0,0,0.15);\n        }\n\n        .stats-card {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            color: white;\n            text-align: center;\n            padding: 2rem;\n            border-radius: 20px;\n            margin-bottom: 2rem;\n        }\n\n        .stats-number {\n            font-size: 3rem;\n            font-weight: 700;\n            display: block;\n        }\n\n        .team-card {\n            text-align: center;\n            padding: 2rem;\n        }\n\n        .team-avatar {\n            width: 120px;\n            height: 120px;\n            border-radius: 50%;\n            background: var(--secondary-gradient);\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 3rem;\n            color: white;\n        }\n\n        .social-links a {\n            display: inline-block;\n            width: 40px;\n            height: 40px;\n            background: var(--accent-color);\n            color: white;\n            border-radius: 50%;\n            text-align: center;\n            line-height: 40px;\n            margin: 0 5px;\n            transition: all 0.3s ease;\n        }\n\n        .social-links a:hover {\n            background: var(--text-dark);\n            transform: translateY(-3px);\n        }\n\n        .values-icon {\n            width: 80px;\n            height: 80px;\n            background: var(--primary-gradient);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 1rem;\n            font-size: 2rem;\n            color: white;\n        }\n\n        .floating-shapes {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            z-index: 1;\n        }\n\n        .shape {\n            position: absolute;\n            opacity: 0.1;\n            animation: float 6s ease-in-out infinite;\n        }\n\n        .shape-1 {\n            top: 20%;\n            left: 10%;\n            animation-delay: 0s;\n        }\n\n        .shape-2 {\n            top: 60%;\n            right: 10%;\n            animation-delay: 2s;\n        }\n\n        .shape-3 {\n            bottom: 20%;\n            left: 20%;\n            animation-delay: 4s;\n        }\n\n        @keyframes float {\n            0%, 100% { transform: translateY(0px) rotate(0deg); }\n            50% { transform: translateY(-20px) rotate(10deg); }\n        }\n\n        .btn-modern {\n            background: var(--primary-gradient);\n            border: none;\n            border-radius: 50px;\n            padding: 12px 30px;\n            color: white;\n            font-weight: 500;\n            transition: all 0.3s ease;\n        }\n\n        .btn-modern:hover {\n            transform: translateY(-2px);\n            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n            color: white;\n        }\n\n        .timeline {\n            position: relative;\n            padding: 2rem 0;\n        }\n\n        .timeline::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 50%;\n            width: 4px;\n            height: 100%;\n            background: var(--accent-color);\n            transform: translateX(-50%);\n        }\n\n        .timeline-item {\n            position: relative;\n            margin-bottom: 3rem;\n        }\n\n        .timeline-content {\n            background: white;\n            padding: 2rem;\n            border-radius: 15px;\n            box-shadow: 0 15px 35px rgba(0,0,0,0.1);\n            width: 45%;\n        }\n\n        .timeline-item:nth-child(odd) .timeline-content {\n            margin-left: auto;\n        }\n\n        .timeline-dot {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            width: 20px;\n            height: 20px;\n            background: var(--accent-color);\n            border-radius: 50%;\n            transform: translate(-50%, -50%);\n            border: 4px solid white;\n            box-shadow: 0 0 0 4px var(--accent-color);\n        }\n\n        @media (max-width: 768px) {\n            .timeline::before {\n                left: 20px;\n            }\n            \n            .timeline-content {\n                width: calc(100% - 60px);\n                margin-left: 60px !important;\n            }\n            \n            .timeline-dot {\n                left: 20px;\n            }\n        }\n\n        .section-padding {\n            padding: 80px 0;\n        }\n    " }} />
  <footer className="bg-dark text-white py-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h5 className="fw-bold mb-3">บริษัท เทคโนโลยี จำกัด</h5>
          <p className="text-light opacity-75">
            สร้างสรรค์นวัตกรรมที่เปลี่ยนโลก<br />
            ด้วยเทคโนโลยีที่ทันสมัยและทีมงานมืออาชีพ
          </p>
        </div>
        <div className="col-lg-6 text-lg-end">
          <div className="social-links mb-3">
            <a href="#" className="text-white me-3"><i className="fab fa-facebook-f fa-lg" /></a>
            <a href="#" className="text-white me-3"><i className="fab fa-twitter fa-lg" /></a>
            <a href="#" className="text-white me-3"><i className="fab fa-linkedin-in fa-lg" /></a>
            <a href="#" className="text-white"><i className="fab fa-instagram fa-lg" /></a>
          </div>
          <p className="text-light opacity-75 small">
            © 2025 All rights reserved. Made with ❤️
          </p>
        </div>
        </div>
    </div>
  </footer>
</>

);
}

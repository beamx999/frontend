import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Services() {
  return (

  <div>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.2/css/bootstrap.min.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n        * {\n            font-family: 'Kanit', sans-serif;\n        }\n        \n        body {\n            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);\n            min-height: 100vh;\n            overflow-x: hidden;\n        }\n        \n        .hero-section {\n            padding: 100px 0;\n            text-align: center;\n            color: white;\n            position: relative;\n        }\n        \n        .hero-section::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            background: url('data:image/svg+xml,<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 100\" fill=\"rgba(255,255,255,0.1)\"><polygon points=\"0,0 1000,0 1000,100 0,80\"/></svg>') no-repeat bottom center;\n            background-size: cover;\n        }\n        \n        .hero-title {\n            font-size: 3.5rem;\n            font-weight: 700;\n            margin-bottom: 1rem;\n            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);\n            animation: fadeInUp 1s ease-out;\n        }\n        \n        .hero-subtitle {\n            font-size: 1.2rem;\n            opacity: 0.9;\n            animation: fadeInUp 1s ease-out 0.3s both;\n        }\n        \n        @keyframes fadeInUp {\n            from {\n                opacity: 0;\n                transform: translateY(30px);\n            }\n            to {\n                opacity: 1;\n                transform: translateY(0);\n            }\n        }\n        \n        .services-section {\n            padding: 80px 0;\n            background: white;\n            position: relative;\n            margin-top: -50px;\n            border-radius: 50px 50px 0 0;\n        }\n        \n        .service-card {\n            background: white;\n            border-radius: 20px;\n            padding: 40px 30px;\n            margin-bottom: 30px;\n            box-shadow: 0 15px 35px rgba(0,0,0,0.1);\n            transition: all 0.3s ease;\n            border: 1px solid rgba(102, 126, 234, 0.1);\n            position: relative;\n            overflow: hidden;\n        }\n        \n        .service-card::before {\n            content: '';\n            position: absolute;\n            top: 0;\n            left: -100%;\n            width: 100%;\n            height: 100%;\n            background: linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.1), transparent);\n            transition: left 0.6s ease;\n        }\n        \n        .service-card:hover::before {\n            left: 100%;\n        }\n        \n        .service-card:hover {\n            transform: translateY(-10px);\n            box-shadow: 0 25px 50px rgba(102, 126, 234, 0.2);\n        }\n        \n        .service-icon {\n            width: 80px;\n            height: 80px;\n            background: linear-gradient(135deg, #667eea, #764ba2);\n            border-radius: 50%;\n            display: flex;\n            align-items: center;\n            justify-content: center;\n            margin: 0 auto 25px;\n            color: white;\n            font-size: 2rem;\n            transition: all 0.3s ease;\n        }\n        \n        .service-card:hover .service-icon {\n            transform: scale(1.1) rotate(10deg);\n        }\n        \n        .service-title {\n            font-size: 1.5rem;\n            font-weight: 600;\n            margin-bottom: 15px;\n            color: #333;\n        }\n        \n        .service-description {\n            color: #666;\n            line-height: 1.6;\n            margin-bottom: 20px;\n        }\n        \n        .service-features {\n            list-style: none;\n            padding: 0;\n        }\n        \n        .service-features li {\n            padding: 5px 0;\n            color: #555;\n            position: relative;\n            padding-left: 25px;\n        }\n        \n        .service-features li::before {\n            content: '✓';\n            position: absolute;\n            left: 0;\n            color: #667eea;\n            font-weight: bold;\n        }\n        \n        .btn-custom {\n            background: linear-gradient(135deg, #667eea, #764ba2);\n            border: none;\n            padding: 12px 30px;\n            border-radius: 25px;\n            color: white;\n            font-weight: 500;\n            transition: all 0.3s ease;\n            text-decoration: none;\n            display: inline-block;\n        }\n        \n        .btn-custom:hover {\n            transform: scale(1.05);\n            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n            color: white;\n        }\n        \n        .pricing-badge {\n            position: absolute;\n            top: 20px;\n            right: 20px;\n            background: linear-gradient(135deg, #ff6b6b, #ffa500);\n            color: white;\n            padding: 8px 15px;\n            border-radius: 15px;\n            font-size: 0.9rem;\n            font-weight: 500;\n        }\n        \n        .stats-section {\n            background: linear-gradient(135deg, #667eea, #764ba2);\n            padding: 60px 0;\n            color: white;\n        }\n        \n        .stat-item {\n            text-align: center;\n            margin-bottom: 30px;\n        }\n        \n        .stat-number {\n            font-size: 3rem;\n            font-weight: 700;\n            display: block;\n            margin-bottom: 10px;\n        }\n        \n        .stat-label {\n            font-size: 1.1rem;\n            opacity: 0.9;\n        }\n        \n        .floating-shapes {\n            position: absolute;\n            width: 100%;\n            height: 100%;\n            overflow: hidden;\n            pointer-events: none;\n        }\n        \n        .shape {\n            position: absolute;\n            background: rgba(255,255,255,0.1);\n            border-radius: 50%;\n            animation: float 6s ease-in-out infinite;\n        }\n        \n        .shape:nth-child(1) {\n            width: 80px;\n            height: 80px;\n            top: 20%;\n            left: 10%;\n            animation-delay: 0s;\n        }\n        \n        .shape:nth-child(2) {\n            width: 60px;\n            height: 60px;\n            top: 60%;\n            right: 10%;\n            animation-delay: 2s;\n        }\n        \n        .shape:nth-child(3) {\n            width: 100px;\n            height: 100px;\n            bottom: 20%;\n            left: 20%;\n            animation-delay: 4s;\n        }\n        \n        @keyframes float {\n            0%, 100% { transform: translateY(0px) rotate(0deg); }\n            50% { transform: translateY(-20px) rotate(180deg); }\n        }\n        \n        @media (max-width: 768px) {\n            .hero-title {\n                font-size: 2.5rem;\n            }\n            \n            .service-card {\n                margin-bottom: 20px;\n            }\n            \n            .services-section {\n                padding: 60px 0;\n            }\n        }\n    " }} />
  {/* Hero Section */}
  <section className="hero-section">
    <div className="floating-shapes">
      <div className="shape" />
      <div className="shape" />
      <div className="shape" />
    </div>
    <div className="container">
      <h1 className="hero-title">บริการของเรา</h1>
      <p className="hero-subtitle">โซลูชันที่ครบครันสำหรับธุรกิจของคุณ</p>
    </div>
  </section>
  {/* Services Section */}
  <section className="services-section">
    <div className="container">
      <div className="row">
        {/* Web Development */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿15,000</div>
            <div className="service-icon">
              <i className="fas fa-code" />
            </div>
            <h3 className="service-title">พัฒนาเว็บไซต์</h3>
            <p className="service-description">
              สร้างเว็บไซต์ที่ทันสมัย รองรับทุกอุปกรณ์ และเพิ่มยอดขายให้กับธุรกิจของคุณ
            </p>
            <ul className="service-features">
              <li>Responsive Design</li>
              <li>SEO Optimized</li>
              <li>Fast Loading Speed</li>
              <li>Admin Dashboard</li>
              <li>1 ปี Support</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
        {/* Mobile App */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿25,000</div>
            <div className="service-icon">
              <i className="fas fa-mobile-alt" />
            </div>
            <h3 className="service-title">แอปพลิเคชัน</h3>
            <p className="service-description">
              พัฒนาแอปมือถือ iOS และ Android ที่ใช้งานง่าย และตอบโจทย์ธุรกิจของคุณ
            </p>
            <ul className="service-features">
              <li>iOS &amp; Android</li>
              <li>Native Performance</li>
              <li>Push Notifications</li>
              <li>Offline Support</li>
              <li>App Store Submit</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
        {/* Digital Marketing */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿8,000/เดือน</div>
            <div className="service-icon">
              <i className="fas fa-chart-line" />
            </div>
            <h3 className="service-title">Digital Marketing</h3>
            <p className="service-description">
              เพิ่มยอดขายและเข้าถึงลูกค้าเป้าหมายผ่าน Social Media และ Google Ads
            </p>
            <ul className="service-features">
              <li>Facebook &amp; Instagram Ads</li>
              <li>Google Ads</li>
              <li>Content Creation</li>
              <li>Analytics Report</li>
              <li>24/7 Monitoring</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
        {/* E-commerce */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿20,000</div>
            <div className="service-icon">
              <i className="fas fa-shopping-cart" />
            </div>
            <h3 className="service-title">ร้านค้าออนไลน์</h3>
            <p className="service-description">
              สร้างร้านค้าออนไลน์ครบครัน พร้อมระบบจัดการสินค้าและการชำระเงิน
            </p>
            <ul className="service-features">
              <li>Product Management</li>
              <li>Payment Gateway</li>
              <li>Inventory System</li>
              <li>Order Tracking</li>
              <li>Customer Support</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
        {/* Cloud Services */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿5,000/เดือน</div>
            <div className="service-icon">
              <i className="fas fa-cloud" />
            </div>
            <h3 className="service-title">Cloud Services</h3>
            <p className="service-description">
              บริการ Cloud Computing ที่ปลอดภัย รวดเร็ว และประหยัดค่าใช้จ่าย
            </p>
            <ul className="service-features">
              <li>Cloud Hosting</li>
              <li>Data Backup</li>
              <li>Auto Scaling</li>
              <li>Security Monitoring</li>
              <li>99.9% Uptime</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
        {/* Consulting */}
        <div className="col-lg-4 col-md-6">
          <div className="service-card">
            <div className="pricing-badge">เริ่มต้น ฿3,000/ชม.</div>
            <div className="service-icon">
              <i className="fas fa-lightbulb" />
            </div>
            <h3 className="service-title">IT Consulting</h3>
            <p className="service-description">
              ให้คำปรึกษาด้านเทคโนโลยีเพื่อเพิ่มประสิทธิภาพและลดต้นทุนธุรกิจ
            </p>
            <ul className="service-features">
              <li>Technology Assessment</li>
              <li>Digital Transformation</li>
              <li>System Integration</li>
              <li>Process Optimization</li>
              <li>Training &amp; Support</li>
            </ul>
            <a href="#" className="btn-custom">สอบถามรายละเอียด</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Stats Section */}
  <section className="stats-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <span className="stat-number" data-count={150}>0</span>
            <span className="stat-label">โปรเจ็กต์สำเร็จ</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <span className="stat-number" data-count={80}>0</span>
            <span className="stat-label">ลูกค้าพึงพอใจ</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <span className="stat-number" data-count={5}>0</span>
            <span className="stat-label">ปีประสบการณ์</span>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <div className="stat-item">
            <span className="stat-number" data-count={24}>0</span>
            <span className="stat-label">ชั่วโมงสนับสนุน</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
  )
}
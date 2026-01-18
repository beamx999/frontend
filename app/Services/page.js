'use client'
import { useState } from 'react'

export default function JapaneseRestaurant() {
  const [selectedMenu, setSelectedMenu] = useState(null)

  const menus = [
  {
    id: 1,
    title: '🍱 เซ็ตอาหารกลางวัน',
    description: 'Bento Set, Teriyaki Chicken, Salmon Shioyaki, Tempura Set',
    price: '฿180 - ฿350',
    icon: '🍱',
    features: ['Bento Set', 'Teriyaki Chicken', 'Salmon Shioyaki', 'Tempura Set'],
    color: 'linear-gradient(135deg, #ff6b9d, #c44569)'
  },
  {
    id: 2,
    title: '🍣 ซูชิและซาชิมิ',
    description: 'Salmon Sushi, Tuna Sashimi, Special Roll, Omakase Set',
    price: '฿250 - ฿1,200',
    icon: '🍣',
    features: ['Salmon Sushi', 'Tuna Sashimi', 'Special Roll', 'Omakase Set'],
    color: 'linear-gradient(135deg, #a8edea, #fed6e3)'
  },
  {
    id: 3,
    title: '🍜 ราเมนและอุด้ง',
    description: 'Tonkotsu Ramen, Shoyu Ramen, Tempura Udon, Yaki Udon',
    price: '฿180 - ฿420',
    icon: '🍜',
    features: ['Tonkotsu Ramen', 'Shoyu Ramen', 'Tempura Udon', 'Yaki Udon'],
    color: 'linear-gradient(135deg, #fbc2eb, #a6c1ee)'
  },
  {
    id: 4,
    title: '🍖 ย่างและทอด',
    description: 'Yakitori, Tonkatsu, Chicken Karaage, Gyoza',
    price: '฿120 - ฿480',
    icon: '🍖',
    features: ['Yakitori', 'Tonkatsu', 'Chicken Karaage', 'Gyoza'],
    color: 'linear-gradient(135deg, #ffecd2, #fcb69f)'
  },
  {
    id: 5,
    title: '🍛 ข้าวและโดนบุริ',
    description: 'Katsu Curry, Gyudon, Oyakodon, Unagi Don',
    price: '฿160 - ฿550',
    icon: '🍛',
    features: ['Katsu Curry', 'Gyudon', 'Oyakodon', 'Unagi Don'],
    color: 'linear-gradient(135deg, #a8caba, #5d4e75)'
  },
  {
    id: 6,
    title: '🍰 ของหวานและเครื่องดื่ม',
    description: 'Matcha Ice Cream, Mochi, Green Tea, Sake Selection',
    price: '฿80 - ฿380',
    icon: '🍰',
    features: ['Matcha Ice Cream', 'Mochi', 'Green Tea', 'Sake Selection'],
    color: 'linear-gradient(135deg, #f093fb, #f5576c)'
  }
];

  const handleMenuClick = (menu) => {
    setSelectedMenu(selectedMenu?.id === menu.id ? null : menu)
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap');
        
        .sakura-container {
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #ffe4e1 50%, #fdf2f8 75%, #fef7ff 100%);
          min-height: 100vh;
          position: relative;
          overflow-x: hidden;
        }
        
        .sakura-petals {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }
        
        .petal {
          position: absolute;
          width: 20px;
          height: 20px;
          background: linear-gradient(45deg, #ffb3d9, #ff99cc);
          border-radius: 50% 10px 50% 10px;
          animation: fall linear infinite;
          opacity: 0.7;
        }
        
        .petal:nth-child(1) { left: 10%; animation-duration: 8s; animation-delay: 0s; }
        .petal:nth-child(2) { left: 20%; animation-duration: 12s; animation-delay: 2s; }
        .petal:nth-child(3) { left: 30%; animation-duration: 10s; animation-delay: 1s; }
        .petal:nth-child(4) { left: 40%; animation-duration: 14s; animation-delay: 3s; }
        .petal:nth-child(5) { left: 50%; animation-duration: 9s; animation-delay: 0.5s; }
        .petal:nth-child(6) { left: 60%; animation-duration: 11s; animation-delay: 4s; }
        .petal:nth-child(7) { left: 70%; animation-duration: 13s; animation-delay: 1.5s; }
        .petal:nth-child(8) { left: 80%; animation-duration: 15s; animation-delay: 2.5s; }
        .petal:nth-child(9) { left: 90%; animation-duration: 7s; animation-delay: 3.5s; }
        
        @keyframes fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        .floating-sakura {
          position: absolute;
          font-size: 24px;
          animation: float 6s ease-in-out infinite;
          z-index: 2;
        }
        
        .floating-sakura:nth-child(2) { top: 10%; left: 5%; animation-delay: 0s; }
        .floating-sakura:nth-child(3) { top: 20%; right: 5%; animation-delay: 2s; }
        .floating-sakura:nth-child(4) { bottom: 10%; left: 8%; animation-delay: 4s; }
        .floating-sakura:nth-child(5) { bottom: 20%; right: 8%; animation-delay: 1s; }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        .main-content {
          position: relative;
          z-index: 10;
          font-family: 'Noto Sans Thai', sans-serif;
          padding: 40px 0;
        }
        
        .title-gradient {
          background: linear-gradient(135deg, #d63384, #6f42c1, #d63384);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          text-shadow: 0 4px 8px rgba(214, 51, 132, 0.2);
        }
        
        .service-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 182, 193, 0.3);
          border-radius: 20px;
          transition: all 0.4s ease;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .service-card:hover::before {
          left: 100%;
        }
        
        .service-card:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.3);
          border-color: #d63384;
        }
        
        .service-icon {
          font-size: 3rem;
          margin-bottom: 15px;
          display: inline-block;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .service-title {
          color: #d63384;
          font-weight: 600;
          font-size: 1.4rem;
          margin-bottom: 15px;
        }
        
        .service-description {
          color: #6c757d;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 15px;
        }
        
        .service-price {
          background: linear-gradient(135deg, #d63384, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 1.2rem;
          margin-bottom: 15px;
        }
        
        .feature-badge {
          display: inline-block;
          background: rgba(214, 51, 132, 0.1);
          color: #d63384;
          padding: 4px 12px;
          border-radius: 15px;
          font-size: 0.8rem;
          margin: 2px;
          border: 1px solid rgba(214, 51, 132, 0.2);
          transition: all 0.3s ease;
        }
        
        .feature-badge:hover {
          background: rgba(214, 51, 132, 0.2);
          transform: scale(1.05);
        }
        
        .expanded-card {
          border-color: #d63384 !important;
          box-shadow: 0 25px 50px rgba(214, 51, 132, 0.2) !important;
          transform: scale(1.02);
        }
        
        .expanded-content {
          max-height: 200px;
          opacity: 1;
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .collapsed-content {
          max-height: 0;
          opacity: 0;
          transition: all 0.4s ease;
          overflow: hidden;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #d63384, #6f42c1);
          border: none;
          border-radius: 15px;
          padding: 12px 25px;
          color: white;
          font-weight: 600;
          font-size: 14px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(214, 51, 132, 0.3);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px rgba(214, 51, 132, 0.4);
          color: white;
        }
        
        .hero-section {
          text-align: center;
          padding: 60px 0;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          margin-bottom: 40px;
          border-radius: 25px;
          margin: 20px;
        }
        
        .hero-subtitle {
          color: #6f42c1;
          font-size: 1.2rem;
          font-weight: 500;
          margin-bottom: 30px;
        }
        
        .stats-container {
          display: flex;
          justify-content: center;
          gap: 40px;
          margin-top: 30px;
        }
        
        .stat-item {
          text-align: center;
        }
        
        .stat-number {
          font-size: 2.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #d63384, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .stat-label {
          color: #6c757d;
          font-size: 0.9rem;
          margin-top: 5px;
        }
        
        @media (max-width: 768px) {
          .stats-container {
            flex-direction: column;
            gap: 20px;
          }
          
          .hero-section {
            padding: 40px 20px;
          }
          
          .service-card {
            margin: 10px;
          }
        }
      `}</style>

      <div className="sakura-container">
        <div className="sakura-petals">
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
          <div className="petal"></div>
        </div>
        
        <div className="floating-sakura">🌸</div>
        <div className="floating-sakura">🍣</div>
        <div className="floating-sakura">🌸</div>
        <div className="floating-sakura">🍱</div>
        
        <div className="main-content">
          <div className="container">
            {/* Hero Section */}
            <div className="hero-section">
              <h1 className="title-gradient mb-3" style={{fontSize: '3.5rem'}}>
                🌸 Sakura Japanese Restaurant 🌸
              </h1>
              <p className="hero-subtitle">
                สัมผัสรสชาติอาหารญี่ปุ่นต้นตำรับ ในบรรยากาศสไตล์ญี่ปุ่นแท้<br/>
                วัตถุดิบคุณภาพ ความสดใหม่ทุกเมนู ด้วยฝีมือเชฟมืออาชีพ
              </p>
              
              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">ปีประสบการณ์</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100+</div>
                  <div className="stat-label">เมนูพิเศษ</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">★ 4.8</div>
                  <div className="stat-label">คะแนนรีวิว</div>
                </div>
              </div>
            </div>

            {/* Menu Grid */}
            <div className="row">
              {menus.map((menu) => (
                <div key={menu.id} className="col-lg-6 col-md-6 col-sm-12 mb-4">
                  <div 
                    className={`service-card p-4 h-100 ${selectedMenu?.id === menu.id ? 'expanded-card' : ''}`}
                    onClick={() => handleMenuClick(menu)}
                    style={{
                      boxShadow: selectedMenu?.id === menu.id 
                        ? '0 25px 50px rgba(214, 51, 132, 0.2)' 
                        : '0 10px 20px rgba(255, 182, 193, 0.2)'
                    }}
                  >
                    <div className="text-center">
                      <div className="service-icon">{menu.icon}</div>
                      <h3 className="service-title">{menu.title}</h3>
                      <p className="service-description">{menu.description}</p>
                      <div className="service-price">{menu.price}</div>
                    </div>
                    
                    <div className={selectedMenu?.id === menu.id ? 'expanded-content' : 'collapsed-content'}>
                      <hr style={{border: '1px solid rgba(214, 51, 132, 0.2)', margin: '20px 0'}} />
                      <div className="mb-3">
                        <h6 style={{color: '#d63384', fontWeight: '600', marginBottom: '10px'}}>
                          🍽️ เมนูแนะนำ:
                        </h6>
                        <div>
                          {menu.features.map((feature, index) => (
                            <span key={index} className="feature-badge">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="text-center mt-3">
                        <button className="cta-button">
                          🍱 สั่งเลย
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-center mt-3">
                      <small style={{color: '#6c757d'}}>
                        {selectedMenu?.id === menu.id ? '👆 คลิกเพื่อปิด' : '👆 คลิกเพื่อดูรายละเอียด'}
                      </small>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="text-center mt-5">
              <div className="hero-section" style={{padding: '40px'}}>
                <h2 className="title-gradient mb-3" style={{fontSize: '2.5rem'}}>
                  🌺 พร้อมลิ้มรสอาหารญี่ปุ่นแท้? 🌺
                </h2>
                <p style={{color: '#6f42c1', fontSize: '1.1rem', marginBottom: '30px'}}>
                  จองโต๊ะวันนี้ หรือสั่งอาหารเดลิเวอรี่ถึงบ้าน
                </p>
                <div style={{display: 'flex', justifyContent: 'center', gap: '15px', flexWrap: 'wrap'}}>
                  <button className="cta-button" style={{padding: '15px 30px', fontSize: '16px'}}>
                    📞 จองโต๊ะ
                  </button>
                  <button className="cta-button" style={{padding: '15px 30px', fontSize: '16px'}}>
                    🛵 เดลิเวอรี่
                  </button>
                  <button className="cta-button" style={{padding: '15px 30px', fontSize: '16px'}}>
                    🎁 โปรโมชั่น
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
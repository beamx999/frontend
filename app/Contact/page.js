'use client'
import { useState } from 'react'

export default function RestaurantContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // Random success/fail for demo (80% success rate)
      const isSuccess = Math.random() > 0.2
      
      if (isSuccess) {
        showSuccessAlert()
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          date: '',
          time: '',
          guests: '',
          message: ''
        })
      } else {
        showErrorAlert()
      }
    } catch (error) {
      showErrorAlert()
    } finally {
      setIsSubmitting(false)
    }
  }

  const showSuccessAlert = () => {
    const alertDiv = document.createElement('div')
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
      " onclick="this.remove()">
        <div style="
          background: white;
          border-radius: 25px;
          padding: 40px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: scaleIn 0.3s ease;
          position: relative;
        " onclick="event.stopPropagation()">
          <div style="
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #28a745, #20c997);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            animation: checkmark 0.5s ease 0.3s both;
          ">✓</div>
          <h2 style="
            color: #28a745;
            font-size: 2rem;
            margin-bottom: 15px;
            font-family: 'Noto Sans Thai', sans-serif;
            font-weight: 700;
          ">จองโต๊ะสำเร็จ! 🎉</h2>
          <p style="
            color: #6c757d;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 25px;
            font-family: 'Noto Sans Thai', sans-serif;
          ">
            เราได้รับการจองของคุณแล้ว<br/>
            เราจะยืนยันการจองภายใน 1 ชั่วโมง<br/>
            ขอบคุณที่เลือกใช้บริการร้านของเรา 🌸
          </p>
          <button onclick="this.closest('div[onclick]').remove()" style="
            background: linear-gradient(135deg, #28a745, #20c997);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Noto Sans Thai', sans-serif;
            box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 30px rgba(40, 167, 69, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 20px rgba(40, 167, 69, 0.3)'">
            เรียบร้อย
          </button>
        </div>
      </div>
      <style>
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes checkmark {
          from { transform: scale(0) rotate(0deg); }
          to { transform: scale(1) rotate(360deg); }
        }
      </style>
    `
    document.body.appendChild(alertDiv)
  }

  const showErrorAlert = () => {
    const alertDiv = document.createElement('div')
    alertDiv.innerHTML = `
      <div style="
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        animation: fadeIn 0.3s ease;
      " onclick="this.remove()">
        <div style="
          background: white;
          border-radius: 25px;
          padding: 40px;
          max-width: 500px;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: shake 0.5s ease;
          position: relative;
        " onclick="event.stopPropagation()">
          <div style="
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #dc3545, #e83e8c);
            border-radius: 50%;
            margin: 0 auto 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
            color: white;
          ">✕</div>
          <h2 style="
            color: #dc3545;
            font-size: 2rem;
            margin-bottom: 15px;
            font-family: 'Noto Sans Thai', sans-serif;
            font-weight: 700;
          ">เกิดข้อผิดพลาด 😢</h2>
          <p style="
            color: #6c757d;
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 25px;
            font-family: 'Noto Sans Thai', sans-serif;
          ">
            ขออภัย ไม่สามารถทำการจองได้<br/>
            กรุณาลองใหม่อีกครั้งหรือติดต่อเราโดยตรง<br/>
            📞 02-123-4567
          </p>
          <button onclick="this.closest('div[onclick]').remove()" style="
            background: linear-gradient(135deg, #dc3545, #e83e8c);
            color: white;
            border: none;
            padding: 15px 40px;
            border-radius: 50px;
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            font-family: 'Noto Sans Thai', sans-serif;
            box-shadow: 0 8px 20px rgba(220, 53, 69, 0.3);
            transition: all 0.3s ease;
          " onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 12px 30px rgba(220, 53, 69, 0.4)'" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='0 8px 20px rgba(220, 53, 69, 0.3)'">
            ลองใหม่อีกครั้ง
          </button>
        </div>
      </div>
      <style>
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
      </style>
    `
    document.body.appendChild(alertDiv)
  }

  const contactInfo = [
    {
      icon: '📍',
      title: 'ที่ตั้งร้าน',
      content: '123 ถนนสุขุมวิท แขวงคลองเตย<br/>กรุงเทพมหานคร 10110',
      color: '#d63384'
    },
    {
      icon: '📞',
      title: 'โทรศัพท์',
      content: '02-123-4567<br/>099-999-9999',
      color: '#6f42c1'
    },
    {
      icon: '📧',
      title: 'อีเมล',
      content: 'info@sakurarestaurant.com<br/>booking@sakurarestaurant.com',
      color: '#e83e8c'
    }
  ]

  const socialMedia = [
    { icon: '📘', name: 'Facebook', color: '#3b5998', url: '#' },
    { icon: '📷', name: 'Instagram', color: '#e4405f', url: '#' },
    { icon: '🐦', name: 'Twitter', color: '#1da1f2', url: '#' },
    { icon: '🎬', name: 'TikTok', color: '#000000', url: '#' },
    { icon: '💼', name: 'LinkedIn', color: '#0077b5', url: '#' },
    { icon: '💚', name: 'Line', color: '#00b900', url: '#' }
  ]

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap');
        
        .sakura-container {
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #ffe4e1 50%, #fdf2f8 75%, #fef7ff 100%);
          position: relative;
          overflow-x: hidden;
          padding-bottom: 0;
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
        .floating-sakura:nth-child(6) { top: 50%; left: 2%; animation-delay: 3s; }
        .floating-sakura:nth-child(7) { top: 60%; right: 2%; animation-delay: 5s; }
        
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
        
        .contact-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(15px);
          border: 2px solid rgba(255, 182, 193, 0.3);
          border-radius: 25px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
          transition: all 0.4s ease;
        }
        
        .contact-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #ffb3d9, #ff99cc, #ffb3d9);
          border-radius: 25px;
          z-index: -1;
        }
        
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px rgba(255, 182, 193, 0.3);
        }
        
        .form-input {
          background: rgba(255, 240, 245, 0.8);
          border: 2px solid rgba(255, 182, 193, 0.3);
          border-radius: 15px;
          padding: 15px 20px;
          font-family: 'Noto Sans Thai', sans-serif;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(255, 182, 193, 0.1);
          font-size: 16px;
        }
        
        .form-input:focus {
          outline: none;
          border-color: #d63384;
          background: rgba(255, 240, 245, 1);
          box-shadow: 0 0 20px rgba(214, 51, 132, 0.2);
          transform: translateY(-2px);
        }
        
        .form-input::placeholder {
          color: #d63384;
          font-weight: 400;
        }
        
        .submit-btn {
          background: linear-gradient(135deg, #d63384, #6f42c1);
          border: none;
          border-radius: 20px;
          padding: 18px 40px;
          color: white;
          font-weight: 600;
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 18px;
          transition: all 0.4s ease;
          box-shadow: 0 10px 20px rgba(214, 51, 132, 0.3);
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 15px 30px rgba(214, 51, 132, 0.4);
        }
        
        .contact-info-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 182, 193, 0.2);
          border-radius: 20px;
          padding: 30px 20px;
          text-align: center;
          transition: all 0.3s ease;
          height: 100%;
          position: relative;
          overflow: hidden;
          margin-bottom: 20px;
        }
        
        .contact-info-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.5s;
        }
        
        .contact-info-card:hover::before {
          left: 100%;
        }
        
        .contact-info-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.3);
          border-color: #d63384;
        }
        
        .contact-icon {
          font-size: 2.8rem;
          margin-bottom: 15px;
          display: inline-block;
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        .contact-title {
          font-weight: 600;
          font-size: 1.2rem;
          margin-bottom: 12px;
          color: #d63384;
        }
        
        .contact-content {
          color: #6c757d;
          line-height: 1.6;
          font-size: 0.9rem;
        }
        
        .social-media-container {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 30px;
        }
        
        .social-btn {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .social-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          transform: scale(0);
          transition: transform 0.3s ease;
        }
        
        .social-btn:hover::before {
          transform: scale(1);
        }
        
        .social-btn:hover {
          transform: translateY(-5px) scale(1.1);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }
        
        .hero-section {
          text-align: center;
          padding: 80px 0 60px;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 25px;
          margin: 20px 20px 40px;
          position: relative;
          overflow: hidden;
        }
        
        .hero-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="%23ff99cc" opacity="0.3"/><circle cx="80" cy="40" r="1.5" fill="%23ffb3d9" opacity="0.4"/><circle cx="40" cy="80" r="1" fill="%23ff99cc" opacity="0.3"/><circle cx="70" cy="70" r="2.5" fill="%23ffb3d9" opacity="0.2"/></svg>');
          animation: sparkle 3s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        
        .working-hours-banner {
          background: linear-gradient(135deg, #20c997, #17a2b8);
          color: white;
          padding: 15px 30px;
          border-radius: 50px;
          display: inline-block;
          margin: 20px auto;
          text-align: center;
          font-weight: 600;
          box-shadow: 0 8px 20px rgba(32, 201, 151, 0.3);
          animation: pulse 2s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @media (max-width: 768px) {
          .hero-section {
            padding: 60px 20px 40px;
            margin: 10px;
          }
          
          .contact-card {
            margin: 10px;
            border-radius: 20px;
          }
          
          .social-media-container {
            gap: 10px;
          }
          
          .social-btn {
            width: 50px;
            height: 50px;
            font-size: 1.3rem;
          }
          
          .working-hours-banner {
            font-size: 0.9rem;
            padding: 12px 20px;
          }
        }
        
        .contact-info-wrapper {
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 15px;
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
        <div className="floating-sakura">🌸</div>
        <div className="floating-sakura">🍜</div>
        
        <div className="main-content">
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            {/* Hero Section */}
            <div className="hero-section">
              <h1 className="title-gradient mb-4" style={{fontSize: '4rem'}}>
                🌸 ติดต่อเรา 🌸
              </h1>
              <p style={{color: '#6f42c1', fontSize: '1.3rem', fontWeight: '500', lineHeight: '1.8'}}>
                เรายินดีให้บริการและรับจองโต๊ะล่วงหน้า<br/>
                พร้อมมอบประสบการณ์อาหารญี่ปุ่นต้นตำรับที่ดีที่สุดให้กับคุณ
              </p>
              
              {/* Working Hours Banner */}
              <div className="working-hours-banner">
                🕐 เวลาเปิดทำการ: จันทร์-ศุกร์ 11:00-22:00 | เสาร์-อาทิตย์ 10:00-23:00
              </div>
              
              <div className="social-media-container">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className="social-btn"
                    style={{backgroundColor: social.color}}
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div style={{display: 'flex', gap: '30px', flexWrap: 'wrap'}}>
              {/* Reservation Form */}
              <div style={{flex: '2', minWidth: '300px'}}>
                <div className="contact-card p-5">
                  <h2 className="title-gradient mb-4" style={{fontSize: '2.5rem', textAlign: 'center'}}>
                    🍱 จองโต๊ะ
                  </h2>
                  
                  <div onSubmit={handleSubmit}>
                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
                      <input
                        type="text"
                        name="name"
                        placeholder="🌸 ชื่อ-นามสกุล"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="📧 อีเมล"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="📞 เบอร์โทรศัพท์"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      <input
                        type="number"
                        name="guests"
                        placeholder="👥 จำนวนท่าน"
                        value={formData.guests}
                        onChange={handleInputChange}
                        className="form-input"
                        min="1"
                        max="20"
                        required
                      />
                    </div>

                    <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', marginBottom: '20px'}}>
                      <input
                        type="date"
                        name="date"
                        placeholder="📅 วันที่"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                      <input
                        type="time"
                        name="time"
                        placeholder="🕐 เวลา"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>

                    <div className="mb-4">
                      <textarea
                        name="message"
                        placeholder="💭 ข้อความเพิ่มเติม (อาหารพิเศษ, แพ้อาหาร, โอกาสพิเศษ...)"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-input"
                        rows="4"
                        style={{resize: 'vertical', width: '100%'}}
                      />
                    </div>

                    <div style={{textAlign: 'center'}}>
                      <button 
                        type="submit" 
                        className="submit-btn" 
                        onClick={handleSubmit}
                        disabled={isSubmitting}
                        style={{
                          opacity: isSubmitting ? 0.7 : 1,
                          cursor: isSubmitting ? 'not-allowed' : 'pointer'
                        }}
                      >
                        {isSubmitting ? '⏳ กำลังจอง...' : '🍣 ยืนยันการจอง 🍣'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div style={{flex: '1', minWidth: '280px'}}>
                <div className="contact-info-wrapper">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="contact-info-card" style={{flex: '1'}}>
                      <div className="contact-icon" style={{color: info.color}}>
                        {info.icon}
                      </div>
                      <h4 className="contact-title">{info.title}</h4>
                      <div 
                        className="contact-content"
                        dangerouslySetInnerHTML={{__html: info.content}}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Additional Info Section */}
            <div style={{marginTop: '50px'}}>
              <div className="contact-card p-5 text-center">
                <h3 className="title-gradient mb-4" style={{fontSize: '2.2rem'}}>
                  🌺 ทำไมต้องเลือกเรา? 🌺
                </h3>
                <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px'}}>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>🍣</div>
                    <h5 style={{color: '#d63384'}}>สดใหม่ทุกวัน</h5>
                    <p style={{color: '#6c757d', fontSize: '0.9rem'}}>วัตถุดิบคุณภาพนำเข้า</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>👨‍🍳</div>
                    <h5 style={{color: '#d63384'}}>เชฟมืออาชีพ</h5>
                    <p style={{color: '#6c757d', fontSize: '0.9rem'}}>15+ ปี ประสบการณ์ญี่ปุ่น</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>🏮</div>
                    <h5 style={{color: '#d63384'}}>บรรยากาศญี่ปุ่น</h5>
                    <p style={{color: '#6c757d', fontSize: '0.9rem'}}>สไตล์ออเทนติก</p>
                  </div>
                  <div>
                    <div style={{fontSize: '3rem', marginBottom: '10px'}}>⭐</div>
                    <h5 style={{color: '#d63384'}}>รีวิว 4.8/5</h5>
                    <p style={{color: '#6c757d', fontSize: '0.9rem'}}>2000+ รีวิวจากลูกค้า</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
'use client'
import { useState } from 'react'

export default function Register() {
  const [username, setUsername] = useState('')
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')
  const [password, setPassword] = useState('')
  const [showPopup, setShowPopup] = useState(false)
  const [popupType, setPopupType] = useState('') // 'success', 'error', 'duplicate'
  const [popupMessage, setPopupMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch('https://backend-theta-henna.vercel.app/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({ 
          username,
          firstname,
          fullname,
          lastname,
          address,
          sex,
          birthday,
          password
        }),
      })
      
      const result = await res.json();
      console.log(result);
      
      if (res.ok) {
        setPopupType('success')
        setPopupMessage('บันทึกข้อมูลเรียบร้อยแล้ว')
        setShowPopup(true)
        
        // Reset form
        setTimeout(() => {
          setUsername('')
          setFirstname('')
          setFullname('')
          setLastname('')
          setAddress('')
          setSex('')
          setBirthday('')
          setPassword('')
          setShowPopup(false)
          // Redirect to login
          // window.location.href = '/Login'
        }, 3000)
      } else {
        // Check if username already exists
        if (result.message && result.message.includes('username')) {
          setPopupType('duplicate')
          setPopupMessage('Username นี้มีผู้ใช้งานแล้ว')
        } else {
          setPopupType('error')
          setPopupMessage('เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง')
        }
        setShowPopup(true)
        setTimeout(() => setShowPopup(false), 3000)
      }
    } catch (error) {
      console.error('Error:', error);
      setPopupType('error')
      setPopupMessage('ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้')
      setShowPopup(true)
      setTimeout(() => setShowPopup(false), 3000)
    }
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap');
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        .sakura-container {
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #ffe4e1 50%, #fdf2f8 75%, #fef7ff 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
          padding: 20px;
        }
        
        .sakura-petals {
          position: absolute;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
          pointer-events: none;
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
        
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          position: relative;
          z-index: 10;
        }
        
        .form-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 182, 193, 0.3);
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
          border-radius: 25px;
          position: relative;
          padding: 40px;
          max-width: 600px;
          width: 100%;
          font-family: 'Noto Sans Thai', sans-serif;
        }
        
        .form-card::before {
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
        
        .title-gradient {
          background: linear-gradient(135deg, #d63384, #6f42c1, #d63384);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 700;
          font-size: 2.5rem;
          margin-bottom: 15px;
          text-align: center;
        }
        
        .subtitle {
          color: #6f42c1;
          font-weight: 500;
          font-size: 1.1rem;
          text-align: center;
          margin-bottom: 30px;
        }
        
        .form-group {
          margin-bottom: 20px;
        }
        
        .form-row {
          display: flex;
          gap: 15px;
          margin-bottom: 20px;
        }
        
        .form-col {
          flex: 1;
        }
        
        .form-input {
          width: 100%;
          background: rgba(255, 240, 245, 0.8);
          border: 2px solid rgba(255, 182, 193, 0.3);
          border-radius: 15px;
          padding: 12px 18px;
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 8px rgba(255, 182, 193, 0.1);
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
        
        textarea.form-input {
          resize: vertical;
          min-height: 80px;
        }
        
        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #d63384, #6f42c1);
          border: none;
          border-radius: 15px;
          padding: 15px 30px;
          color: white;
          font-weight: 600;
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 16px;
          transition: all 0.3s ease;
          box-shadow: 0 8px 16px rgba(214, 51, 132, 0.3);
          position: relative;
          overflow: hidden;
          cursor: pointer;
          margin-top: 10px;
        }
        
        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .submit-btn:hover::before {
          left: 100%;
        }
        
        .submit-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 24px rgba(214, 51, 132, 0.4);
        }
        
        .submit-btn:active {
          transform: translateY(-1px);
        }
        
        .login-link {
          text-align: center;
          margin-top: 20px;
          color: #6f42c1;
          font-size: 14px;
        }
        
        .login-link a {
          color: #d63384;
          text-decoration: none;
          font-weight: 600;
          margin-left: 5px;
        }
        
        .login-link a:hover {
          text-decoration: underline;
        }
        
        .popup-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          animation: fadeIn 0.3s ease;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            transform: translateY(-50px);
            opacity: 0;
          }
          to { 
            transform: translateY(0);
            opacity: 1;
          }
        }
        
        .popup-card {
          background: white;
          border-radius: 25px;
          padding: 40px;
          max-width: 400px;
          width: 90%;
          text-align: center;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          animation: slideDown 0.4s ease;
          position: relative;
          border: 3px solid;
        }
        
        .popup-card.success {
          border-color: #d63384;
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%);
        }
        
        .popup-card.error {
          border-color: #dc3545;
          background: linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%);
        }
        
        .popup-card.duplicate {
          border-color: #ffc107;
          background: linear-gradient(135deg, #fffbf0 0%, #fff8e1 100%);
        }
        
        .popup-icon {
          font-size: 64px;
          margin-bottom: 20px;
          animation: bounce 0.6s ease;
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        .popup-title {
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 15px;
        }
        
        .popup-title.success {
          background: linear-gradient(135deg, #d63384, #6f42c1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .popup-title.error {
          color: #dc3545;
        }
        
        .popup-title.duplicate {
          color: #ff8800;
        }
        
        .popup-message {
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 16px;
          color: #6c757d;
          margin-bottom: 10px;
        }
        
        .popup-submessage {
          font-family: 'Noto Sans Thai', sans-serif;
          font-size: 14px;
          color: #999;
        }
        
        .floating-sakura {
          position: absolute;
          font-size: 24px;
          animation: float 6s ease-in-out infinite;
          pointer-events: none;
        }
        
        .floating-sakura:nth-child(1) {
          top: 10%;
          left: 5%;
          animation-delay: 0s;
        }
        
        .floating-sakura:nth-child(2) {
          top: 20%;
          right: 5%;
          animation-delay: 2s;
        }
        
        .floating-sakura:nth-child(3) {
          bottom: 10%;
          left: 8%;
          animation-delay: 4s;
        }
        
        .floating-sakura:nth-child(4) {
          bottom: 20%;
          right: 8%;
          animation-delay: 1s;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-20px) rotate(5deg); }
          66% { transform: translateY(-10px) rotate(-5deg); }
        }
        
        @media (max-width: 768px) {
          .form-row {
            flex-direction: column;
          }
          
          .title-gradient {
            font-size: 2rem;
          }
          
          .form-card {
            padding: 30px 20px;
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
        <div className="floating-sakura">🌺</div>
        <div className="floating-sakura">🌸</div>
        <div className="floating-sakura">🌺</div>
        
        <div className="container">
          <div className="form-card">
            <h1 className="title-gradient">
              🌸 สมัครสมาชิก 🌸
            </h1>
            <p className="subtitle">
              เข้าร่วมกับเราในการเดินทางที่สวยงาม
            </p>
            
            <div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="👤 Username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <input
                  type="password"
                  placeholder="🔐 Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <select 
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)} 
                  className="form-input" 
                  required
                >
                  <option value="">🌸 เลือกคำนำหน้าชื่อ</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>

              <div className="form-row">
                <div className="form-col">
                  <input
                    type="text"
                    placeholder="🌺 ชื่อ"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-col">
                  <input
                    type="text"
                    placeholder="🌸 นามสกุล"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-input"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <select 
                  value={sex}
                  onChange={(e) => setSex(e.target.value)} 
                  className="form-input" 
                  required
                >
                  <option value="">🌺 เลือกเพศ</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div className="form-group">
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="form-input"
                  required
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="🏠 ที่อยู่"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-input"
                  required
                />
              </div>
              
              <button onClick={handleSubmit} className="submit-btn">
                🌸 สมัครสมาชิก 🌸
              </button>
            </div>

            <div className="login-link">
              มีบัญชีอยู่แล้ว? 
              <a href="/Login">เข้าสู่ระบบ</a>
            </div>
          </div>
        </div>

        {/* Popup */}
        {showPopup && (
          <div className="popup-overlay">
            <div className={`popup-card ${popupType}`}>
              {popupType === 'success' && (
                <>
                  <div className="popup-icon">🌸</div>
                  <h2 className="popup-title success">สำเร็จ!</h2>
                  <p className="popup-message">{popupMessage}</p>
                  <p className="popup-submessage">ยินดีต้อนรับสู่ครอบครัวของเรา</p>
                </>
              )}
              {popupType === 'error' && (
                <>
                  <div className="popup-icon">❌</div>
                  <h2 className="popup-title error">เกิดข้อผิดพลาด</h2>
                  <p className="popup-message">{popupMessage}</p>
                  <p className="popup-submessage">กรุณาตรวจสอบข้อมูลและลองใหม่อีกครั้ง</p>
                </>
              )}
              {popupType === 'duplicate' && (
                <>
                  <div className="popup-icon">⚠️</div>
                  <h2 className="popup-title duplicate">ไม่สามารถสมัครได้</h2>
                  <p className="popup-message">{popupMessage}</p>
                  <p className="popup-submessage">กรุณาเลือก Username อื่น</p>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  )
}
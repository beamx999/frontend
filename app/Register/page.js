'use client'
import { useState } from 'react'
import Swal from 'sweetalert2'
import { useRouter } from 'next/navigation'

export default function Register() {
  const router = useRouter()
  const [firstname, setFirstname] = useState('')
  const [fullname, setFullname] = useState('')
  const [lastname, setLastname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [sex, setSex] = useState('')
  const [birthday, setBirthday] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('https://backend-nextjs-virid.vercel.app/api/users', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify({ 
          firstname, 
          fullname, 
          lastname, 
          username, 
          password,
          address,
          sex,
          birthday
        }),
      })
      const result = await res.json();
      console.log(result);
      
      if (res.ok) {
        Swal.fire({
          icon: 'success',
          title: '<div style="color: #d63384; font-family: \'Noto Sans Thai\', sans-serif;"><h3>🌸 บันทึกข้อมูลเรียบร้อยแล้ว 🌸</h3></div>',
          html: '<p style="color: #6f42c1; font-family: \'Noto Sans Thai\', sans-serif;">ยินดีต้อนรับสู่ครอบครัวของเรา</p>',
          showConfirmButton: false,
          timer: 3000,
          background: 'linear-gradient(135deg, #ffeef8 0%, #fff0f5 100%)',
          customClass: {
            popup: 'sakura-popup'
          }
        }).then(function () {
          router.push('/Login')
        });
        
        // Reset form
        setFirstname('')
        setFullname('')
        setLastname('')
        setUsername('')
        setPassword('')
        setAddress('')
        setSex('')
        setBirthday('')
      } else {
        Swal.fire({
          icon: 'error',
          title: '<div style="color: #dc3545; font-family: \'Noto Sans Thai\', sans-serif;"><h3>❌ เกิดข้อผิดพลาด</h3></div>',
          html: '<p style="color: #6c757d; font-family: \'Noto Sans Thai\', sans-serif;">กรุณาลองใหม่อีกครั้ง</p>',
          confirmButtonText: 'ตกลง',
          confirmButtonColor: '#dc3545',
          background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)',
          customClass: {
            popup: 'error-popup'
          }
        })
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: '<div style="color: #dc3545; font-family: \'Noto Sans Thai\', sans-serif;"><h3>🔌 ข้อผิดพลาดเครือข่าย</h3></div>',
        html: '<p style="color: #6c757d; font-family: \'Noto Sans Thai\', sans-serif;">ไม่สามารถเชื่อมต่อเซิร์ฟเวอร์ได้</p>',
        confirmButtonText: 'ลองใหม่',
        confirmButtonColor: '#dc3545',
        background: 'linear-gradient(135deg, #fff5f5 0%, #ffe6e6 100%)'
      })
    }
  }

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Thai:wght@300;400;500;600;700&display=swap');
        
        .sakura-container {
          background: linear-gradient(135deg, #ffeef8 0%, #fff0f5 25%, #ffe4e1 50%, #fdf2f8 75%, #fef7ff 100%);
          min-height: 100vh;
          position: relative;
          overflow: hidden;
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
        
        .form-card {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 182, 193, 0.3);
          box-shadow: 0 20px 40px rgba(255, 182, 193, 0.2);
          border-radius: 25px;
          position: relative;
          z-index: 10;
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
          text-shadow: 0 4px 8px rgba(214, 51, 132, 0.2);
        }
        
        .form-input {
          background: rgba(255, 240, 245, 0.8);
          border: 2px solid rgba(255, 182, 193, 0.3);
          border-radius: 15px;
          padding: 12px 18px;
          font-family: 'Noto Sans Thai', sans-serif;
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
        
        .submit-btn {
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
        
        .floating-sakura {
          position: absolute;
          font-size: 24px;
          animation: float 6s ease-in-out infinite;
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
        
        .row {
          display: flex;
          gap: 15px;
        }
        
        .col-md-6 {
          flex: 1;
        }
        
        @media (max-width: 768px) {
          .row {
            flex-direction: column;
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
        
        <div className="container d-flex justify-content-center align-items-center" style={{minHeight: '100vh'}}>
          <div className="form-card p-5" style={{maxWidth: '600px', width: '100%', margin: '20px'}}>
            <div className="text-center mb-4">
              <h1 className="title-gradient mb-3" style={{fontSize: '2.5rem'}}>
                🌸 สมัครสมาชิก 🌸
              </h1>
              <p style={{color: '#6f42c1', fontWeight: '500', fontSize: '1.1rem'}}>
                เข้าร่วมกับเราในการเดินทางที่สวยงาม
              </p>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <select 
                  name="firstname" 
                  onChange={(e) => setFirstname(e.target.value)} 
                  className="form-control form-input w-100" 
                  required
                  style={{fontSize: '16px'}}
                >
                  <option value="">🌸 เลือกคำนำหน้าชื่อ</option>
                  <option value="นาย">นาย</option>
                  <option value="นาง">นาง</option>
                  <option value="นางสาว">นางสาว</option>
                </select>
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="🌺 ชื่อ"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                    className="form-control form-input w-100"
                    required
                    style={{fontSize: '16px'}}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="🌸 นามสกุล"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control form-input w-100"
                    required
                    style={{fontSize: '16px'}}
                  />
                </div>
              </div>

              <div className="mb-3">
                <select 
                  name="sex" 
                  onChange={(e) => setSex(e.target.value)} 
                  className="form-control form-input w-100" 
                  required
                  style={{fontSize: '16px'}}
                >
                  <option value="">🌺 เลือกเพศ</option>
                  <option value="ชาย">ชาย</option>
                  <option value="หญิง">หญิง</option>
                  <option value="อื่นๆ">อื่นๆ</option>
                </select>
              </div>

              <div className="mb-3">
                <input
                  type="date"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                  className="form-control form-input w-100"
                  required
                  style={{fontSize: '16px'}}
                />
              </div>

              <div className="mb-3">
                <textarea
                  placeholder="🏠 ที่อยู่"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="form-control form-input w-100"
                  rows="3"
                  required
                  style={{fontSize: '16px', resize: 'vertical'}}
                />
              </div>

              <div className="row mb-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    placeholder="👤 Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control form-input w-100"
                    required
                    style={{fontSize: '16px'}}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    placeholder="🔐 Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control form-input w-100"
                    required
                    style={{fontSize: '16px'}}
                  />
                </div>
              </div>
              
              <div className="text-center mt-4">
                <button
                  type="submit"
                  className="submit-btn w-100"
                >
                  🌸 สมัครสมาชิก 🌸
                </button>
              </div>
            </form>

            <div className="text-center mt-4">
              <p style={{color: '#6f42c1', fontSize: '14px'}}>
                มีบัญชีอยู่แล้ว? 
                <a href="/Login" style={{color: '#d63384', textDecoration: 'none', fontWeight: '600', marginLeft: '5px'}}>
                  เข้าสู่ระบบ
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
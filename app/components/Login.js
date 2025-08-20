"use client";

import React, { useState, useEffect } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    remember: false
  });

  const [errors, setErrors] = useState({
    username: '',
    password: ''
  });

  // Load SweetAlert2
  useEffect(() => {
    // Load SweetAlert2 CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.32/sweetalert2.min.css';
    document.head.appendChild(link);

    // Load SweetAlert2 JS
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/limonte-sweetalert2/11.7.32/sweetalert2.all.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const showSuccessAlert = () => {
    if (window.Swal) {
      window.Swal.fire({
        title: 'สำเร็จ!',
        text: 'เข้าสู่ระบบสำเร็จ!',
        icon: 'success',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#DC143C',
        background: 'rgba(20, 0, 0, 0.95)',
        color: '#ffffff',
        customClass: {
          popup: 'swal-dark-theme'
        }
      });
    } else {
      alert('เข้าสู่ระบบสำเร็จ!');
    }
  };

  const showErrorAlert = (errorMessages) => {
    if (window.Swal) {
      const errorList = Object.values(errorMessages).join('<br>');
      window.Swal.fire({
        title: 'ข้อมูลไม่ถูกต้อง!',
        html: errorList,
        icon: 'error',
        confirmButtonText: 'ตกลง',
        confirmButtonColor: '#DC143C',
        background: 'rgba(20, 0, 0, 0.95)',
        color: '#ffffff',
        customClass: {
          popup: 'swal-dark-theme'
        }
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    let newErrors = {};
    
    // Validate username
    if (!formData.username.trim()) {
      newErrors.username = 'กรุณากรอกชื่อผู้ใช้งาน';
    } else if (formData.username.length < 3) {
      newErrors.username = 'ชื่อผู้ใช้งานต้องมีอย่างน้อย 3 ตัวอักษร';
    }
    
    // Validate password
    if (!formData.password.trim()) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน';
    } else if (formData.password.length < 6) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
    }
    
    setErrors(newErrors);
    
    // If no errors, proceed with login
    if (Object.keys(newErrors).length === 0) {
      console.log('Login data:', formData);
      showSuccessAlert();
    } else {
      showErrorAlert(newErrors);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #1a0000 0%, #4d0000 25%, #800000 50%, #660000 75%, #330000 100%)',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
      padding: '2rem'
    }}>
      {/* Bootstrap CSS */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      {/* Custom CSS */}
      <style jsx>{`
        .login-card {
          background: rgba(20, 0, 0, 0.9);
          backdrop-filter: blur(15px);
          border: 1px solid rgba(139, 0, 0, 0.3);
          border-radius: 20px;
          box-shadow: 
            0 25px 50px rgba(139, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          overflow: hidden;
          transition: all 0.4s ease;
        }
        
        .login-card:hover {
          transform: translateY(-8px);
          box-shadow: 
            0 35px 60px rgba(139, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        
        .login-header {
          background: linear-gradient(135deg, #8B0000 0%, #DC143C 30%, #FF0000 70%, #B22222 100%);
          color: white;
          padding: 2rem;
          text-align: center;
          box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.2);
        }
        
        .login-header h2 {
          margin: 0;
          font-weight: 600;
          font-size: 1.8rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .login-header p {
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
          font-size: 0.95rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
        }
        
        .form-control {
          background: rgba(40, 0, 0, 0.7);
          border: 2px solid rgba(139, 0, 0, 0.4);
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: #ffffff;
          transition: all 0.3s ease;
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        
        .form-control::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .form-control:focus {
          background: rgba(50, 0, 0, 0.8);
          border-color: #DC143C;
          box-shadow: 
            0 0 0 0.2rem rgba(220, 20, 60, 0.25),
            inset 2px 2px 5px rgba(0, 0, 0, 0.3);
        }
        
        .form-label {
          font-weight: 500;
          color: #ffffff;
          margin-bottom: 0.5rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .btn-login {
          background: linear-gradient(135deg, #8B0000 0%, #DC143C 50%, #FF0000 100%);
          border: none;
          border-radius: 12px;
          padding: 0.75rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          color: white;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: 
            0 5px 15px rgba(139, 0, 0, 0.4),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .btn-login:hover {
          background: linear-gradient(135deg, #A00000 0%, #FF1493 50%, #FF4500 100%);
          transform: translateY(-3px);
          box-shadow: 
            0 8px 25px rgba(139, 0, 0, 0.6),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        
        .form-check-input {
          background-color: rgba(40, 0, 0, 0.7);
          border-radius: 6px;
          border: 2px solid rgba(139, 0, 0, 0.4);
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .form-check-input:checked {
          background-color: #DC143C;
          border-color: #DC143C;
          box-shadow: 
            0 2px 5px rgba(220, 20, 60, 0.4),
            inset 1px 1px 3px rgba(0, 0, 0, 0.3);
        }
        
        .form-check-label {
          font-size: 0.9rem;
          color: #ffffff;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .links {
          text-align: center;
          margin-top: 1.5rem;
        }
        
        .links a {
          color: #FF6B6B;
          text-decoration: none;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .links a:hover {
          color: #FF4444;
          text-decoration: underline;
          text-shadow: 1px 1px 3px rgba(255, 68, 68, 0.5);
        }
        
        .links span {
          color: rgba(255, 255, 255, 0.6);
        }
        
        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .input-group {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.7);
          z-index: 10;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .form-control.with-icon {
          padding-left: 2.5rem;
        }
        
        .error-message {
          color: #FF6B6B;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }
        
        .form-control.is-invalid {
          border-color: #FF4444;
          background: rgba(60, 0, 0, 0.7);
          box-shadow: inset 2px 2px 5px rgba(0, 0, 0, 0.4);
        }
        
        .form-control.is-invalid:focus {
          border-color: #FF4444;
          box-shadow: 
            0 0 0 0.2rem rgba(255, 68, 68, 0.25),
            inset 2px 2px 5px rgba(0, 0, 0, 0.4);
        }
        
        .card-body {
          background: rgba(30, 0, 0, 0.5);
        }

        /* SweetAlert2 Dark Theme Customization */
        :global(.swal-dark-theme) {
          border: 2px solid rgba(139, 0, 0, 0.5) !important;
          border-radius: 15px !important;
          box-shadow: 0 20px 40px rgba(139, 0, 0, 0.4) !important;
        }

        :global(.swal2-popup.swal-dark-theme .swal2-title) {
          color: #ffffff !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7) !important;
        }

        :global(.swal2-popup.swal-dark-theme .swal2-html-container) {
          color: #ffffff !important;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5) !important;
        }
      `}</style>
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4">
            <div className="card login-card">
              <div className="login-header">
                <div className="icon">🔐</div>
                <h2>เข้าสู่ระบบ</h2>
                <p>ยินดีต้อนรับกลับมา!</p>
              </div>
              
              <div className="card-body p-4">
                <div onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      ชื่อผู้ใช้งาน
                    </label>
                    <div className="input-group">
                      <span className="input-icon">👤</span>
                      <input
                        type="text"
                        className={`form-control with-icon ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleInputChange}
                        placeholder="กรอกชื่อผู้ใช้งาน"
                      />
                    </div>
                    {errors.username && <div className="error-message">{errors.username}</div>}
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      รหัสผ่าน
                    </label>
                    <div className="input-group">
                      <span className="input-icon">🔒</span>
                      <input
                        type="password"
                        className={`form-control with-icon ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="กรอกรหัสผ่าน"
                      />
                    </div>
                    {errors.password && <div className="error-message">{errors.password}</div>}
                  </div>
                  
                  <div className="mb-3 form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="remember"
                      name="remember"
                      checked={formData.remember}
                      onChange={handleInputChange}
                    />
                    <label className="form-check-label" htmlFor="remember">
                      จำฉันไว้
                    </label>
                  </div>
                  
                  <button type="button" onClick={handleSubmit} className="btn btn-primary btn-login">
                    🔑เข้าสู่ระบบ
                  </button>
                </div>
                
                <div className="links">
                  <a href="/Register">สมัครสมาชิก</a>
                  <span className="mx-2">|</span>
                  <a href="/forgot-password">ลืมรหัสผ่าน</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
"use client";

import React, { useState } from 'react';

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
      // Handle login logic here
      alert('เข้าสู่ระบบสำเร็จ!');
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg,rgb(88, 241, 252) 0%,rgb(255, 58, 156) 100%)',
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
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border: none;
          border-radius: 20px;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.3s ease;
        }
        
        .login-card:hover {
          transform: translateY(-5px);
        }
        
        .login-header {
          background: linear-gradient(135deg,rgb(255, 71, 141) 0%,rgb(163, 71, 255) 100%);
          color: white;
          padding: 2rem;
          text-align: center;
        }
        
        .login-header h2 {
          margin: 0;
          font-weight: 600;
          font-size: 1.8rem;
        }
        
        .login-header p {
          margin: 0.5rem 0 0 0;
          opacity: 0.9;
          font-size: 0.95rem;
        }
        
        .form-control {
          border: 2px solid #e9ecef;
          border-radius: 12px;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        
        .form-control:focus {
          border-color: #667eea;
          box-shadow: 0 0 0 0.2rem rgba(102, 126, 234, 0.25);
        }
        
        .form-label {
          font-weight: 500;
          color: #495057;
          margin-bottom: 0.5rem;
        }
        
        .btn-login {
          background: linear-gradient(135deg,rgb(0, 255, 179) 0%,rgb(128, 0, 255) 100%);
          border: none;
          border-radius: 12px;
          padding: 0.75rem 2rem;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .btn-login:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4);
        }
        
        .form-check-input {
          border-radius: 6px;
          border: 2px solid #e9ecef;
        }
        
        .form-check-input:checked {
          background-color: #667eea;
          border-color: #667eea;
        }
        
        .form-check-label {
          font-size: 0.9rem;
          color: #6c757d;
        }
        
        .links {
          text-align: center;
          margin-top: 1.5rem;
        }
        
        .links a {
          color: #667eea;
          text-decoration: none;
          font-size: 0.9rem;
          transition: color 0.3s ease;
        }
        
        .links a:hover {
          color: #764ba2;
          text-decoration: underline;
        }
        
        .icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        
        .input-group {
          position: relative;
        }
        
        .input-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
          z-index: 10;
        }
        
        .form-control.with-icon {
          padding-left: 2.5rem;
        }
        
        .error-message {
          color: #dc3545;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .form-control.is-invalid {
          border-color: #dc3545;
        }
        
        .form-control.is-invalid:focus {
          border-color: #dc3545;
          box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
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
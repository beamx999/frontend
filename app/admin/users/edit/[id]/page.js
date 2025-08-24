"use client";

import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';
import { use } from 'react';

export default function Page({params}) {
  const { id } = use(params);
  const [items, setItems] = useState([]);
  
  // State สำหรับแต่ละ field
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [fullname, setFullname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [sex, setSex] = useState('');
  const [birthday, setBirthday] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: '',
    color: '#dc3545'
  });

  // ดึงข้อมูลผู้ใช้เมื่อ component mount
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
        if (response.ok) {
          const userData = await response.json();
          setItems([userData]);
          // Set initial values (ยกเว้น password เพื่อความปลอดภัย)
          setUsername(userData.username || '');
          setFirstname(userData.firstname || '');
          setFullname(userData.fullname || '');
          setLastname(userData.lastname || '');
          setAddress(userData.address || '');
          setSex(userData.sex || '');
          setBirthday(userData.birthday ? userData.birthday.split('T')[0] : '');
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (id) {
      fetchUserData();
    }
  }, [id]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!username) newErrors.username = 'กรุณากรอกชื่อผู้ใช้';
    else if (username.length < 3) newErrors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร';
    
    // เช็ค password เฉพาะเมื่อมีการกรอก (สำหรับการแก้ไข อาจไม่ต้องเปลี่ยน password)
    if (password && password.length < 6) newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร';
    
    if (!firstname) newErrors.firstname = 'กรุณาเลือกคำนำหน้าชื่อ';
    if (!fullname) newErrors.fullname = 'กรุณากรอกชื่อ';
    if (!lastname) newErrors.lastname = 'กรุณากรอกนามสกุล';
    if (!address) newErrors.address = 'กรุณากรอกที่อยู่';
    if (!sex) newErrors.sex = 'กรุณาเลือกเพศ';
    if (!birthday) newErrors.birthday = 'กรุณาเลือกวันเกิด';
    if (!acceptTerms) newErrors.acceptTerms = 'กรุณายอมรับเงื่อนไข';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ score: 0, feedback: '', color: '#dc3545' });
      return;
    }

    let score = 0;
    let feedback = [];
    
    // Length check
    if (password.length >= 8) score += 1;
    else feedback.push('อย่างน้อย 8 ตัวอักษร');
    
    // Character variety checks
    if (/[a-z]/.test(password)) score += 1;
    else feedback.push('ตัวพิมพ์เล็ก');
    
    if (/[A-Z]/.test(password)) score += 1;
    else feedback.push('ตัวพิมพ์ใหญ่');
    
    if (/[0-9]/.test(password)) score += 1;
    else feedback.push('ตัวเลข');
    
    if (/[^A-Za-z0-9]/.test(password)) score += 1;
    else feedback.push('อักขระพิเศษ');

    let strengthText = '';
    let color = '#dc3545';
    
    if (score <= 2) {
      strengthText = 'อย่างประมาท';
      color = '#dc3545';
    } else if (score === 3) {
      strengthText = 'ปานกลาง';
      color = '#ffc107';
    } else if (score === 4) {
      strengthText = 'ดี';
      color = '#17a2b8';
    } else {
      strengthText = 'แข็งแกร่งมาก';
      color = '#28a745';
    }

    setPasswordStrength({
      score: score,
      feedback: feedback.length > 0 ? `ขาด: ${feedback.join(', ')}` : 'รหัสผ่านแข็งแกร่ง!',
      color: color,
      strengthText: strengthText
    });
  };

  const hashPassword = async (plainPassword) => {
    try {
      const saltRounds = 12; // เพิ่มความปลอดภัย
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('ไม่สามารถเข้ารหัสรหัสผ่านได้');
    }
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (!isValid) {
      Swal.fire({
        icon: 'warning',
        title: 'ข้อมูลไม่ครบถ้วน!',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง',
        confirmButtonColor: '#dc2626',
        background: '#1f1f1f',
        color: '#e0e0e0'
      });
      return;
    }

    setIsLoading(true);

    try {
      // เตรียมข้อมูลสำหรับส่ง
      const requestData = {
        id: id,
        username: username,
        firstname: firstname,
        fullname: fullname,
        lastname: lastname,
        address: address,
        sex: sex,
        birthday: birthday,
      };

      // Hash password เฉพาะเมื่อมีการกรอกรหัสผ่านใหม่
      if (password && password.trim() !== '') {
        console.log('Hashing password...');
        const hashedPassword = await hashPassword(password);
        requestData.password = hashedPassword;
        console.log('Password hashed successfully');
      }

      console.log('Request payload (password hidden for security):', {
        ...requestData,
        password: requestData.password ? '[HASHED PASSWORD]' : 'Not changed'
      });

      const response = await fetch(`https://backend-nextjs-virid.vercel.app/api/users`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      console.log('Response status:', response.status);

      const responseText = await response.text();
      console.log('Response received');

      let result;
      try {
        result = JSON.parse(responseText);
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        result = { message: responseText };
      }

      if (!response.ok) {
        throw new Error(result.message || `HTTP error! status: ${response.status}`);
      }

      console.log('Update successful');
      
      await Swal.fire({
        icon: 'success',
        title: 'แก้ไขข้อมูลสำเร็จ!',
        text: password ? 'ข้อมูลและรหัสผ่านของคุณถูกแก้ไขเรียบร้อยแล้ว' : 'ข้อมูลของคุณถูกแก้ไขเรียบร้อยแล้ว',
        confirmButtonColor: '#dc2626',
        background: '#1f1f1f',
        color: '#e0e0e0'
      });

      // ล้างค่า password field เพื่อความปลอดภัย
      setPassword('');
      
      // อัพเดทข้อมูลใน items หลังจากแก้ไขสำเร็จ
      const updatedResponse = await fetch(`https://backend-nextjs-virid.vercel.app/api/users/${id}`);
      if (updatedResponse.ok) {
        const updatedData = await updatedResponse.json();
        setItems([updatedData]);
        // อัพเดท state ด้วยข้อมูลใหม่
        setUsername(updatedData.username || '');
        setFirstname(updatedData.firstname || '');
        setFullname(updatedData.fullname || '');
        setLastname(updatedData.lastname || '');
        setAddress(updatedData.address || '');
        setSex(updatedData.sex || '');
        setBirthday(updatedData.birthday ? updatedData.birthday.split('T')[0] : '');
      }

    } catch (error) {
      console.error('Update error:', error);
      
      let errorMessage = 'ไม่สามารถแก้ไขข้อมูลได้ กรุณาลองใหม่อีกครั้ง';
      
      if (error.message.includes('duplicate') || error.message.includes('already exists')) {
        errorMessage = 'ชื่อผู้ใช้นี้มีอยู่แล้ว กรุณาเลือกชื่อผู้ใช้อื่น';
      } else if (error.message.includes('network') || error.message.includes('fetch')) {
        errorMessage = 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาตรวจสอบการเชื่อมต่ออินเทอร์เน็ต';
      } else if (error.message.includes('เข้ารหัสรหัสผ่าน')) {
        errorMessage = 'เกิดข้อผิดพลาดในการประมวลผลรหัสผ่าน กรุณาลองใหม่';
      }

      await Swal.fire({
        icon: 'error',
        title: 'เกิดข้อผิดพลาด!',
        text: errorMessage,
        footer: `<small>รายละเอียด: ${error.message}</small>`,
        confirmButtonColor: '#dc2626',
        background: '#1f1f1f',
        color: '#e0e0e0'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <style jsx>{`
        body {
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1b2d 50%, #1a1a1a 100%);
          min-height: 100vh;
          color: #e0e0e0;
          margin: 0;
          padding: 0;
        }
        
        .page-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #1a1a1a 0%, #2d1b2d 50%, #1a1a1a 100%);
          padding: 2rem;
        }
        
        .main-card {
          background: linear-gradient(145deg, #1f1f1f, #0f0f0f);
          border: 2px solid rgba(220, 38, 38, 0.3);
          border-radius: 20px;
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.5),
            0 0 30px rgba(220, 38, 38, 0.1),
            inset 0 1px 0 rgba(220, 38, 38, 0.1);
          overflow: hidden;
          backdrop-filter: blur(10px);
          position: relative;
        }
        
        .main-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, #dc2626, transparent, #dc2626);
          border-radius: 22px;
          z-index: -1;
          opacity: 0.3;
          filter: blur(2px);
        }
        
        .card-header-dark {
          background: linear-gradient(135deg, #dc2626, #991b1b, #7f1d1d);
          color: white;
          text-align: center;
          padding: 2rem;
          position: relative;
          overflow: hidden;
        }
        
        .card-header-dark::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          animation: shine 3s infinite;
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .header-icon {
          font-size: 3rem;
          background: linear-gradient(45deg, #fbbf24, #f59e0b);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        }
        
        .header-title {
          background: linear-gradient(45deg, #dc2626, #fca5a5, #dc2626);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: bold;
          font-size: 2rem;
          margin: 1rem 0 0.5rem 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
        
        .card-body-dark {
          background: rgba(15, 15, 15, 0.95);
          padding: 2.5rem;
          color: #e0e0e0;
        }
        
        .form-label-dark {
          color: #e0e0e0;
          font-weight: 600;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
        }
        
        .form-label-dark i {
          color: #dc2626;
          margin-right: 0.5rem;
        }
        
        .form-control-dark {
          background: rgba(30, 30, 30, 0.8);
          border: 2px solid rgba(220, 38, 38, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          color: #e0e0e0;
          font-size: 14px;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .form-control-dark:focus {
          background: rgba(40, 40, 40, 0.9);
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.3);
          color: #ffffff;
          outline: none;
        }
        
        .form-control-dark::placeholder {
          color: #999999;
        }
        
        .form-select-dark {
          background: rgba(30, 30, 30, 0.8);
          border: 2px solid rgba(220, 38, 38, 0.2);
          border-radius: 12px;
          padding: 12px 16px;
          color: #e0e0e0;
          font-size: 14px;
          transition: all 0.3s ease;
          width: 100%;
        }
        
        .form-select-dark:focus {
          background: rgba(40, 40, 40, 0.9);
          border-color: #dc2626;
          box-shadow: 0 0 15px rgba(220, 38, 38, 0.3);
          color: #ffffff;
          outline: none;
        }
        
        .form-select-dark option {
          background: #2d2d2d;
          color: #e0e0e0;
        }
        
        .form-check-dark {
          display: flex;
          align-items: center;
          margin: 0.5rem 0;
        }
        
        .form-check-input-dark {
          width: 1.2rem;
          height: 1.2rem;
          margin-right: 0.7rem;
          accent-color: #dc2626;
          border: 2px solid rgba(220, 38, 38, 0.3);
          background: rgba(30, 30, 30, 0.8);
        }
        
        .form-check-label-dark {
          color: #e0e0e0;
          cursor: pointer;
          display: flex;
          align-items: center;
        }
        
        .btn-submit {
          background: linear-gradient(135deg, #dc2626, #991b1b);
          border: none;
          border-radius: 12px;
          color: white;
          padding: 15px 0;
          font-size: 16px;
          font-weight: bold;
          width: 100%;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
          box-shadow: 0 6px 20px rgba(220, 38, 38, 0.3);
          cursor: pointer;
        }
        
        .btn-submit::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s;
        }
        
        .btn-submit:hover::before {
          left: 100%;
        }
        
        .btn-submit:hover {
          background: linear-gradient(135deg, #991b1b, #7f1d1d);
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(220, 38, 38, 0.5);
        }
        
        .btn-submit:disabled {
          background: linear-gradient(135deg, #666666, #555555);
          cursor: not-allowed;
          transform: none;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
        }
        
        .password-toggle-btn {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          background: transparent;
          border: none;
          color: #dc2626;
          cursor: pointer;
          padding: 0 8px;
          transition: color 0.3s ease;
        }
        
        .password-toggle-btn:hover {
          color: #991b1b;
        }
        
        .password-strength {
          margin-top: 0.5rem;
        }
        
        .strength-bar {
          height: 6px;
          border-radius: 3px;
          background: rgba(40, 40, 40, 0.5);
          overflow: hidden;
          margin-top: 0.25rem;
        }
        
        .strength-fill {
          height: 100%;
          transition: all 0.3s ease;
          border-radius: 3px;
        }
        
        .error-text {
          color: #ff6b6b;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }
        
        .loading-spinner {
          color: #dc2626;
        }
        
        .card-footer-dark {
          background: rgba(20, 20, 20, 0.8);
          text-align: center;
          padding: 1.5rem;
          border-top: 1px solid rgba(220, 38, 38, 0.2);
        }
        
        .footer-link {
          color: #dc2626;
          text-decoration: none;
          font-weight: bold;
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #fca5a5;
          text-shadow: 0 0 5px rgba(220, 38, 38, 0.5);
        }
        
        .text-muted-dark {
          color: #999999;
        }
        
        .text-info-dark {
          color: #60a5fa;
        }
        
        /* Input validation styles */
        .is-invalid {
          border-color: #ff6b6b !important;
          box-shadow: 0 0 10px rgba(255, 107, 107, 0.3) !important;
        }
        
        .invalid-feedback {
          color: #ff6b6b;
          font-size: 0.875rem;
          margin-top: 0.25rem;
          display: block;
        }
        
        /* Scrollbar styling */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(30, 30, 30, 0.5);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #dc2626, #991b1b);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #991b1b, #7f1d1d);
        }
        
        /* Bootstrap Grid */
        .container { width: 100%; padding-right: 15px; padding-left: 15px; margin-right: auto; margin-left: auto; }
        .row { display: flex; flex-wrap: wrap; margin-right: -15px; margin-left: -15px; }
        .col-md-8 { flex: 0 0 66.666667%; max-width: 66.666667%; }
        .col-lg-6 { flex: 0 0 50%; max-width: 50%; }
        .col-md-4 { flex: 0 0 33.333333%; max-width: 33.333333%; }
        .col-md-6 { flex: 0 0 50%; max-width: 50%; }
        .col-md-8, .col-lg-6, .col-md-4, .col-md-6 { position: relative; width: 100%; padding-right: 15px; padding-left: 15px; }
        .justify-content-center { justify-content: center; }
        .py-5 { padding-top: 3rem; padding-bottom: 3rem; }
        .mb-0 { margin-bottom: 0; }
        .mb-4 { margin-bottom: 1.5rem; }
        .mt-2 { margin-top: 0.5rem; }
        .me-1 { margin-right: 0.25rem; }
        .me-2 { margin-right: 0.5rem; }
        .ms-2 { margin-left: 0.5rem; }
        .d-flex { display: flex; }
        .d-grid { display: grid; }
        .d-block { display: block; }
        .text-center { text-align: center; }
        .justify-content-between { justify-content: space-between; }
        .align-items-center { align-items: center; }
        .shadow-lg { box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175); }
        .border-0 { border: 0; }
        .visually-hidden { position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
        .spinner-border { display: inline-block; width: 2rem; height: 2rem; vertical-align: -0.125em; border: 0.25em solid currentColor; border-right-color: transparent; border-radius: 50%; animation: spinner-border 0.75s linear infinite; }
        @keyframes spinner-border { to { transform: rotate(360deg); } }
        .fa-spin { animation: fa-spin 2s infinite linear; }
        @keyframes fa-spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>

      <div className="page-container">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="main-card shadow-lg border-0">
                <div className="card-header-dark">
                  <div className="header-icon">🌟</div>
                  <h2 className="header-title">แก้ไขข้อมูลสมาชิก</h2>
                  <p className="text-muted-dark mt-2">กรอกข้อมูลเพื่อแก้ไข</p>
                </div>
                
                <div className="card-body-dark">
                  {/* แสดงข้อมูลเมื่อโหลดเสร็จแล้ว */}
                  {items.length === 0 ? (
                    <div className="text-center">
                      <div className="spinner-border loading-spinner" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                      <p className="mt-2 text-muted-dark">กำลังโหลดข้อมูล...</p>
                    </div>
                  ) : (
                    <form onSubmit={handleUpdateSubmit}>
                      {/* Username */}
                      <div className="mb-4">
                        <label className="form-label-dark">
                          <i className="fas fa-user"></i>
                          ชื่อผู้ใช้
                        </label>
                        <input
                          type="text"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className={`form-control-dark ${errors.username ? 'is-invalid' : ''}`}
                          placeholder="กรอกชื่อผู้ใช้"
                          disabled={isLoading}
                          required
                        />
                        {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                      </div>

                      {/* Password */}
                      <div className="mb-4">
                        <label className="form-label-dark">
                          <i className="fas fa-lock"></i>
                          รหัสผ่าน
                          <small className="text-muted-dark ms-2">(เว้นว่างไว้หากไม่ต้องการเปลี่ยน)</small>
                        </label>
                        <div style={{ position: 'relative' }}>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => {
                              setPassword(e.target.value);
                              validatePasswordStrength(e.target.value);
                            }}
                            className={`form-control-dark ${errors.password ? 'is-invalid' : ''}`}
                            placeholder="กรอกรหัสผ่านใหม่ (หากต้องการเปลี่ยน)"
                            disabled={isLoading}
                            style={{ paddingRight: '45px' }}
                          />
                          <button
                            type="button"
                            className="password-toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                            disabled={isLoading}
                          >
                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                          </button>
                        </div>
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        
                        {/* Password Strength Indicator */}
                        {password && (
                          <div className="password-strength">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                              <small className="text-muted-dark">ความแข็งแกร่งของรหัสผ่าน:</small>
                              <small style={{ color: passwordStrength.color, fontWeight: 'bold' }}>
                                {passwordStrength.strengthText}
                              </small>
                            </div>
                            <div className="strength-bar">
                              <div 
                                className="strength-fill"
                                style={{ 
                                  width: `${(passwordStrength.score / 5) * 100}%`,
                                  backgroundColor: passwordStrength.color
                                }}
                              />
                            </div>
                            <small className="text-muted-dark d-block mt-1">
                              {passwordStrength.feedback}
                            </small>
                          </div>
                        )}
                        
                        {password && (
                          <div className="mt-2">
                            <small className="text-info-dark">
                              <i className="fas fa-shield-alt me-1"></i>
                              รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก
                            </small>
                          </div>
                        )}
                      </div>

                      {/* Name fields */}
                      <div className="row mb-4">
                        <div className="col-md-4">
                          <label className="form-label-dark">
                            <i className="fas fa-crown"></i>
                            คำนำหน้าชื่อ
                          </label>
                          <select
                            value={firstname}
                            onChange={(e) => setFirstname(e.target.value)}
                            className={`form-select-dark ${errors.firstname ? 'is-invalid' : ''}`}
                            disabled={isLoading}
                            required
                          >
                            <option value="">เลือกคำนำหน้า</option>
                            <option value="นาย">นาย</option>
                            <option value="นาง">นาง</option>
                            <option value="นางสาว">นางสาว</option>
                          </select>
                          {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                        </div>

                        <div className="col-md-4">
                          <label className="form-label-dark">ชื่อ</label>
                          <input
                            type="text"
                            placeholder="ชื่อ"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            className={`form-control-dark ${errors.fullname ? 'is-invalid' : ''}`}
                            disabled={isLoading}
                            required
                          />
                          {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                        </div>

                        <div className="col-md-4">
                          <label className="form-label-dark">นามสกุล</label>
                          <input
                            type="text"
                            placeholder="นามสกุล"
                            value={lastname}
                            onChange={(e) => setLastname(e.target.value)}
                            className={`form-control-dark ${errors.lastname ? 'is-invalid' : ''}`}
                            disabled={isLoading}
                            required
                          />
                          {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                        </div>
                      </div>

                      {/* Address */}
                      <div className="mb-4">
                        <label className="form-label-dark">
                          <i className="fas fa-map-marker-alt"></i>
                          ที่อยู่
                        </label>
                        <textarea
                          placeholder="กรอกที่อยู่"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          className={`form-control-dark ${errors.address ? 'is-invalid' : ''}`}
                          rows="3"
                          disabled={isLoading}
                          required
                          style={{ resize: 'vertical' }}
                        />
                        {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                      </div>

                      {/* Sex and Birth Date */}
                      <div className="row mb-4">
                        <div className="col-md-6">
                          <label className="form-label-dark">
                            <i className="fas fa-venus-mars"></i>
                            เพศ
                          </label>
                          <div className="mt-2">
                            <div className="form-check-dark">
                              <input
                                className="form-check-input-dark"
                                type="radio"
                                name="sex"
                                value="ชาย"
                                checked={sex === 'ชาย'}
                                onChange={(e) => setSex(e.target.value)}
                                disabled={isLoading}
                              />
                              <label className="form-check-label-dark">
                                <i className="fas fa-mars me-1" style={{color: '#4A90E2'}}></i>
                                ชาย
                              </label>
                            </div>
                            <div className="form-check-dark">
                              <input
                                className="form-check-input-dark"
                                type="radio"
                                name="sex"
                                value="หญิง"
                                checked={sex === 'หญิง'}
                                onChange={(e) => setSex(e.target.value)}
                                disabled={isLoading}
                              />
                              <label className="form-check-label-dark">
                                <i className="fas fa-venus me-1" style={{color: '#E91E63'}}></i>
                                หญิง
                              </label>
                            </div>
                          </div>
                          {errors.sex && <div className="error-text">{errors.sex}</div>}
                        </div>
                        
                        <div className="col-md-6">
                          <label className="form-label-dark">
                            <i className="fas fa-birthday-cake"></i>
                            วันเกิด
                          </label>
                          <input
                            type="date"
                            value={birthday}
                            onChange={(e) => setBirthday(e.target.value)}
                            className={`form-control-dark ${errors.birthday ? 'is-invalid' : ''}`}
                            disabled={isLoading}
                            required
                          />
                          {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
                        </div>
                      </div>

                      {/* Terms and Conditions */}
                      <div className="mb-4">
                        <div className="form-check-dark">
                          <input
                            className="form-check-input-dark"
                            type="checkbox"
                            checked={acceptTerms}
                            onChange={(e) => setAcceptTerms(e.target.checked)}
                            disabled={isLoading}
                          />
                          <label className="form-check-label-dark">
                            <i className="fas fa-shield-alt me-2" style={{color: '#dc2626'}}></i>
                            ฉันยอมรับ <a href="#" className="footer-link">เงื่อนไขการใช้งาน</a> และ <a href="#" className="footer-link">นโยบายความเป็นส่วนตัว</a>
                          </label>
                        </div>
                        {errors.acceptTerms && <div className="error-text">{errors.acceptTerms}</div>}
                      </div>

                      {/* Submit Button */}
                      <div className="d-grid">
                        <button
                          type="submit"
                          className="btn-submit"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <i className="fas fa-spinner fa-spin me-2"></i>
                              กำลังแก้ไขข้อมูล...
                            </>
                          ) : (
                            <>
                              <i className="fas fa-edit me-2"></i>
                              ปรับปรุงข้อมูล
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
                
                <div className="card-footer-dark">
                  <p className="text-muted-dark mb-0">
                    มีบัญชีอยู่แล้ว? <a href="/Login" className="footer-link">เข้าสู่ระบบ</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bootstrap CSS */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css" 
        rel="stylesheet" 
      />
      {/* Font Awesome */}
      <link 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" 
        rel="stylesheet" 
      />
    </>
  );
}
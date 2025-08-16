"use client";

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import bcrypt from 'bcryptjs';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstname: '',
    fullname: '',
    lastname: '',
    address: '',
    sex: '',
    birthday: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    feedback: '',
    color: '#ff4757',
    strengthText: ''
  });

  const validatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ 
        score: 0, 
        feedback: '', 
        color: '#ff4757',
        strengthText: ''
      });
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
    let color = '#ff4757';
    
    if (score <= 2) {
      strengthText = 'อ่อนมาก';
      color = '#ff4757';
    } else if (score === 3) {
      strengthText = 'ปานกลาง';
      color = '#ffa502';
    } else if (score === 4) {
      strengthText = 'ดี';
      color = '#ff6b6b';
    } else {
      strengthText = 'แข็งแกร่งมาก';
      color = '#ee5a52';
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
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      return hashedPassword;
    } catch (error) {
      console.error('Error hashing password:', error);
      throw new Error('ไม่สามารถเข้ารหัสรหัสผ่านได้');
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Special handling for password field
    if (name === 'password') {
      validatePasswordStrength(value);
    }

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Username validation
    if (!formData.username) {
      newErrors.username = 'กรุณากรอกชื่อผู้ใช้';
    } else if (formData.username.length < 3) {
      newErrors.username = 'ชื่อผู้ใช้ต้องมีอย่างน้อย 3 ตัวอักษร';
    }
    
    // Password validation - Enhanced for security
    if (!formData.password) {
      newErrors.password = 'กรุณากรอกรหัสผ่าน';
    } else if (formData.password.length < 8) {
      newErrors.password = 'รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร';
    } else if (passwordStrength.score < 3) {
      newErrors.password = 'รหัสผ่านยังไม่ปลอดภัยเพียงพอ กรุณาใช้รหัสผ่านที่แข็งแกร่งขึ้น';
    }
    
    if (!formData.firstname) newErrors.firstname = 'กรุณาเลือกคำนำหน้าชื่อ';
    if (!formData.fullname) newErrors.fullname = 'กรุณากรอกชื่อ';
    if (!formData.lastname) newErrors.lastname = 'กรุณากรอกนามสกุล';
    if (!formData.address) newErrors.address = 'กรุณากรอกที่อยู่';
    if (!formData.sex) newErrors.sex = 'กรุณาเลือกเพศ';
    if (!formData.birthday) newErrors.birthday = 'กรุณาเลือกวันเกิด';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'กรุณายอมรับเงื่อนไข';

    // Age validation - แก้ไขจาก const เป็น let
    if (formData.birthday) {
      const today = new Date();
      const birthday = new Date(formData.birthday);
      let age = today.getFullYear() - birthday.getFullYear(); // เปลี่ยนจาก const เป็น let
      const monthDiff = today.getMonth() - birthday.getMonth();
      
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--; // ตอนนี้ทำงานได้แล้วเพราะเป็น let
      }
      
      if (age < 13) {
        newErrors.birthday = 'อายุต้องมากกว่า 13 ปี';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      username: '',
      password: '',
      firstname: '',
      fullname: '',
      lastname: '',
      address: '',
      sex: '',
      birthday: '',
      acceptTerms: false
    });
    setErrors({});
    setPasswordStrength({
      score: 0,
      feedback: '',
      color: '#ff4757',
      strengthText: ''
    });
    setShowPassword(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const isValid = validateForm();
    if (!isValid) {
      Swal.fire({
        icon: 'warning',
        title: 'ข้อมูลไม่ครบถ้วน!',
        text: 'กรุณากรอกข้อมูลให้ครบถ้วนและถูกต้อง',
        confirmButtonColor: '#ee5a52'
      });
      return;
    }

    // Check password strength one more time
    if (passwordStrength.score < 3) {
      const result = await Swal.fire({
        icon: 'warning',
        title: 'รหัสผ่านไม่ปลอดภัย',
        text: 'รหัสผ่านของคุณยังไม่ปลอดภัยเพียงพอ คุณต้องการดำเนินการต่อหรือไม่?',
        showCancelButton: true,
        confirmButtonText: 'ดำเนินการต่อ',
        cancelButtonText: 'แก้ไขรหัสผ่าน',
        confirmButtonColor: '#ffa502',
        cancelButtonColor: '#ee5a52'
      });

      if (!result.isConfirmed) {
        return;
      }
    }

    setIsLoading(true);

    try {
      // Hash password before sending
      console.log('Hashing password...');
      const hashedPassword = await hashPassword(formData.password);
      console.log('Password hashed successfully');

      const requestData = {
        username: formData.username,
        password: hashedPassword, // Send hashed password
        firstname: formData.firstname,
        fullname: formData.fullname,
        lastname: formData.lastname,
        address: formData.address,
        sex: formData.sex,
        birthday: formData.birthday,
      };

      console.log('Request payload (password hidden for security):', {
        ...requestData,
        password: '[HASHED PASSWORD]'
      });

      const response = await fetch('http://itdev.cmtc.ac.th:3000/api/users', {
        method: 'POST',
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

      console.log('Registration successful');
      
      await Swal.fire({
        icon: 'success',
        title: 'สมัครสมาชิกสำเร็จ!',
        text: 'คุณสามารถเข้าสู่ระบบได้แล้ว รหัสผ่านของคุณถูกเข้ารหัสอย่างปลอดภัยแล้ว',
        confirmButtonColor: '#ee5a52'
      });

      // Reset form after successful registration
      resetForm();

    } catch (error) {
      console.error('Registration error:', error);
      
      let errorMessage = 'ไม่สามารถสมัครสมาชิกได้ กรุณาลองใหม่อีกครั้ง';
      
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
        confirmButtonColor: '#ee5a52'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e1e1e 0%, #2d1b1b 25%, #8b0000 50%, #dc143c 75%, #1a1a1a 100%)',
        padding: '2rem',
        position: 'relative'
      }}>
      
      {/* Background overlay for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          radial-gradient(circle at 20% 20%, rgba(220, 20, 60, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(139, 0, 0, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 60%, rgba(255, 69, 0, 0.05) 0%, transparent 50%)
        `,
        zIndex: 0
      }}></div>
      
      <div className="container py-5" style={{ position: 'relative', zIndex: 1 }}>
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0" style={{
              borderRadius: '25px',
              background: 'linear-gradient(145deg, rgba(30, 30, 30, 0.95), rgba(45, 27, 27, 0.9))',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(220, 20, 60, 0.2)',
              boxShadow: `
                0 25px 50px rgba(0, 0, 0, 0.5),
                0 0 0 1px rgba(220, 20, 60, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.1)
              `
            }}>
              <div className="card-header text-center border-0 pb-0" style={{
                background: 'transparent',
                borderRadius: '25px 25px 0 0'
              }}>
                <div className="py-3">
                  <div className="mb-3">
                    <span style={{
                      fontSize: '3rem',
                      background: 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.5))'
                    }}>
                      🌟
                    </span>
                  </div>
                  <h2 className="mb-0" style={{
                    background: 'linear-gradient(45deg, #ff4757, #dc143c, #ee5a52)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold',
                    textShadow: '0 0 20px rgba(220, 20, 60, 0.3)'
                  }}>
                    สมัครสมาชิก
                  </h2>
                  <p className="mt-2" style={{ color: '#cccccc' }}>กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
                </div>
              </div>
              
              <div className="card-body px-5 py-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                      <i className="fas fa-user me-2" style={{color: '#ee5a52'}}></i>
                      ชื่อผู้ใช้
                    </label>
                    <input
                      type="text"
                      name="username"
                      className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="กรอกชื่อผู้ใช้"
                      disabled={isLoading}
                      style={{
                        borderRadius: '12px',
                        border: '2px solid rgba(220, 20, 60, 0.3)',
                        padding: '12px 16px',
                        fontSize: '14px',
                        backgroundColor: 'rgba(45, 27, 27, 0.8)',
                        color: '#ffffff',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '2px solid #ee5a52';
                        e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                        e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                      <i className="fas fa-lock me-2" style={{color: '#ee5a52'}}></i>
                      รหัสผ่าน
                      <small className="text-danger ms-2">*จำเป็น</small>
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="กรอกรหัสผ่าน (อย่างน้อย 8 ตัวอักษร)"
                        disabled={isLoading}
                        style={{
                          borderRadius: '12px',
                          border: '2px solid rgba(220, 20, 60, 0.3)',
                          padding: '12px 45px 12px 16px',
                          fontSize: '14px',
                          backgroundColor: 'rgba(45, 27, 27, 0.8)',
                          color: '#ffffff',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '2px solid #ee5a52';
                          e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                      <button
                        type="button"
                        className="btn position-absolute"
                        onClick={() => setShowPassword(!showPassword)}
                        disabled={isLoading}
                        style={{
                          right: '10px',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          border: 'none',
                          background: 'transparent',
                          color: '#ee5a52',
                          padding: '0 8px'
                        }}
                      >
                        <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                      </button>
                    </div>
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    
                    {/* Password Strength Indicator */}
                    {formData.password && (
                      <div className="mt-2">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <small style={{ color: '#cccccc' }}>ความแข็งแกร่งของรหัสผ่าน:</small>
                          <small style={{ color: passwordStrength.color, fontWeight: 'bold' }}>
                            {passwordStrength.strengthText}
                          </small>
                        </div>
                        <div className="progress" style={{ 
                          height: '6px', 
                          borderRadius: '3px',
                          backgroundColor: 'rgba(0, 0, 0, 0.3)',
                          boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.5)'
                        }}>
                          <div 
                            className="progress-bar" 
                            style={{ 
                              width: `${(passwordStrength.score / 5) * 100}%`,
                              background: `linear-gradient(90deg, ${passwordStrength.color}, ${passwordStrength.color}dd)`,
                              transition: 'all 0.3s ease',
                              boxShadow: `0 0 10px ${passwordStrength.color}33`
                            }}
                          />
                        </div>
                        <small style={{ color: '#cccccc' }} className="d-block mt-1">
                          {passwordStrength.feedback}
                        </small>
                        {passwordStrength.score >= 3 && (
                          <small style={{ color: '#ee5a52' }} className="d-block mt-1">
                            <i className="fas fa-check-circle me-1"></i>
                            รหัสผ่านมีความปลอดภัยเพียงพอ
                          </small>
                        )}
                      </div>
                    )}

                    <div className="mt-2">
                      <small style={{ color: '#ff6b6b' }}>
                        <i className="fas fa-shield-alt me-1"></i>
                        รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก
                      </small>
                    </div>
                  </div>

                  {/* Name fields */}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                        <i className="fas fa-crown me-2" style={{color: '#ee5a52'}}></i>
                        คำนำหน้าชื่อ
                      </label>
                      <select
                        name="firstname"
                        className={`form-select ${errors.firstname ? 'is-invalid' : ''}`}
                        value={formData.firstname}
                        onChange={handleChange}
                        disabled={isLoading}
                        style={{
                          borderRadius: '12px',
                          border: '2px solid rgba(220, 20, 60, 0.3)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          backgroundColor: 'rgba(45, 27, 27, 0.8)',
                          color: '#ffffff',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '2px solid #ee5a52';
                          e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                      >
                        <option value="">เลือก</option>
                        <option value="นาย">นาย</option>
                        <option value="นาง">นาง</option>
                        <option value="นางสาว">นางสาว</option>
                      </select>
                      {errors.firstname && <div className="invalid-feedback">{errors.firstname}</div>}
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold" style={{ color: '#ffffff' }}>ชื่อ</label>
                      <input
                        type="text"
                        name="fullname"
                        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="ชื่อ"
                        disabled={isLoading}
                        style={{
                          borderRadius: '12px',
                          border: '2px solid rgba(220, 20, 60, 0.3)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          backgroundColor: 'rgba(45, 27, 27, 0.8)',
                          color: '#ffffff',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '2px solid #ee5a52';
                          e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                      {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold" style={{ color: '#ffffff' }}>นามสกุล</label>
                      <input
                        type="text"
                        name="lastname"
                        className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="นามสกุล"
                        disabled={isLoading}
                        style={{
                          borderRadius: '12px',
                          border: '2px solid rgba(220, 20, 60, 0.3)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          backgroundColor: 'rgba(45, 27, 27, 0.8)',
                          color: '#ffffff',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '2px solid #ee5a52';
                          e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                      {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                      <i className="fas fa-map-marker-alt me-2" style={{color: '#ee5a52'}}></i>
                      ที่อยู่
                    </label>
                    <textarea
                      name="address"
                      className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="กรอกที่อยู่"
                      rows="3"
                      disabled={isLoading}
                      style={{
                        borderRadius: '12px',
                        border: '2px solid rgba(220, 20, 60, 0.3)',
                        padding: '12px 16px',
                        fontSize: '14px',
                        resize: 'vertical',
                        backgroundColor: 'rgba(45, 27, 27, 0.8)',
                        color: '#ffffff',
                        boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onFocus={(e) => {
                        e.target.style.border = '2px solid #ee5a52';
                        e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                      }}
                      onBlur={(e) => {
                        e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                        e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                      }}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  {/* Sex and Birth Date */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                        <i className="fas fa-venus-mars me-2" style={{color: '#ee5a52'}}></i>
                        เพศ
                      </label>
                      <div className="mt-2">
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sex"
                            value="male"
                            checked={formData.sex === 'male'}
                            onChange={handleChange}
                            disabled={isLoading}
                            style={{
                              borderColor: '#ee5a52',
                              transform: 'scale(1.1)',
                              accentColor: '#ee5a52'
                            }}
                          />
                          <label className="form-check-label" style={{ color: '#ffffff' }}>
                            <i className="fas fa-mars me-1" style={{color: '#ff6b6b'}}></i>
                            ชาย
                          </label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="sex"
                            value="female"
                            checked={formData.sex === 'female'}
                            onChange={handleChange}
                            disabled={isLoading}
                            style={{
                              borderColor: '#ee5a52',
                              transform: 'scale(1.1)',
                              accentColor: '#ee5a52'
                            }}
                          />
                          <label className="form-check-label" style={{ color: '#ffffff' }}>
                            <i className="fas fa-venus me-1" style={{color: '#ff4757'}}></i>
                            หญิง
                          </label>
                        </div>
                      </div>
                      {errors.sex && <div className="text-danger mt-1" style={{fontSize: '0.875rem'}}>{errors.sex}</div>}
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold" style={{ color: '#ffffff' }}>
                        <i className="fas fa-birthday-cake me-2" style={{color: '#ee5a52'}}></i>
                        วันเกิด
                      </label>
                      <input
                        type="date"
                        name="birthday"
                        className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                        value={formData.birthday}
                        onChange={handleChange}
                        disabled={isLoading}
                        style={{
                          borderRadius: '12px',
                          border: '2px solid rgba(220, 20, 60, 0.3)',
                          padding: '12px 16px',
                          fontSize: '14px',
                          backgroundColor: 'rgba(45, 27, 27, 0.8)',
                          color: '#ffffff',
                          boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.3)',
                          transition: 'all 0.3s ease',
                          colorScheme: 'dark'
                        }}
                        onFocus={(e) => {
                          e.target.style.border = '2px solid #ee5a52';
                          e.target.style.boxShadow = '0 0 15px rgba(238, 90, 82, 0.3), inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                        onBlur={(e) => {
                          e.target.style.border = '2px solid rgba(220, 20, 60, 0.3)';
                          e.target.style.boxShadow = 'inset 0 2px 4px rgba(0, 0, 0, 0.3)';
                        }}
                      />
                      {errors.birthday && <div className="invalid-feedback">{errors.birthday}</div>}
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="mb-4">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleChange}
                        disabled={isLoading}
                        style={{
                          borderColor: '#ee5a52',
                          transform: 'scale(1.1)',
                          accentColor: '#ee5a52'
                        }}
                      />
                      <label className="form-check-label" style={{ color: '#ffffff' }}>
                        <i className="fas fa-shield-alt me-2" style={{color: '#ee5a52'}}></i>
                        ฉันยอมรับ <a href="#" style={{color: '#ff6b6b', textDecoration: 'none'}}>เงื่อนไขการใช้งาน</a> และ <a href="#" style={{color: '#ff6b6b', textDecoration: 'none'}}>นโยบายความเป็นส่วนตัว</a>
                      </label>
                    </div>
                    {errors.acceptTerms && <div className="text-danger mt-1" style={{fontSize: '0.875rem'}}>{errors.acceptTerms}</div>}
                  </div>

                  {/* Security Notice */}
                  <div className="alert" style={{
                    backgroundColor: 'rgba(238, 90, 82, 0.15)',
                    border: '1px solid rgba(238, 90, 82, 0.3)',
                    borderRadius: '12px',
                    color: '#ffffff',
                    boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-info-circle me-2" style={{color: '#ee5a52'}}></i>
                      <small className="mb-0">
                        <strong>ความปลอดภัย:</strong> ข้อมูลทั้งหมดจะถูกเข้ารหัสก่อนจัดเก็บ และเราจะไม่เปิดเผยข้อมูลส่วนบุคคลของคุณแก่บุคคลที่สาม
                      </small>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button
                      type="submit"
                      className="btn btn-lg"
                      disabled={isLoading}
                      style={{
                        background: isLoading 
                          ? 'linear-gradient(45deg, #666666, #444444)' 
                          : 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)',
                        border: 'none',
                        borderRadius: '15px',
                        color: 'white',
                        padding: '15px 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        boxShadow: isLoading 
                          ? '0 4px 15px rgba(0, 0, 0, 0.3)' 
                          : '0 8px 25px rgba(220, 20, 60, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                        transition: 'all 0.3s ease',
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                        position: 'relative',
                        overflow: 'hidden'
                      }}
                      onMouseOver={(e) => {
                        if (!isLoading) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 12px 35px rgba(220, 20, 60, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.2)';
                          e.target.style.background = 'linear-gradient(45deg, #ff6b6b, #ee5a52, #dc143c)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isLoading) {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 8px 25px rgba(220, 20, 60, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)';
                          e.target.style.background = 'linear-gradient(45deg, #ff4757, #dc143c, #8b0000)';
                        }
                      }}
                    >
                      {isLoading ? (
                        <>
                          <i className="fas fa-spinner fa-spin me-2"></i>
                          กำลังสมัครสมาชิก...
                        </>
                      ) : (
                        <>
                          <i className="fas fa-user-plus me-2"></i>
                          สมัครสมาชิก
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="card-footer text-center border-0 bg-transparent">
                <p className="mb-0" style={{ color: '#cccccc' }}>
                  มีบัญชีอยู่แล้ว? <a href="/Login" style={{color: '#ff6b6b', textDecoration: 'none', fontWeight: 'bold'}}>เข้าสู่ระบบ</a>
                </p>
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
      
      <style>{`
        ::placeholder {
          color: #999999 !important;
          opacity: 1;
        }
        
        .form-control:focus::placeholder {
          color: #666666 !important;
        }
        
        .form-select option {
          background-color: #2d1b1b;
          color: #ffffff;
        }
        
        .form-check-input:checked {
          background-color: #ee5a52;
          border-color: #ee5a52;
        }
        
        .progress {
          background-color: rgba(0, 0, 0, 0.3) !important;
        }
        
        /* Custom scrollbar for textarea */
        textarea::-webkit-scrollbar {
          width: 8px;
        }
        
        textarea::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.2);
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb {
          background: rgba(238, 90, 82, 0.6);
          border-radius: 4px;
        }
        
        textarea::-webkit-scrollbar-thumb:hover {
          background: rgba(238, 90, 82, 0.8);
        }
      `}</style>
    </div>
  );
};

export default Register;
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
    color: '#dc3545',
    strengthText: ''
  });

  const validatePasswordStrength = (password) => {
    if (!password) {
      setPasswordStrength({ 
        score: 0, 
        feedback: '', 
        color: '#dc3545',
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
    let color = '#dc3545';
    
    if (score <= 2) {
      strengthText = 'อ่อนมาก';
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
      color: '#dc3545',
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
        confirmButtonColor: '#667eea'
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
        confirmButtonColor: '#ffc107',
        cancelButtonColor: '#667eea'
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
        confirmButtonColor: '#667eea'
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
        confirmButtonColor: '#667eea'
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
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '2rem'
      }}>
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card shadow-lg border-0" style={{
              borderRadius: '20px',
              background: 'rgba(255, 255, 255, 0.95)'
            }}>
              <div className="card-header text-center border-0 pb-0" style={{
                background: 'transparent',
                borderRadius: '20px 20px 0 0'
              }}>
                <div className="py-3">
                  <div className="mb-3">
                    <span style={{
                      fontSize: '3rem',
                      background: 'linear-gradient(45deg, #667eea, #764ba2)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      🌟
                    </span>
                  </div>
                  <h2 className="mb-0" style={{
                    background: 'linear-gradient(45deg, #667eea, #764ba2)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold'
                  }}>
                    สมัครสมาชิก
                  </h2>
                  <p className="text-muted mt-2">กรอกข้อมูลเพื่อสร้างบัญชีใหม่</p>
                </div>
              </div>
              
              <div className="card-body px-5 py-4">
                <form onSubmit={handleSubmit}>
                  {/* Username */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark">
                      <i className="fas fa-user me-2" style={{color: '#667eea'}}></i>
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
                        borderRadius: '10px',
                        border: '2px solid #e9ecef',
                        padding: '12px 16px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                  </div>

                  {/* Password */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark">
                      <i className="fas fa-lock me-2" style={{color: '#667eea'}}></i>
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
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 45px 12px 16px',
                          fontSize: '14px'
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
                          color: '#667eea',
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
                          <small className="text-muted">ความแข็งแกร่งของรหัสผ่าน:</small>
                          <small style={{ color: passwordStrength.color, fontWeight: 'bold' }}>
                            {passwordStrength.strengthText}
                          </small>
                        </div>
                        <div className="progress" style={{ height: '4px', borderRadius: '2px' }}>
                          <div 
                            className="progress-bar" 
                            style={{ 
                              width: `${(passwordStrength.score / 5) * 100}%`,
                              backgroundColor: passwordStrength.color,
                              transition: 'all 0.3s ease'
                            }}
                          />
                        </div>
                        <small className="text-muted d-block mt-1">
                          {passwordStrength.feedback}
                        </small>
                        {passwordStrength.score >= 3 && (
                          <small className="text-success d-block mt-1">
                            <i className="fas fa-check-circle me-1"></i>
                            รหัสผ่านมีความปลอดภัยเพียงพอ
                          </small>
                        )}
                      </div>
                    )}

                    <div className="mt-2">
                      <small className="text-info">
                        <i className="fas fa-shield-alt me-1"></i>
                        รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก
                      </small>
                    </div>
                  </div>

                  {/* Name fields */}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-crown me-2" style={{color: '#667eea'}}></i>
                        คำนำหน้าชื่อ
                      </label>
                      <select
                        name="firstname"
                        className={`form-select ${errors.firstname ? 'is-invalid' : ''}`}
                        value={formData.firstname}
                        onChange={handleChange}
                        disabled={isLoading}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
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
                      <label className="form-label fw-bold text-dark">ชื่อ</label>
                      <input
                        type="text"
                        name="fullname"
                        className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                        value={formData.fullname}
                        onChange={handleChange}
                        placeholder="ชื่อ"
                        disabled={isLoading}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
                        }}
                      />
                      {errors.fullname && <div className="invalid-feedback">{errors.fullname}</div>}
                    </div>

                    <div className="col-md-4">
                      <label className="form-label fw-bold text-dark">นามสกุล</label>
                      <input
                        type="text"
                        name="lastname"
                        className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                        value={formData.lastname}
                        onChange={handleChange}
                        placeholder="นามสกุล"
                        disabled={isLoading}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
                        }}
                      />
                      {errors.lastname && <div className="invalid-feedback">{errors.lastname}</div>}
                    </div>
                  </div>

                  {/* Address */}
                  <div className="mb-4">
                    <label className="form-label fw-bold text-dark">
                      <i className="fas fa-map-marker-alt me-2" style={{color: '#667eea'}}></i>
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
                        borderRadius: '10px',
                        border: '2px solid #e9ecef',
                        padding: '12px 16px',
                        fontSize: '14px',
                        resize: 'vertical'
                      }}
                    />
                    {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                  </div>

                  {/* Sex and Birth Date */}
                  <div className="row mb-4">
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-venus-mars me-2" style={{color: '#667eea'}}></i>
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
                              borderColor: '#667eea',
                              transform: 'scale(1.1)'
                            }}
                          />
                          <label className="form-check-label">
                            <i className="fas fa-mars me-1" style={{color: '#4A90E2'}}></i>
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
                              borderColor: '#667eea',
                              transform: 'scale(1.1)'
                            }}
                          />
                          <label className="form-check-label">
                            <i className="fas fa-venus me-1" style={{color: '#E91E63'}}></i>
                            หญิง
                          </label>
                        </div>
                      </div>
                      {errors.sex && <div className="text-danger mt-1" style={{fontSize: '0.875rem'}}>{errors.sex}</div>}
                    </div>
                    
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-birthday-cake me-2" style={{color: '#667eea'}}></i>
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
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
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
                          borderColor: '#667eea',
                          transform: 'scale(1.1)'
                        }}
                      />
                      <label className="form-check-label">
                        <i className="fas fa-shield-alt me-2" style={{color: '#667eea'}}></i>
                        ฉันยอมรับ <a href="#" style={{color: '#667eea', textDecoration: 'none'}}>เงื่อนไขการใช้งาน</a> และ <a href="#" style={{color: '#667eea', textDecoration: 'none'}}>นโยบายความเป็นส่วนตัว</a>
                      </label>
                    </div>
                    {errors.acceptTerms && <div className="text-danger mt-1" style={{fontSize: '0.875rem'}}>{errors.acceptTerms}</div>}
                  </div>

                  {/* Security Notice */}
                  <div className="alert alert-info" style={{
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    border: '1px solid rgba(102, 126, 234, 0.2)',
                    borderRadius: '10px'
                  }}>
                    <div className="d-flex align-items-center">
                      <i className="fas fa-info-circle me-2" style={{color: '#667eea'}}></i>
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
                          ? 'linear-gradient(45deg, #a0a0a0, #888888)' 
                          : 'linear-gradient(45deg, #667eea, #764ba2)',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                        transition: 'all 0.3s ease',
                        cursor: isLoading ? 'not-allowed' : 'pointer'
                      }}
                      onMouseOver={(e) => {
                        if (!isLoading) {
                          e.target.style.transform = 'translateY(-2px)';
                          e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                        }
                      }}
                      onMouseOut={(e) => {
                        if (!isLoading) {
                          e.target.style.transform = 'translateY(0)';
                          e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
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
                <p className="text-muted mb-0">
                  มีบัญชีอยู่แล้ว? <a href="/Login" style={{color: '#667eea', textDecoration: 'none', fontWeight: 'bold'}}>เข้าสู่ระบบ</a>
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
    </div>
  );
};

export default Register;
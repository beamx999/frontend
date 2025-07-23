"use client";

import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    title: '',
    firstName: '',
    lastName: '',
    address: '',
    gender: '',
    birthDate: '',
    acceptTerms: false
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error for this field when user starts typing/selecting
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username) newErrors.username = 'กรุณากรอกชื่อผู้ใช้';
    if (!formData.password) newErrors.password = 'กรุณากรอกรหัสผ่าน';
    if (!formData.title) newErrors.title = 'กรุณาเลือกคำนำหน้าชื่อ';
    if (!formData.firstName) newErrors.firstName = 'กรุณากรอกชื่อ';
    if (!formData.lastName) newErrors.lastName = 'กรุณากรอกนามสกุล';
    if (!formData.address) newErrors.address = 'กรุณากรอกที่อยู่';
    if (!formData.gender) newErrors.gender = 'กรุณาเลือกเพศ';
    if (!formData.birthDate) newErrors.birthDate = 'กรุณาเลือกวันเกิด';
    if (!formData.acceptTerms) newErrors.acceptTerms = 'กรุณายอมรับเงื่อนไข';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('สมัครสมาชิกสำเร็จ!');
      console.log('Form Data:', formData);
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
                <div>
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
                    </label>
                    <input
                      type="password"
                      name="password"
                      className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="กรอกรหัสผ่าน"
                      style={{
                        borderRadius: '10px',
                        border: '2px solid #e9ecef',
                        padding: '12px 16px',
                        fontSize: '14px'
                      }}
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                  </div>

                  {/* Title and Name Row */}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-crown me-2" style={{color: '#667eea'}}></i>
                        คำนำหน้าชื่อ
                      </label>
                      <select
                        name="title"
                        className={`form-select ${errors.title ? 'is-invalid' : ''}`}
                        value={formData.title}
                        onChange={handleChange}
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
                      {errors.title && <div className="invalid-feedback">{errors.title}</div>}
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold text-dark">ชื่อ</label>
                      <input
                        type="text"
                        name="firstName"
                        className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="ชื่อ"
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
                        }}
                      />
                      {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                    </div>
                    <div className="col-md-4">
                      <label className="form-label fw-bold text-dark">นามสกุล</label>
                      <input
                        type="text"
                        name="lastName"
                        className={`form-control ${errors.lastName ? 'is-invalid' : ''}`}
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="นามสกุล"
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
                        }}
                      />
                      {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
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

                  {/* Gender and Birth Date Row */}
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
                            name="gender"
                            value="male"
                            checked={formData.gender === 'male'}
                            onChange={handleChange}
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
                            name="gender"
                            value="female"
                            checked={formData.gender === 'female'}
                            onChange={handleChange}
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
                      {errors.gender && <div className="text-danger mt-1" style={{fontSize: '0.875rem'}}>{errors.gender}</div>}
                    </div>
                    <div className="col-md-6">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-birthday-cake me-2" style={{color: '#667eea'}}></i>
                        วันเกิด
                      </label>
                      <input
                        type="date"
                        name="birthDate"
                        className={`form-control ${errors.birthDate ? 'is-invalid' : ''}`}
                        value={formData.birthDate}
                        onChange={handleChange}
                        style={{
                          borderRadius: '10px',
                          border: '2px solid #e9ecef',
                          padding: '12px 16px',
                          fontSize: '14px'
                        }}
                      />
                      {errors.birthDate && <div className="invalid-feedback">{errors.birthDate}</div>}
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

                  {/* Submit Button */}
                  <div className="d-grid">
                    <button
                      type="button"
                      className="btn btn-lg"
                      onClick={handleSubmit}
                      style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        border: 'none',
                        borderRadius: '10px',
                        color: 'white',
                        padding: '12px 0',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.transform = 'translateY(-2px)';
                        e.target.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.transform = 'translateY(0)';
                        e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                      }}
                    >
                      <i className="fas fa-user-plus me-2"></i>
                      สมัครสมาชิก
                    </button>
                  </div>
                </div>
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
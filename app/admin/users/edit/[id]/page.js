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
        const response = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
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
        confirmButtonColor: '#667eea'
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

      const response = await fetch(`http://itdev.cmtc.ac.th:3000/api/users`, {
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
        confirmButtonColor: '#667eea'
      });

      // ล้างค่า password field เพื่อความปลอดภัย
      setPassword('');
      
      // อัพเดทข้อมูลใน items หลังจากแก้ไขสำเร็จ
      const updatedResponse = await fetch(`http://itdev.cmtc.ac.th:3000/api/users/${id}`);
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
        background: 'linear-gradient(135deg,rgb(53, 255, 171) 0%,rgb(255, 51, 129) 100%)',
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
                      background: 'linear-gradient(45deg,rgb(255, 123, 0),rgb(77, 255, 61))',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}>
                      🌟
                    </span>
                  </div>
                  <h2 className="mb-0" style={{
                    background: 'linear-gradient(45deg,rgb(119, 0, 255),rgb(255, 27, 168))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    fontWeight: 'bold'
                  }}>
                    แก้ไขข้อมูลสมาชิก
                  </h2>
                  <p className="text-muted mt-2">กรอกข้อมูลเพื่อแก้ไข</p>
                </div>
              </div>
              
              <div className="card-body px-5 py-4">
                {/* แสดงข้อมูลเมื่อโหลดเสร็จแล้ว */}
                {items.length === 0 ? (
                  <div className="text-center">
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-2">กำลังโหลดข้อมูล...</p>
                  </div>
                ) : (
                  <form onSubmit={handleUpdateSubmit}>
                    {/* Username */}
                    <div className="mb-4">
                      <label className="form-label fw-bold text-dark">
                        <i className="fas fa-user me-2" style={{color: '#667eea'}}></i>
                        ชื่อผู้ใช้
                      </label>
                      <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={`form-control ${errors.username ? 'is-invalid' : ''}`}
                        placeholder="กรอกชื่อผู้ใช้"
                        disabled={isLoading}
                        required
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
                        <small className="text-muted ms-2">(เว้นว่างไว้หากไม่ต้องการเปลี่ยน)</small>
                      </label>
                      <div className="position-relative">
                        <input
                          type={showPassword ? 'text' : 'password'}
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                            validatePasswordStrength(e.target.value);
                          }}
                          className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="กรอกรหัสผ่านใหม่ (หากต้องการเปลี่ยน)"
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
                      {password && (
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
                        </div>
                      )}
                      
                      {password && (
                        <div className="mt-2">
                          <small className="text-info">
                            <i className="fas fa-shield-alt me-1"></i>
                            รหัสผ่านจะถูกเข้ารหัสอย่างปลอดภัยก่อนบันทึก
                          </small>
                        </div>
                      )}
                    </div>

                    {/* Name fields */}
                    <div className="row mb-4">
                      <div className="col-md-4">
                        <label className="form-label fw-bold text-dark">
                          <i className="fas fa-crown me-2" style={{color: '#667eea'}}></i>
                          คำนำหน้าชื่อ
                        </label>
                        <select
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          className={`form-select ${errors.firstname ? 'is-invalid' : ''}`}
                          disabled={isLoading}
                          required
                          style={{
                            borderRadius: '10px',
                            border: '2px solid #e9ecef',
                            padding: '12px 16px',
                            fontSize: '14px'
                          }}
                        >
                          <option value="">เลือกคำนำหน้า</option>
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
                          placeholder="ชื่อ"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          className={`form-control ${errors.fullname ? 'is-invalid' : ''}`}
                          disabled={isLoading}
                          required
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
                          placeholder="นามสกุล"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          className={`form-control ${errors.lastname ? 'is-invalid' : ''}`}
                          disabled={isLoading}
                          required
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
                        placeholder="กรอกที่อยู่"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                        rows="3"
                        disabled={isLoading}
                        required
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
                              checked={sex === 'male'}
                              onChange={(e) => setSex(e.target.value)}
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
                              checked={sex === 'female'}
                              onChange={(e) => setSex(e.target.value)}
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
                          value={birthday}
                          onChange={(e) => setBirthday(e.target.value)}
                          className={`form-control ${errors.birthday ? 'is-invalid' : ''}`}
                          disabled={isLoading}
                          required
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
                          checked={acceptTerms}
                          onChange={(e) => setAcceptTerms(e.target.checked)}
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
}
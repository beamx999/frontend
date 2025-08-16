"use client";
import React from 'react';

const Card = () => {
  // ข้อมูล mock สำหรับการแสดงผล
  const cardData = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      title: "Web Development",
      description: "สร้างเว็บไซต์ที่ทันสมัยและตอบสนองต่อผู้ใช้งาน"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop",
      title: "Mobile App",
      description: "พัฒนาแอปพลิเคชันมือถือที่ใช้งานง่าย"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop",
      title: "UI/UX Design",
      description: "ออกแบบส่วนติดต่อผู้ใช้ที่สวยงามและใช้งานง่าย"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&h=300&fit=crop",
      title: "Data Analytics",
      description: "วิเคราะห์ข้อมูลเพื่อหาข้อมูลเชิงลึกทางธุรกิจ"
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      title: "Digital Marketing",
      description: "สร้างกลยุทธ์การตลาดออนไลน์ที่มีประสิทธิภาพ"
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop",
      title: "Cloud Computing",
      description: "บริการคลาวด์ที่ปลอดภัยและมีประสิทธิภาพ"
    },
    {
      id: 7,
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=300&fit=crop",
      title: "AI & Machine Learning",
      description: "พัฒนาระบบ AI ที่ช่วยแก้ไขปัญหาธุรกิจ"
    },
    {
      id: 8,
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=400&h=300&fit=crop",
      title: "Cybersecurity",
      description: "ปกป้องข้อมูลและระบบจากภัยคุกคามทางไซเบอร์"
    },
    {
      id: 9,
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",
      title: "DevOps",
      description: "ปรับปรุงกระบวนการพัฒนาและปรับใช้ซอฟต์แวร์"
    }
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />
      
      <div 
        className="container-fluid py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
          minHeight: '100vh'
        }}
      >
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 
                className="display-4 fw-bold mb-3" 
                style={{ 
                  color: '#ffffff',
                  textShadow: '2px 2px 8px rgba(220, 20, 60, 0.6), 0 0 20px rgba(220, 20, 60, 0.3)',
                  filter: 'drop-shadow(0 0 10px rgba(220, 20, 60, 0.4))'
                }}
              >
                Our Services
              </h2>
              <p 
                className="lead mb-3" 
                style={{ 
                  color: '#cccccc',
                  textShadow: '1px 1px 4px rgba(0,0,0,0.8)'
                }}
              >
                บริการที่เราให้กับลูกค้าอย่างมืออาชีพ
              </p>
            </div>
          </div>
          
          <div className="row g-4">
            {cardData.map((card) => (
              <div key={card.id} className="col-lg-4 col-md-6 col-sm-12">
                <div 
                  className="card h-100 border-0"
                  style={{
                    background: 'linear-gradient(145deg, #2a2a2a, #1e1e1e)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'pointer',
                    boxShadow: `
                      0 8px 32px rgba(220, 20, 60, 0.15),
                      0 4px 16px rgba(0, 0, 0, 0.8),
                      inset 0 1px 2px rgba(255, 255, 255, 0.1),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                    `,
                    border: '1px solid rgba(220, 20, 60, 0.2)',
                    borderRadius: '15px',
                    overflow: 'hidden',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `
                      0 20px 60px rgba(220, 20, 60, 0.4),
                      0 10px 40px rgba(220, 20, 60, 0.3),
                      0 5px 20px rgba(0, 0, 0, 0.9),
                      inset 0 1px 3px rgba(255, 255, 255, 0.2),
                      inset 0 -1px 3px rgba(0, 0, 0, 0.9),
                      0 0 0 1px rgba(220, 20, 60, 0.5)
                    `;
                    e.currentTarget.style.background = 'linear-gradient(145deg, #333333, #252525)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = `
                      0 8px 32px rgba(220, 20, 60, 0.15),
                      0 4px 16px rgba(0, 0, 0, 0.8),
                      inset 0 1px 2px rgba(255, 255, 255, 0.1),
                      inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                    `;
                    e.currentTarget.style.background = 'linear-gradient(145deg, #2a2a2a, #1e1e1e)';
                  }}
                >
                  <div className="position-relative overflow-hidden">
                    {/* Glow Effect Overlay */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: 'linear-gradient(45deg, rgba(220, 20, 60, 0.1), transparent, rgba(139, 0, 0, 0.1))',
                        zIndex: 1,
                        transition: 'opacity 0.4s ease'
                      }}
                    />
                    
                    <img 
                      src={card.image}
                      className="card-img-top"
                      alt={card.title}
                      style={{
                        height: '250px',
                        objectFit: 'cover',
                        transition: 'all 0.4s ease',
                        filter: 'brightness(0.7) contrast(1.2) saturate(1.1)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.15)';
                        e.currentTarget.style.filter = 'brightness(0.9) contrast(1.3) saturate(1.3)';
                        e.currentTarget.previousElementSibling.style.opacity = '0.3';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.filter = 'brightness(0.7) contrast(1.2) saturate(1.1)';
                        e.currentTarget.previousElementSibling.style.opacity = '1';
                      }}
                    />
                    
                    {/* Edge Glow Effect */}
                    <div 
                      className="position-absolute bottom-0 start-0 w-100"
                      style={{
                        height: '4px',
                        background: 'linear-gradient(90deg, transparent, rgba(220, 20, 60, 0.8), transparent)',
                        zIndex: 2
                      }}
                    />
                  </div>
                  
                  <div className="card-body d-flex flex-column p-4" style={{ position: 'relative' }}>
                    {/* Inner Glow Effect */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background: 'radial-gradient(ellipse at center, rgba(220, 20, 60, 0.05) 0%, transparent 70%)',
                        pointerEvents: 'none',
                        borderRadius: '0 0 15px 15px'
                      }}
                    />
                    
                    <h5 
                      className="card-title fw-bold mb-3 position-relative"
                      style={{ 
                        color: '#ffffff',
                        fontSize: '1.25rem',
                        textShadow: '1px 1px 4px rgba(0,0,0,0.8), 0 0 8px rgba(220, 20, 60, 0.3)',
                        zIndex: 1
                      }}
                    >
                      {card.title}
                    </h5>
                    <p 
                      className="card-text flex-grow-1 position-relative"
                      style={{ 
                        lineHeight: '1.6',
                        color: '#cccccc',
                        textShadow: '1px 1px 2px rgba(0,0,0,0.8)',
                        zIndex: 1
                      }}
                    >
                      {card.description}
                    </p>
                    <div className="mt-3 position-relative" style={{ zIndex: 1 }}>
                      <button 
                        className="btn btn-sm position-relative overflow-hidden"
                        style={{
                          background: 'linear-gradient(45deg, #dc143c, #8b0000)',
                          color: '#ffffff',
                          border: '1px solid rgba(220, 20, 60, 0.5)',
                          borderRadius: '25px',
                          padding: '10px 25px',
                          fontWeight: '600',
                          transition: 'all 0.4s ease',
                          boxShadow: `
                            0 4px 15px rgba(220, 20, 60, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.2),
                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                          `,
                          textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
                          e.currentTarget.style.background = 'linear-gradient(45deg, #ff1744, #b71c1c)';
                          e.currentTarget.style.boxShadow = `
                            0 8px 25px rgba(220, 20, 60, 0.5),
                            0 4px 15px rgba(255, 23, 68, 0.4),
                            inset 0 1px 3px rgba(255, 255, 255, 0.3),
                            inset 0 -1px 3px rgba(0, 0, 0, 0.9)
                          `;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1) translateY(0)';
                          e.currentTarget.style.background = 'linear-gradient(45deg, #dc143c, #8b0000)';
                          e.currentTarget.style.boxShadow = `
                            0 4px 15px rgba(220, 20, 60, 0.3),
                            inset 0 1px 2px rgba(255, 255, 255, 0.2),
                            inset 0 -1px 2px rgba(0, 0, 0, 0.8)
                          `;
                        }}
                      >
                        <span style={{ position: 'relative', zIndex: 1 }}>เรียนรู้เพิ่มเติม</span>
                        {/* Button glow effect */}
                        <div 
                          className="position-absolute top-0 start-0 w-100 h-100"
                          style={{
                            background: 'linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.1), transparent)',
                            transform: 'translateX(-100%)',
                            transition: 'transform 0.6s ease',
                            borderRadius: '25px'
                          }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bootstrap JS CDN */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
    </>
  );
};

export default Card;
"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const About = () => {
  const team = [
    { 
      name: "นายธนกฤต สุปัญญา", 
      role: "CEO & Founder", 
      img: "/image/Profile.jpg",
      experience: "3+ Yaears in Travel Industry",
      specialty: "Tour Planning, Customer Service",
      education: "Hihger Vocational Certificate in information Technology",
    },
  ];

  const values = [
    {
      icon: "🌸",
      title: "omotenashi",
      subtitle: "การบริการจากใจ",
      description: "ดูแลลูกค้าด้วยความใส่ใจแบบญี่ปุ่นแท้"
    },
    {
      icon: "⛩️",
      title: "伝統 (Dentō)",
      subtitle: "ประเพณี",
      description: "นำเสนอวัฒนธรรมญี่ปุ่นอันแท้จริง"
    },
    {
      icon: "🍃",
      title: "自然 (Shizen)",
      subtitle: "ธรรมชาติ",
      description: "สัมผัสความงามของธรรมชาติญี่ปุ่นตลอด 4 ฤดู"
    }
  ];

  return (
    <>
      {/* Custom CSS for Sakura Theme */}
      <style jsx>{`
        .sakura-gradient {
          background: linear-gradient(135deg, #ffeef8 0%, #ffe4f1 50%, #ffd6eb 100%);
        }
        
        .sakura-card {
          background: rgba(255, 255, 255, 0.9);
          border: 2px solid #ffb3d9;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }
        
        .sakura-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 35px rgba(255, 179, 217, 0.3);
          border-color: #ff80cc;
        }
        
        .japanese-text {
          font-family: 'Hiragino Sans', 'Yu Gothic', 'Meiryo', sans-serif;
        }
        
        .sakura-title {
          color: #d63384;
          text-shadow: 2px 2px 4px rgba(214, 51, 132, 0.1);
          position: relative;
        }
        
        .sakura-title::after {
          content: '🌸';
          position: absolute;
          right: -40px;
          top: 0;
          animation: float 3s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .traditional-border {
          border-left: 4px solid #d63384;
          border-image: linear-gradient(to bottom, #d63384, #ffb3d9) 1;
        }
        
        .experience-badge {
          background: linear-gradient(45deg, #d63384, #ff80cc);
          color: white;
          border-radius: 20px;
          padding: 5px 15px;
          font-size: 0.9rem;
        }
        
        .floating-sakura {
          position: absolute;
          animation: sakura-fall 8s linear infinite;
          pointer-events: none;
        }
        
        @keyframes sakura-fall {
          0% {
            transform: translateY(-100px) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      <div className="sakura-gradient min-vh-100 position-relative">
        {/* Floating Sakura Petals */}
        <div className="floating-sakura" style={{left: '10%', animationDelay: '0s'}}>🌸</div>
        <div className="floating-sakura" style={{left: '20%', animationDelay: '2s'}}>🌸</div>
        <div className="floating-sakura" style={{left: '80%', animationDelay: '4s'}}>🌸</div>
        <div className="floating-sakura" style={{left: '90%', animationDelay: '6s'}}>🌸</div>

        <div className="container py-5">
          {/* Section: About Company */}
          <div className="text-center mb-5">
            <h1 className="sakura-title japanese-text mb-4">
              私たちについて
              <br />
              <small className="text-muted fs-3">เกี่ยวกับเรา</small>
            </h1>
            
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="sakura-card p-4 rounded-3 traditional-border">
                  <p className="lead japanese-text">
                    บริษัท <b className="text-danger">🌸 Sakura Travel Japan 🌸</b> 
                    <br />
                    <span className="text-muted fs-6">株式会社さくら旅行ジャパン</span>
                  </p>
                  <p className="mb-3">
                    เป็นบริษัทท่องเที่ยวในประเทศญี่ปุ่นที่มุ่งเน้นการบริการคุณภาพสูง 
                    พร้อมสร้างประสบการณ์ท่องเที่ยวที่น่าจดจำ ทั้งทัวร์วัฒนธรรม 
                    อาหารท้องถิ่น และสถานที่ท่องเที่ยวชื่อดัง
                  </p>
                  <p>
                    เรามุ่งมั่นให้ลูกค้าได้รับความประทับใจในทุกการเดินทาง
                    โดยมีทีมงานมืออาชีพคอยให้คำปรึกษาและดูแลอย่างใกล้ชิด
                    ด้วยจิตวิญญาณ <b className="text-danger">おもてなし (Omotenashi)</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: Company Values */}
          <div className="mb-5">
            <h2 className="text-center sakura-title mb-4">ค่านิยมของเรา</h2>
            <div className="row">
              {values.map((value, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <div className="sakura-card h-100 p-4 text-center">
                    <div className="display-1 mb-3">{value.icon}</div>
                    <h4 className="japanese-text text-danger">{value.title}</h4>
                    <h6 className="text-muted mb-3">{value.subtitle}</h6>
                    <p className="small">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Team */}
          <div className="text-center mb-4">
            <h2 className="sakura-title">チーム <small className="text-muted fs-4">ผู้จัดทำ</small></h2>
          </div>

          <div className="row justify-content-center">
            {team.map((member, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className="sakura-card h-100 overflow-hidden">
                  <div className="position-relative">
                    <img
                      src={member.img}
                      className="card-img-top"
                      alt={member.name}
                      style={{height: '300px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-2">
                      <span className="experience-badge">CEO</span>
                    </div>
                  </div>
                  
                  <div className="card-body text-center p-4">
                    <h5 className="card-title japanese-text text-danger mb-1">
                      {member.name}
                    </h5>
                    <p className="text-muted small mb-3">{member.role}</p>
                    
                    <div className="text-start">
                      <div className="mb-2">
                        <small className="text-muted">📚 Education:</small>
                        <br />
                        <small>{member.education}</small>
                      </div>
                      
                      <div className="mb-2">
                        <small className="text-muted">💼 Expsure:</small>
                        <br />
                        <small>{member.experience}</small>
                      </div>
                      
                      <div className="mb-2">
                        <small className="text-muted">🎯 Expertise:</small>
                        <br />
                        <small>{member.specialty}</small>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-top">
                      <small className="text-muted japanese-text">
                        "日本の美しさをお客様に" 
                        <br />
                        "นำเสนอความสวยงามของญี่ปุ่นสู่ลูกค้า"
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;